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
var highscoreElm = document.querySelector("#highscorelist");
var leaderNamesDisplay = document.querySelector("#leaderinitials");
var leaderScoresDisplay = document.querySelector("#leaderscores");
var clearDataBtn = document.querySelector("#clearscore");
var playAgainBtn = document.querySelector("#playagain");
var highScoreBtn= document.querySelector("#highscores");

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