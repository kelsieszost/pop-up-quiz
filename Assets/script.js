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

