var startEl= document.getElementById("start-button");
var highScore = document.getElementById("highScore");
var timerEL= document.getElementById("timer");
var qIndex = 0
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");



function startQuiz(){
    var getStart = document.getElementById("start");
    getStart.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    // quizTimer();
    question();
}


function question(){
    var currentQuestion = questions[qIndex]
    questionsEl.textContent = currentQuestion.title
    choicesEl.innerHTML = "";
    
    currentQuestion.choices.forEach(function(choice,i){
        var choiceBtn=document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = i + 1 + ". " + choice
        // choiceBtn.onclick = 
        choicesEl.appendChild(choiceBtn)
    })
}


function quizTimer (){
    var quizCountdown = 60;
    var timerInterval = setInterval(function(){
        timerEL.textContent = "time " + quizCountdown;
        quizCountdown--;
        
        if(quizCountdown === 0){
            clearInterval(timerInterval);
            timerEL.textContent = "";
            questions.textContent = "Score: " + highScore;
            
        }
    }, 1000)
                    
                       
}
startEl.onclick = startQuiz
// startEl.addEventListener("click", function(){
//     console.log("work please")
// })





