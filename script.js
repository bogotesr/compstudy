const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const credits = document.getElementById('Credits')
const problems = document.getElementById('problems')
const changelog = document.getElementById('changelog')
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
  credits.classList.add('hide')
  changelog.classList.add('hide')
  problems.classList.add('hide')
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
      { text: 'Yes', correct: true },
      { text: 'Obviously', correct: true }
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
      { text: 'I love shopping at the mall, but I still dislike the crowds.', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which literary device is this sentence an example of, "The pizza took a million years to get delivered"?',
    answers: [
      { text: 'Hyperbole', correct: true },
      { text: 'Personification', correct: false },
      { text: 'Metaphor', correct: false },
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
  {
    question: 'In what phase are chromosomes visible?',
    answers: [
      { text: 'Interphase', correct: false },
      { text: 'M Phase', correct: false },
      { text: 'Prophase', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What kind of cells go through G0 phase?',
    answers: [
      { text: 'Animal cells', correct: true },
      { text: 'Plant cells', correct: false },
      { text: 'All cells', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Where do the light independent reactions (Calvin cycle) take place?',
    answers: [
      { text: 'Thylakoid', correct: false },
      { text: 'Stroma', correct: true },
      { text: 'Granum', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Where do the light dependent reactions take place?',
    answers: [
      { text: 'Thylakoid', correct: true },
      { text: 'Stroma', correct: false },
      { text: 'Granum', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'OIL RIG stand for...',
    answers: [
      { text: 'Observation Is Lame, Reading Is Great', correct: false },
      { text: 'Oxidation Is Gain, Reduction Is Loss', correct: false },
      { text: 'Oxidation Is Loss, Reduction Is Gain', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What organelles do plant cells have that animal cells do not?',
    answers: [
      { text: 'Large vacuole and cell membrane', correct: false },
      { text: 'Large vacuole and cell wall', correct: true },
      { text: 'Small vacuole and cell wall', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What are the types of fermentation?',
    answers: [
      { text: 'Alcoholic fermentation', correct: false },
      { text: 'Alcoholic and lactic fermentation', correct: true },
      { text: 'Lactic fermentation', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which is a correct example of a hypothesis?',
    answers: [
      { text: 'Worms will come to the surface.', correct: false },
      { text: 'If the dirt is wet, the worms will come to the surface.', correct: true },
      { text: 'Wet dirt = worms come to surface', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What happens in exocytosis?',
    answers: [
      { text: 'Vacuole fills', correct: false },
      { text: 'Vacuole gets built', correct: false },
      { text: 'Vacuole contents are released', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'An object with balanced forces is?',
    answers: [
      { text: 'Must be at rest', correct: false },
      { text: 'Must be moving at a non-zero constant velocity', correct: false },
      { text: 'Either of the top two', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'In the absence of forces, an object in motion will?',
    answers: [
      { text: 'Speed up', correct: false },
      { text: 'Stay in motion', correct: true },
      { text: 'Slowly come to a rest', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'On Earth, an object in motion will?',
    answers: [
      { text: 'Speed up', correct: false },
      { text: 'Stay in motion', correct: false },
      { text: 'Slowly come to a rest', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What is the relationship between mass and weight?',
    answers: [
      { text: 'Mass is directly proportional to weight.', correct: true },
      { text: 'Mass is inversely proportional to weight.', correct: false },
      { text: 'Mass is unrelated to weight.', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'A box is pushed across a table with a force of 12 N.  The friction force on the box is 1.4 N.  What is the net force on the box?',
    answers: [
      { text: '12N', correct: false },
      { text: '10.6N', correct: true },
      { text: '13.4N', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'If a car is in dynamic equilibrium, then?',
    answers: [
      { text: 'The forces on the car are balanced and the velocity is not 0 m/s', correct: true },
      { text: 'The forces on the car are balanced and the velocity is 0 m/s', correct: false },
      { text: 'The forces on the car are unbalanced and the velocity is 0 m/s', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'A stack of books are at rest on a table.  Which statement is true about the normal force on the bottom book?',
    answers: [
      { text: 'The normal force on the book is equals the total gravitational force on all the books.', correct: true },
      { text: 'The normal force on the bottom book is equal to the weight of the bottom book.', correct: false },
      { text: 'There is no normal force.', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'When drawing the FBD of a box on an inclined plane on Earth, which direction does gravity act?',
    answers: [
      { text: 'Parrallel to the plane upwards', correct: false },
      { text: 'Parrallel to the plane downwards', correct: false },
      { text: 'Straight down', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'A spring is stretched 0.7m with a force of 50N, what is the spring constant?',
    answers: [
      { text: '35 N/m', correct: false },
      { text: '71.4 N/m', correct: true },
      { text: '0.014 N/m', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Inertia is?',
    answers: [
      { text: 'A physical quantity related to the object\'s mass', correct: true },
      { text: 'A physical quantity related to the object\'s weight', correct: false },
      { text: 'A physical quantity related to the object\'s momentum', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'How is speed related to velocity?',
    answers: [
      { text: 'They are the same', correct: false },
      { text: 'Velocity is just speed with a direction', correct: true },
      { text: 'Speed is not related to velocity', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'A fish swims at 20 m/s and accelerates at 2 m/s^2 for 15 seconds, how far did the fish travel in the 15 seconds?',
    answers: [
      { text: '750 m', correct: false },
      { text: '600 m', correct: false },
      { text: '525 m', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which list contains only scalar quantities?',
    answers: [
      { text: 'mass, speed, distance', correct: true },
      { text: 'Weight, velocity, force', correct: false },
      { text: 'Velocity, speed, mass', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which list contains only vector quantities?',
    answers: [
      { text: 'mass, speed, distance', correct: false },
      { text: 'Weight, velocity, force', correct: true },
      { text: 'Velocity, speed, mass', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'You can tell something is a vector because?',
    answers: [
      { text: 'It only has magnitude', correct: false },
      { text: 'It has magnitude and speed', correct: false },
      { text: 'It has magnitude and direction', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'On a position time graph what quantity goes on the Y axis?',
    answers: [
      { text: 'Position', correct: true },
      { text: 'Velocity', correct: false },
      { text: 'Time', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'In the gas phase particles have a/an ______ volume and a/an ______ shape.',
    answers: [
      { text: 'Definite, definite', correct: false },
      { text: 'Indefinite, indefinite', correct: true },
      { text: 'definite, indefinite', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'In the liquid phase particles have a/an ______ volume and a/an ______ shape.',
    answers: [
      { text: 'Definite, definite', correct: false },
      { text: 'Indefinite, indefinite', correct: false },
      { text: 'definite, indefinite', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'In the solid phase particles have a/an ______ volume and a/an ______ shape.',
    answers: [
      { text: 'Definite, definite', correct: true },
      { text: 'Indefinite, indefinite', correct: false },
      { text: 'definite, indefinite', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which is the formula for kinetic energy in J/mol?',
    answers: [
      { text: '(3/2)(8.31 J/particle)(degrees kelvin) = KE', correct: false },
      { text: '(3/2)(8.31 J/mol)(degrees kelvin) = KE', correct: true },
      { text: '(3/2)(1.38x10^-23 J/mol)(degrees kelvin) = KE', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Which is the formula for kinetic energy in J/particle?',
    answers: [
      { text: '(3/2)(8.31 J/particle)(degrees kelvin) = KE', correct: false },
      { text: '(3/2)(8.31 J/mol)(degrees kelvin) = KE', correct: false },
      { text: '(3/2)(1.38x10^-23 J/particle)(degrees kelvin) = KE', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What information is provided by the mass number?',
    answers: [
      { text: 'The number of protons and neutrons inside the nucleus.', correct: true },
      { text: 'The number of electrons in the atom.', correct: false },
      { text: 'The number of particles in the atom.', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What does monatomic mean?',
    answers: [
      { text: 'Multiple atoms', correct: false },
      { text: 'One atom', correct: true },
      { text: 'Half an atom', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What does polyatomic mean?',
    answers: [
      { text: 'Multiple atoms', correct: true },
      { text: 'One atom', correct: false },
      { text: 'Half an atom', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Solid to gas is which phase change?',
    answers: [
      { text: 'Depsoition', correct: false },
      { text: 'Sublimation', correct: true },
      { text: 'Evaporation', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Liquid to gas is which phase change?',
    answers: [
      { text: 'Depsoition', correct: false },
      { text: 'Sublimation', correct: false },
      { text: 'Evaporation', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'Gas to solid is which phase change?',
    answers: [
      { text: 'Depsoition', correct: true },
      { text: 'Sublimation', correct: false },
      { text: 'Evaporation', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'What is the name of the molecule NO?',
    answers: [
      { text: 'Nitrogen oxide', correct: false },
      { text: 'Nitrogen monoxide', correct: true },
      { text: 'Nitrogen oxygen', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'In the molecule NO which atom needs a prefix.',
    answers: [
      { text: 'Nitrogen', correct: false },
      { text: 'Oxygen', correct: true },
      { text: 'Neither', correct: false },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'In VSEPR if a molecule has 2 bonded atoms and 1 lone pair then what is the molecular geometry?',
    answers: [
      { text: 'Trigonal planar', correct: false },
      { text: 'Linear', correct: false },
      { text: 'Bent', correct: true },
      { text: 'I don\'t know', correct: false }
    ]
  },
  {
    question: 'In VSEPR if a molecule has 3 bonded atoms and 0 lone pairs then what is the molecular geometry?',
    answers: [
      { text: 'Trigonal planar', correct: true },
      { text: 'Linear', correct: false },
      { text: 'Bent', correct: false },
      { text: 'I don\'t know', scorrect: false }
    ]
  },
]

// 51 questions