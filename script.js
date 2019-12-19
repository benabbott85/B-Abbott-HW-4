var startEl = document.getElementById("start-button");
var highScore = document.getElementById("highScore");
var timerEL = document.getElementById("timer");
var qIndex = 0;
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
// var austinEL = document.getElementsById("austin");
var score = 0;
var storedHighScore = 0;
var quizCountdown = 60;
var currentQuestion;
// var currentQuestion;


function startQuiz() {
    $("#austin").empty();
    var getStart = document.getElementById("start");

    getStart.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    quizTimer();
    displayQuestion();
    // console.log("quizstarted")
}


function displayQuestion() {
    currentQuestion = questions[qIndex]

    var titleEL = document.getElementById("qTitle")
    titleEL.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {

        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = click;
        choicesEl.appendChild(choiceBtn);



    })
    console.log(qIndex)

}

function click() {
    qIndex++;
    if (($(this).attr("value")) !== currentQuestion.answer) {
        quizCountdown = quizCountdown - 5;

    } else {
        score += quizCountdown;
        console.log("score" + score);
    }
    if (qIndex === questions.length) {
        console.log("gameover")
        $("#vanish").empty();
        $("#vanish").text("Your score is: " + score)
    } else {
        displayQuestion();
    }
}

function quizTimer() {
    // var quizCountdown = 60;
    var timerInterval = setInterval(function () {
        timerEL.textContent = "time " + quizCountdown;
        quizCountdown--;
        console.log("countdown")
        if (quizCountdown === 0 || questions.length === qIndex) {
            clearInterval(timerInterval);
            timerEL.textContent = "";
            if (score > storedHighScore) {
                $("#vanish").text("New High Score! " + score);
                $(".initial").show();
                console.log("I win")
            } else {
                $("#vanish").text("Score: " + score);
                console.log("I lose")

            }
        }
        }, 500)


}

// function choiceQ (){
//     for (var i = 0; i < questions(i).choices(i); i++)

// }


startEl.onclick = startQuiz;
choicesEl.onclick = choices;

$(".initial").on("click", "button", function(){
    storedHighScore = score;
    var initials = $("#init").val();
    console.log(initials)
    $(".initial").empty();
    var highScoreAry = [initials, storedHighScore];
    var highScore = highScoreAry.toString();
    localStorage.setItem("High Score", highScore);
})

var sto = localStorage.getItem("High Score");
console.log(sto);
sto= sto.split(" , ");
console.log(sto);
storedHighScore = sto[1];







