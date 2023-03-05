//Create Question Array
var questionsArr = [
    {
        question: 'Who is the author of the Kingdom Keepers Book Series?',
        answer: 'Ridley Pearson',
        options: [
            'James Patterson',
            'Aiden Thomas',
            'Ridley Pearson',
            'Dave Barry',
        ]
    },
    {
        question: 'Who is the author of the Percy Jackson Book Series?',
        answer: "Rick Riordan",
        options: [
            "James Patterson",
            "Rick Riordan",
            "Marie Lu",
            "Leigh Bardugo",
        ]
    },
    {
        question: "Who is the author of The Invisible Life of Addie La Rue?",
        answer: "V.E. Schwab",
        options: [
            "T.J. Klune",
            "M.L. Rio",
            "M.K. Lobb",
            "V.E. Schwab",
        ]
    },
    {
        question: "Who is the author of The Scorpio Races",
        answer: "Maggie Stiefvater",
        options: [
            "Maggie Stiefvater",
            "Tamsyn Muir",
            "Sophie Gonzales",
            "Katherin Center",
        ]
    },
    {
        question: "Who is the author of the Legend Series?",
        answer: "Marie Lu",
        options: [
            "Leigh Bardugo",
            "Marie Lu",
            "Amie Kaufman",
            "Jennifer A. Nielsen",
        ]
    },
  ]
  //Create QUIZ ELEMENTS (option buttons, question and timer paragraphs)
  //quiz
  var quiz = document.getElementById('quiz')
  //timer
  var timer = document.createElement('p')
  var seconds
  var timerEl
  //questions
  var question = document. createElement('p')
  var currentQuestion 
  //score
  var numCorrect
  var previousScore
  var finalScoreEl = document.createElement('p')
  //start button
  var answerBtn = document.createElement('button')
   
  function setUp(){
    //fresh score for attempt
    numCorrect = 0
    i = 0
    quiz.innerHTML = ''
    //show previous score
    previousScore = localStorage.getItem('previous-score')
    if(previousScore){
      finalScoreEl.textContent = "Previous Score:" + previousScore + '%'
      quiz.appendChild(finalScoreEl)
    }
    //start button
    answerBtn.id = 'start-quiz'
    answerBtn.textContent = 'Start Quiz!'
    quiz.appendChild(answerBtn)
    }
    
    function runQuiz(){
        //fresh timer per question
        seconds = 30
        quiz.innerHTML = ''
        // question
         var questions = questionsArr[i]
         question.textContent = questions.question
         quiz.appendChild(question)
       
         //buttons
         var choices = document.createElement('div')
         choices.id = 'choices'
         quiz.appendChild(choices)
         questions.options.forEach(function(choice){
           var optionBtn = document.createElement('button')
           optionBtn.textContent = choice
           choices.appendChild(optionBtn)
         })
         //timer
         timer.id = "timer"
         timer.textContent = seconds
         quiz.appendChild(timer)
         countdown()
       }
      
       //countdown
      function countdown(){
      timerEl = setInterval(function(){
        seconds--
        if(seconds > 0){
            timer.textContent = seconds
        }else{
          //advance when time runs out
            clearInterval(timerEl)
            i++
            //determine if should advance or end quiz
            if(i< questionsArr.length){
              runQuiz()
            }else{
              endQuiz()
            }
        }
      }, 1000)
      }

      quiz.onclick = function(e){
        //start quiz
        if(e.target.id === 'start-quiz'){
          runQuiz()
        }else if (e.target.parentElement.id === 'choices' && e.target.tagName === 'BUTTON'){
          //move forward if choice made
          if(e.target.textContent === questionsArr[i].answer){
            //add to score if correct
            numCorrect++
          }
          //reset for new question
          clearInterval(timerEl)
          i++
          //determine if move forward or end quiz
          if(i < questionsArr.length){
            runQuiz()
          }else{
            endQuiz()
          }
        }
    }