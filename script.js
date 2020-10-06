

// global variables referencing my tags and ids in html
var startBtn = document.getElementById("startBtn");// start button access
var startPage = document.querySelector(".startPage"); //page tag
var toHidden = document.getElementById("toHidden");
var questionDiv = document.getElementById("questionDiv");

var answers = document.getElementById("answers");
var userAnswers = document.getElementById("userAnswers");
var endGame = document.getElementById("end-game");

var scoreDiv = document.getElementById("score")
var endScreen = document.getElementById("end-screen")
var score = 0;
var time = 60;
var timer = document.querySelector("#timer");
var currentQuestionIndex = 0;
var finalTime = localStorage.getItem("time")
var finalScore = localStorage.getItem("score")
var saveBtn = document.getElementById("save")



//Create questions, answers, & correct answer
var questionArr = [
 {
    question: "Which of these is a standard markup language?",
    answer:["HTML", "JS", "CSS" ],
    corrAnswer: "HTML",
 }, {
    question: "What language needs the tag <script>? ",
    answer:["HTML", "JS", "CSS" ],
    corrAnswer: "JS",
 }, {
    question: "What is the main styling language?",
    answer:["HTML", "JS", "CSS" ],
    corrAnswer: "CSS"
},
]


// Click event for start button
// hide start page move to question div
startBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("click")
    startPage.style.display = "none"
    questionDiv.style.display = "block"
    setTime();
    scoreDiv.textContent = `Score: ${score}`
    displayQuestion();

    
})


    //timer function
    function setTime(){
    var timeInterval = setInterval(function() {
    time--;
    timer.textContent = `Time Left: ${time}`  
    localStorage.getItem("time") 
    if(time < 1){
        clearInterval(timeInterval)
        endOfGame()
    } else if(currentQuestionIndex === questionArr.length){
        clearInterval(timeInterval)
        localStorage.setItem("time", time)
        
    }
}, 1000);
    }

//get the current question index and displays question and answers on the scrre
function displayQuestion(){
// for (var i=0;i<questionArr.length;i++){

    var currQuestion = questionArr[currentQuestionIndex];
    var allQuestions = document.getElementById("questions");
    allQuestions.textContent = currQuestion.question;
    answers.innerHTML = "";
    currQuestion.answer.forEach(function (answered, i) {
    var answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "answered");
    answerBtn.setAttribute("value", answered);
    answerBtn.textContent = i + 1 + ". " + answered;
    answerBtn.onclick = questionClick;
    answers.appendChild(answerBtn);
});
}
// }
function questionClick(){
    if(this.value !== questionArr[currentQuestionIndex].corrAnswer){
    alert("incorrect!!")
    time -= 5;
    localStorage.setItem("time", time)
    }else{
        alert("Great Job!!")
        score++
        localStorage.setItem("score", score)
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questionArr.length){
        endOfGame();
    }
    displayQuestion();
}


//hiding all other divs shows endscreen
//sets ScoreDiv to 
function endOfGame(){
    startPage.style.display = "none"
    questionDiv.style.display = "none"
    endScreen.style.display = "block"
    scoreDiv.textContent = score;
//set highscore div to show
// all divs hide timer and score
//store the score in local storage and then return it to page 
}
saveBtn.addEventListener("click", function(e){
    e.preventDefault();
    var initials = document.getElementById("initials").value;
    localStorage.setItem("initials", initials)
    var initialsStr = JSON.stringify(initials)
    JSON.parse(initialsStr)
    highScorePage();
    
})
function highScorePage(){
    

}



// var questionObj = questions[questionIndx];
//display question title
//loopthrough the answers
// create a button for each answer
// check to see if the button created is the right answe
//creat e custom attribute to show if correct or not

//append everything to a page
//setting all divs to display none;

// # 04 Web APIs: Code Quiz

// As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

// ## User Story

// ```
// AS A coding bootcamp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz

   // WHEN I click the start button
//     Need a start quiz page with a button
// THEN a timer starts and I am presented with a question
//     create a timer that counts down from 6000ms
// WHEN I answer a question
// THEN I am presented with another question
// button should switch the pages onclick command
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// onclick function subtract time 
// WHEN all questions are answered or the timer reaches 0
// if clock === 0 end 
// if all questions answered end game
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// save initials and score
// ```
