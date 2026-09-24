const startScreen = document.getElementById("strtScreen");
const QuizScreen = document.getElementById("quizScrn");
const resultScree = document.getElementById("rsltScreen");
const startButton = document.getElementById("strtBtn");
const questionText = document.getElementById("qsText");
const answerContainer = document.getElementById("ansrContainer");
const currentQsSpan = document.getElementById("currentQs");
const totalQsSpan = document.getElementById("strtBtn");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("fnlScore");
const maxScoreSpan = document.getElementById("maxScore");
const resultMessage = document.getElementById("rsltMsg");
const restartButton = document.getElementById("restartBtn");
const progressBar = document.getElementById("progress");

const quizQs=[
    {
    questions:"You are starting a new Quiz project and want Git to begin tracking it locally. Which command should you run first inside the project folder?",
    answers:[
            { text: "git clone", correct: false },
            { text: "git init", correct: true },
            { text: "git push", correct: false },
            { text: "git pull", correct: false }

        ],
    },
    {
        questions: "Which command shows you which files have been changed or are untracked?",
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

]

let currentQsIndex=0;
let score=0;
let answerDisabled=false;
totalQsSpan.textContent=quizQs.length;
maxScoreSpan.textContent=quizQs.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);

function startQuiz(){
    console.log("quiz startes")
}

