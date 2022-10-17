var startScreen = document.querySelector("#startscreen");
var startButton = document.querySelector("#starBtn")
var quizPage = document.querySelector("#quizpage");
var countDown = document.querySelector("#countdown");
var questionList = document.querySelector("#questionlist");

var buttonA = document.querySelector("#A");
var buttonB = document.querySelector("#B");
var buttonC = document.querySelector("#C");
var buttonD = document.querySelector("#D");

var endGame = document.querySelector("#endgame");
var answerChoice = document.querySelector("#rightwrong");
var finalScore = document.querySelector("#finalscore");
var yourScore = document.querySelector("#yourscore");
var initialsEl = document.querySelector("#enterinitials");
var submitScore = document.querySelector("#submit");
var leaderboardEl = document.querySelector("#leaderboard");
var highscoreElm = document.querySelector("#highscores");
var leaderNamesDisplay = document.querySelector("#leaderinitials");
var leaderScoresDisplay = document.querySelector("#leaderscores");
var clearDataBtn = document.querySelector("#clearscore");
var playAgain = document.querySelector("#playAgainBtn");
var highScoreBtn= document.querySelector("#highScoresList");

var timeRemaining = 60;
var timeClock;
var questionIndex = 0
var correctAnswer;
var score= 0;
var leaderBoard = [];
var text = document.createElement("text");

let questions =[

    {
    question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
    
    A: "Integer.Parse",
    B: "Parse.Int",
    C: "None",
    D: "Int.Parse",
   
    correctChoice: "D"
},
{
    question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
    
        A:"Alert()",
        B: "Prompt()",
        C: "Confirm()",
        D: "Msg()",
    
        correctChoice: "B",
},
{
    question: "IsNaN() Evaluates And Argument To Determine if Given Value:",
    
        A: "Is Not a Null",
        B: "Is Not a Number",
        C: "Is Not a New Object",
        D: "None of the Above",
    
        correctChoice: "B"
},
{
    question: "A Function Associated With An object is Called:",
    
    
        A: "Function",
        B: "Method",
        C: "Link",
        D: "None",
    
        correctChoice: "B",

},
{
    question: "Event is Used To Check An Empty Text Box:",
    
        A: "Onclick()",
        B: "OnFocus()",
        C: "OnBlur()",
        D: "None",
    
        correctChoice: "C",
}
];

var quizLength = questions.length

function startQuiz() {
    startScreen.style.display = "none";
    addQuestions();
    timeClock =setInterval(function(){
        timeRemaining --;
        countDown.textContent = "Time Remaining: " + timeRemaining;
    if(timeRemaining === 0 || questionIndex === quizLength){
        clearInterval(timeClock);
        endGame.style.display = "block";
        quizpage.style.display = "none";
        displayScore();
    }
    
    }, 1000);
    quizPage.style.display = "block";
};

function addQuestions(){
    
    var currentQuestion = questions[questionIndex];
    questionList.textContent = currentQuestion.question;
    buttonA.textContent = currentQuestion.A;
    buttonB.textContent = currentQuestion.B;
    buttonC.textContent = currentQuestion.C;
    buttonD.textContent = currentQuestion.D;
};

function checkAnswer (answer){
    rightwrong.setAttribute("style", "display:Block");
    rightwrong.appendChild(text);
   
    correct = questions[questionIndex].correctChoice;

    if (answer === correct && questionIndex !== quizLength ){
        text.textContent = "Correct!";
        questionIndex++;
        score++;
        
    }else if(answer !== correct && questionIndex !== quizLength){
        text.textContent ="Incorrect!";
        questionIndex++;
        timeRemaining = timeRemaining -10;
        countDown.textContent = "Time Remaining" + timeRemaining;

    }else{
        displayScore();
    }

    if (questionIndex !== quizLength){
        addQuestions();
    }

};

startBtn.addEventListener("click", startQuiz);

submitScore.addEventListener("click", function highscoreEl(){
    highscoreElm.setAttribute("style", "display: block");

    if(initialsEl.value === ""){
        alert("Enter Your Initials");
        highscoreElm.setAttribute("style", "display: none");
        return false;
    }else{
        var pastHighScores = JSON.parse(localStorage.getItem("pastHighScores")) || [];
        var newName = initialsEl.value.trim();
        var newHighscore ={
            name : newName,
            score : score
        }
    }
    console.log(newHighscore);
    pastHighScores.push(newHighscore);
    localStorage.setItem("pastHighScores", JSON.stringify(pastHighScores));
    generateHighscore();

});

function displayScore(){
    initialsEl.value= "";
    finalScore.textContent = "Your final score is " + score + " out of " + quizLength;
    
};

function generateHighscore(){
    endGame.setAttribute("style", "display: none");
    leaderNamesDisplay.textContent = "";
    leaderScoresDisplay.textContent ="";
    var highscores = JSON.parse(localStorage.getItem("pastHighScores")) || [];
    highscores.sort(function(a,b){
       return b.score - a.score;
       
    })

    for (i=0; i<highscores.length; i++){
       var newNameInitials = document.createElement("li");
        newNameInitials.textContent = highscores[i].name + ":" + highscores[i].score;
        leaderNamesDisplay.appendChild(newNameInitials);
    }
            
        };


clearDataBtn.addEventListener("click", clearData);
  
function clearData(){
    localStorage.clear();
    leaderNamesDisplay.textContent ="";
    leaderScoresDisplay.textContent = "";
};

playAgain.addEventListener("click", function(){
    startScreen.style.display ="block";
    highscoreElm.setAttribute("style", "display: none");
    endGame.setAttribute("style", "display: none");
    timeRemaining = 60;
    countDown.textContent = "Time Remaining" + timeRemaining;
    score=0;
    questionIndex=0;
    text.textContent = "";
   
});

highScoreBtn.addEventListener("click", function(){
    endGame.setAttribute("style", "display: none");
    startScreen.setAttribute("style", "display: none");
    highscoreElm.setAttribute("style", "display: block");
    generateHighscore();
    


});


