//All required elements

let startButton = document.querySelector("#start-quiz-button");
let QuizBox = document.querySelector(".quiz-box");
let startQuizBox = document.querySelector(".start-quiz-box");

//Questions
let questions = [
    {
       question:"JavaScript is a ___ side programming language.", 
       answer:"Both",
       answerChoices: ["Client", "Server", "Both", "None"],
    },
    {
        question:"JavaScript is a ___ side programming language.", 
        answer:"Both",
        answerChoices: ["Client", "Server", "Both", "None"],
    },
    {
        question:"JavaScript is a ___ side programming language.", 
        answer:"Both",
        answerChoices: ["Client", "Server", "Both", "None"],
    }
]
let currentQuestion = 0
function showNextQuestion(){
    let questionText = document.getElementById("question");
    
    questionText.textContent = questions[currentQuestion].question
}   

//If Start Quiz Button Clicked

startButton.addEventListener("click", function(){
    console.log("quiz-box");
    QuizBox.style.display = "flex"
    startQuizBox.style.display = "none"  
    showNextQuestion()
})




//If Next Question Button Clicked


//If Right Answer


//If Wrong Answer

//Questions
