//Create QUIZ ELEMENTS (option buttons, question and timer paragraphs)
var quiz = document.getElementById('quiz')
var btn = document.createElement("button")
btn.setAttribute(id) = "start-quiz"
var quizBtn = quiz.appendChild(btn)
var question = document.createElement("p")
var countdown = document.createElement("p")
var quizQuestion = quiz.appendChild(p.first)
var quizTimer = quiz.appendChild(p.last)
var optionOne = document.createElement("button")
var optionTwo = document.createElement("button")
var optionThree = document.createElement("button")
var optionFour = document.createElement("button")
var optionBlock = document.createElement("div")
var quizOptions = quiz.appendChild(div)
//look at to-do to see how we appended individual items (rotate through array?)
var quizAnswerOne = quiz.div.appendChild(btn)
//Other Variables
var PREVIOUS_SCORE = "previous-score"
//go back to first array assignment to look at how to calculate score 
var score = Math.floor((numCorrect/Array.length)*100)
var seconds = 30
//Create Question Array
var questionsArr = [
    {
        question: "Who is the author of the Kingdom Keepers Book Series?",
        answer: "Ridley Pearson",
        options: [
            "James Patterson",
            "Aiden Thomas",
            "Ridley Pearson",
            "Dave Barry",
        ]
    },
    {
        question: "Who is the author of the Percy Jackson Book Series?",
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
        question: "",
        answer: "Marie Lu",
        options: [
            "Leigh Bardugo",
            "Marie Lu",
            "Amie Kaufman",
            "Jennifer A. Nielsen",
        ]
    },
]
//Display Quiz Button on initial page load
//Display Quiz Button and Previous Score on future page load
quizQuestion.textContent = questionsArr.question

var timerStart = setInterval(function(){
    quizTimer.textContent = seconds-1
    if(countdown === 0){
        clearInterval()
    }if(btn.onclick){
        clearInterval()
    }
}, 1000)
//Cycle Through the Five Questions
//Go back to the beginning and show score when all five are answered
//show score when at beginning
//store score in local using key
