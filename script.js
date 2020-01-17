const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById
("question-container")
const questionElement = document.getElementById("queston")
const answerButtonsELement = dpcument.getElementById("answer-buttons")


let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener("click", startGame)

    function startGame () {}
        console.log("Started")
        startButton.classList.add("hide")
        shuffledQuestions= questions.sort (()=> Math.random()- .5)
        currentQuestonIndex=0
        questionContainerElement.classList.remove("hide")
        setNextQuestion()
}

function setNextQuestion() { 
    resetState()
    showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(question) {
    questionElement.innrText = question.question
    question.answers.forEach(answer => {
        const button= document.createElement ("button")
        button.innerText= answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsELement.appendChild(button)
    })
}

function resetState() {
    nextButton.classlist.add("hide")
    while (answerButtonsELement.firstchild)
        answerButtonsELement.removechild
        (answerButtonsElement.firstchild)
})
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    } else {
        element.classlist.add("wrong")
    }
}
const questions =[
    {
        question:" what is 1+1",
        answers: [
            {text: "2", correct: true},
            {text: "22", correct: false}
        ]
    }
]