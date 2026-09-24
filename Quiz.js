const startScreen = document.getElementById("strtScreen");
const QuizScreen = document.getElementById("quizScrn");
const resultScree = document.getElementById("rsltScreen");
const startButton = document.getElementById("strtBtn");
const questionText = document.getElementById("qsText");
const answerContainer = document.getElementById("ansrContainer");
const currentQsSpan = document.getElementById("currentQs");
const totalQsSpan = document.getElementById("totalQsSpan");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("fnlScore");
const maxScoreSpan = document.getElementById("maxScore");
const resultMessage = document.getElementById("rsltMsg");
const restartButton = document.getElementById("restartBtn");
const progressBar = document.getElementById("progress");

const quizQs=[
    {
    question:"You are starting a new Quiz project and want Git to begin tracking it locally. Which command should you run first inside the project folder?",
    answers:[
            { text: "git clone", correct: false },
            { text: "git init", correct: true },
            { text: "git push", correct: false },
            { text: "git pull", correct: false }

        ],
    },
    {
        question: "Which command shows you which files have been changed or are untracked?",
        answers: [
                { text: "git push", correct: false },
                { text: "git status", correct: true },
                { text: "git commit", correct: false },
                { text: "git clone", correct: false },
        ],
    },

    {
        question: "You changed your HTML, CSS, and JavaScript files and want to stage all of them. Which command should you use?",
        answers: [
                { text: "git add .", correct: true },
                { text: "git push", correct: false },
                { text: "git log", correct: false },
                { text: "git clone", correct: false },
        ],
    },

    {
            question: "What does a Git commit represent?",
            answers: [
                { text: "A saved checkpoint of your project", correct: true },
                { text: "A GitHub account", correct: false },
                { text: "A downloaded project", correct: false },
                { text: "An internet connection", correct: false },
            ],
    },

    {
            question: "Which command sends your committed changes to GitHub?",
            answers: [
                { text: "git status", correct: false },
                { text: "git add .", correct: false },
                { text: "git push", correct: true },
                { text: "git log", correct: false },
            ],
    },

    {
            question: "Which command downloads an existing repository from GitHub to your computer?",
            answers: [
                { text: "git clone", correct: true },
                { text: "git commit", correct: false },
                { text: "git add", correct: false },
                { text: "git status", correct: false },
            ],
    },

    {
            question: "Which statement about Git is correct?",
            answers: [
                { text: "Git only works when you have internet", correct: false },
                { text: "Git can track and commit changes locally", correct: true },
                { text: "Git is the same as GitHub", correct: false },
                { text: "Git can only be used after creating a GitHub repository", correct: false },
            ],
    },

    {
            question: "What is GitHub mainly used for?",
            answers: [
                { text: "Writing HTML", correct: false },
                { text: "Hosting and sharing Git repositories online", correct: true },
                { text: "Replacing JavaScript", correct: false },
                { text: "Installing VS Code", correct: false },
            ],
    },

    {
            question: "You want to experiment with a new feature without directly changing your main development line. What should you use?",
            answers: [
                { text: "Branch", correct: true },
                { text: "Commit message", correct: false },
                { text: "git status", correct: false },
                { text: "GitHub profile", correct: false },
            ],
    },

    {
            question: "You are working on your project without internet. Which operation can you still normally do with Git?",
            answers: [
                { text: "git commit", correct: true },
                { text: "git push to GitHub", correct: false },
                { text: "Download a repository from GitHub", correct: false },
                { text: "Upload files to GitHub", correct: false },
            ],
    }

];

let currentQsIndex=0;
let score=0;
let answerDisabled=false;
totalQsSpan.textContent=quizQs.length;
maxScoreSpan.textContent=quizQs.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz(){
  
    currentQsIndex=0;
    scoreSpan.textContent=0;
    startScreen.classList.remove("actv");
    QuizScreen.classList.add("actv");
    showQs()
}
function showQs(){
    answerDisabled=false;
    const currentQs=quizQs[currentQsIndex];
    currentQsSpan.textContent=currentQsIndex + 1;
    const progresspercent=(currentQsIndex/quizQs.length)*100;
    progressBar.style.width=progresspercent+"%";
    questionText.textContent=currentQs.question;
    answerContainer.innerHTML="";
    currentQs.answers.forEach(answer =>{
        const button=document.createElement("button")
        button.textContent=answer.text
        button.classList.add("answer.btn")
        button.dataset.correct=answer.correct
        button.addEventListener("click",selectAnswer)
        answerContainer.appendChild(button)

    })
}
function selectAnswer(event){
    if (answerDisabled) 
        return
    answerDisabled=true;
    const selectedBtn = event.target;
    const isCrt= selectedBtn.dataset.correct === "true"
    Array.from(answerContainer.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }else if(button===selectedBtn){
            button.classList.add("inCorrect");
        }
    });
    if(isCrt){
        score++;
        scoreSpan.textContent=score
    }
    setTimeout( () => {
        currentQsIndex++;
    if(currentQsIndex< quizQs.length){
        showQs()

    }else{
        showResult()
    }
    },1000)
}
function showResult(){
    QuizScreen.classList.remove("actv")
    resultScree.classList.add("actv")
    finalScoreSpan.textContent=score;
    const percentage =(score/quizQs.length)*100
     
    if(percentage===100){
        resultMessage.textContent="Perfect! You are a Git genius! 🏆";
    }else if(percentage>=80){
         resultMessage.textContent="Excellent! You really know your Git! 🔥";
    }
    else if(percentage>=60){
         resultMessage.textContent="Good job! You have a solid understanding! 👍";
    }
    else if(percentage>=40){
         resultMessage.textContent="Not bad! Keep practicing and you'll improve! 💪";
    }
    else {
         resultMessage.textContent="Keep learning! Practice makes progress! 📚";
    }
}

function restartQuiz(){
    resultScree.classList.remove("actv")
    startQuiz();
}