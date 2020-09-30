


// create an object for my questions (maybe four separate objects?)
// create the timer and have it  add subtract based on answers
//create an onclick event for start quiz that starts the timer
// create on-click events of the questions
//creat functions to loop through the questions
//create functions to add subtract points
// store and display score
// have a form for user to enter initials and score value




// global variables referencing my tags and ids in html
var startBtn = document.querySelector(".startBtn")// start button access
var startPage = document.querySelector(".startPage")
var questionOne = document.querySelector("#questionOne")
var questionTwo = document.querySelector("#questionTwo")
var questionThree = document.querySelector("#questionThree")
var choiceA = document.querySelectorAll(".choiceA")// all A choices
var choiceB = document.querySelectorAll(".choiceB")// all B choices
var choiceC = document.querySelectorAll(".choiceC")// all C choices
var choiceD = document.querySelectorAll(".choiceD")// all D choices
var score = 0
var time = 60
var timer = document.getElementsByClassName("timer")


//creating key value pars for an allChoices variable
// var allChoices [
//     choiceA:choiceA 
//     choiceB:choiceB
//     choiceC:choiceC
//     choiceD:choiceD
// ]

//Click event for start button
startBtn.addEventListener("click", function() {
    startPage.style.display = "none"
    questionOne.style.display = "block"
    setTime()
    scoreDiv.textContent = `Score: ${score}`
})
//timer function
function setTime(){
    var timeInterval = setInterval(function() {
    time--;
    timer.textContent = `Time Left: ${time}`   
    if(time < 1){
        clearInterval(timeInterval)
        endOfGame()
    }
}, 1000);
}
var questions = {
    question:
    answers:

}
//get the current question indesx and displays question and answers on the scrre
function displayQuestion(){
    //this might be in my start
    
    //loopthrough the answers
// pull object through the array
} /

//put an event listener for any button clicked
//listener should also see if button was correct or not
// if yes score++ 
//if no time--

function endOfGame(){
// set all divs style display = none
//set highscore div to show
// all divs hide timer and score
//store the score in local storage and then return it to page 
}









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

//    // WHEN I click the start button
//     Need a start quiz page with a button
// // THEN a timer starts and I am presented with a question
//     create a timer that counts down from 6000ms
// // WHEN I answer a question
// // THEN I am presented with another question
// button should switch the pages onclick command
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// onclick function subtract time 
// // WHEN all questions are answered or the timer reaches 0
// if clock === 0 end 
// if all questions answered end game
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and score
// save initials and score
// // ```

// The following animation demonstrates the application functionality:

// ![code quiz](./Assets/04-web-apis-homework-demo.gif)

// ### Review

// You are required to submit the following for review:

// * The URL of the functional, deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
