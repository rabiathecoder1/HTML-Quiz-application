const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex;
let quizScore = 0;

const questions = [
    {
        question: 'Which one of this is JAvascript framework',
        answer: [
            { Text: 'Python' correct: 'false' }
            { Text: 'Django' correct: 'false' }
            { Text: 'React' correct: 'true' }
            { Text: 'Sql' correct: 'false' }
        ].
    },
    {
        question: 'Which one of this is JAvascript framework',
        answer: [
            { Text: 'Python' correct: 'false' }
            { Text: 'Django' correct: 'false' }
            { Text: 'React' correct: 'true' }
            { Text: 'Sql' correct: 'false' }
        ],
    },
    {
        question: 'Which one of this is JAvascript framework',
        answer: [
            { Text: 'Python' correct: 'false' }
            { Text: 'Django' correct: 'false' }
            { Text: 'React' correct: 'true' }
            { Text: 'Sql' correct: 'false' }
        ],
    },
]