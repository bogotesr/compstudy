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
  {
    question: 'In what cells are lysosomes found?',
    answers: [
      { text: 'Plant cells', correct: false },
      { text: 'Animal cells', correct: true },
      { text: 'All Cells', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Are you EPIC?',
    answers: [
      { text: 'Yes', correct: true }
    ]
  },
  {
    question: 'What economic term represents the basic economic problem?',
    answers: [
      { text: 'Limited recourses', correct: false },
      { text: 'Scarcity', correct: true },
      { text: 'Wants', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What is the basic economic problem?',
    answers: [
      { text: 'Humans have unlimited wants and needs with unlimited resources.', correct: false },
      { text: 'Humans have limited wants and needs with unlimited resources.', correct: false },
      { text: 'Humans have unlimited wants and needs with limited resources.', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which is NOT a capital part of production?',
    answers: [
      { text: 'Blender', correct: false },
      { text: 'Waitress', correct: true },
      { text: 'Cash register', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which is NOT a labor part of production?',
    answers: [
      { text: 'Cheese', correct: true },
      { text: 'Waitress', correct: false },
      { text: 'Ice cream scooper (human)', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What was the purpose of the encomienda system?',
    answers: [
      { text: 'Provided religous control because the Spanish crown appointed local officials.', correct: false },
      { text: 'Was intended to create mutually beneficial relations between the Europeans and natives.', correct: true },
      { text: 'Was used by Spain to justify conquest.', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What is an endothermic reaction?',
    answers: [
      { text: 'A reaction that does not require heat.', correct: false },
      { text: 'A reaction that sometimes requires heat.', correct: false },
      { text: 'A reaction that requires heat.', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which is punctuated correctly?',
    answers: [
      { text: 'The cat is nice, but it\'s claws are so sharp.', correct: false },
      { text: 'I know the jeans are her\'s, but I don\'t care.', correct: false },
      { text: 'I love shopping at the mall, but I still dislike the crowds', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which literary device is this sentence an example of, "The pizza took a million years to get delivered"?',
    answers: [
      { text: 'hyperbole', correct: true },
      { text: 'personification', correct: false },
      { text: 'metaphor', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Terracing was used in China and Peru for?',
    answers: [
      { text: 'Create effective trade routes', correct: false },
      { text: 'Increase the volume of land available for agriculture', correct: true },
      { text: 'Move large quantities of water into cities', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
]