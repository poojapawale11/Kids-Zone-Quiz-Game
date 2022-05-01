const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [

// add

  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '42', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    question: 'What is 4 + 9?',
    answers: [
      { text: '15', correct: false },
      { text: '32', correct: false },
      { text: '13', correct: true },
      { text: '18', correct: false }
    ]
  },
  {
    question: 'What is 10 + 2?',
    answers: [
      { text: '22', correct: false },
      { text: '12', correct: true },
      { text: '2', correct: false },
      { text: '16', correct: false }
    ]
  },
  {
    question: 'What is 9 + 9?',
    answers: [
      { text: '19', correct: false },
      { text: '32', correct: false },
      { text: '18', correct: true },
      { text: '38', correct: false }
    ]
  },
  {
    question: 'What is 12 + 8?',
    answers: [
      { text: '20', correct: true },
      { text: '22', correct: false },
      { text: '42', correct: false },
      { text: '16', correct: false }
    ]
  },

// subtract

  {
    question: 'What is 8 - 2?',
    answers: [
      { text: '6', correct: true },
      { text: '2', correct: false },
      { text: '4', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'What is 19 - 9?',
    answers: [
      { text: '15', correct: false },
      { text: '12', correct: false },
      { text: '10', correct: true },
      { text: '18', correct: false }
    ]
  },
  {
    question: 'What is 18 - 12?',
    answers: [
      { text: '22', correct: false },
      { text: '6', correct: true },
      { text: '2', correct: false },
      { text: '16', correct: false }
    ]
  },
  {
    question: 'What is 8 - 8?',
    answers: [
      { text: '19', correct: false },
      { text: '16', correct: false },
      { text: '00', correct: true },
      { text: '38', correct: false }
    ]
  },
  {
    question: 'What is 16 -  8?',
    answers: [
      { text: '08', correct: true },
      { text: '22', correct: false },
      { text: '42', correct: false },
      { text: '16', correct: false }
    ]
  },

// multiply

{
    question: 'What is 2 * 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '42', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    question: 'What is 4 * 9?',
    answers: [
      { text: '15', correct: false },
      { text: '32', correct: false },
      { text: '36', correct: true },
      { text: '18', correct: false }
    ]
  },
  {
    question: 'What is 10 * 2?',
    answers: [
      { text: '22', correct: false },
      { text: '20', correct: true },
      { text: '2', correct: false },
      { text: '16', correct: false }
    ]
  },
  {
    question: 'What is 9 * 5?',
    answers: [
      { text: '19', correct: false },
      { text: '32', correct: false },
      { text: '45', correct: true },
      { text: '38', correct: false }
    ]
  },
  {
    question: 'What is 12 * 8?',
    answers: [
      { text: '96', correct: true },
      { text: '22', correct: false },
      { text: '42', correct: false },
      { text: '16', correct: false }
    ]
  },

// div

{
    question: 'What is 10 / 2?',
    answers: [
      { text: '5', correct: true },
      { text: '2', correct: false },
      { text: '4', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    question: 'What is 36 / 9?',
    answers: [
      { text: '15', correct: false },
      { text: '3', correct: false },
      { text: '4', correct: true },
      { text: '18', correct: false }
    ]
  },
  {
    question: 'What is 10 / 5?',
    answers: [
      { text: '50', correct: false },
      { text: '2', correct: true },
      { text: '20', correct: false },
      { text: '16', correct: false }
    ]
  },
  {
    question: 'What is 9 / 9?',
    answers: [
      { text: '18', correct: false },
      { text: '32', correct: false },
      { text: '1', correct: true },
      { text: '38', correct: false }
    ]
  },
  {
    question: 'What is 12 / 4?',
    answers: [
      { text: '3', correct: true },
      { text: '2', correct: false },
      { text: '48', correct: false },
      { text: '16', correct: false }
    ]
  },

]