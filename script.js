var startEl= document.getElementById("start-button");
var highScore = document.getElementById("highScore");
var timerEL= document.getElementById("timer");
var qIndex = 0;
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
// var austinEL = document.getElementsById("austin");


function startQuiz(){
    var getStart = document.getElementById("start");

    getStart.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    quizTimer();
    displayQuestion();
    // console.log("quizstarted")
}


function displayQuestion(){
    var currentQuestion = questions[qIndex]

    var titleEL = document.getElementById("qTitle")
    titleEL.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    
    currentQuestion.choices.forEach(function(choice,i){

        var choiceBtn=document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = click;
        choicesEl.appendChild(choiceBtn);
        
        
    }) 
}

function click (){
    qIndex++;
    if (qIndex === questions.length){
        console.log("gameover")
    } else {
        displayQuestion();
    }
}

function quizTimer (){
    var quizCountdown = 60;
    var timerInterval = setInterval(function(){
        timerEL.textContent = "time " + quizCountdown;
        quizCountdown--;
        
        if(quizCountdown === 0 || currentQuestion === qIndex.length){
            clearInterval(timerInterval);
            timerEL.textContent = "";
            questions.textContent = "Score: " + highScore;
            
        }

    }, 1000)
                    
                       
}

// function choiceQ (){
//     for (var i = 0; i < questions(i).choices(i); i++)
    
// }


startEl.onclick = startQuiz;
choicesEl.onclick = choices;





