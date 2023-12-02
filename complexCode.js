/**
 * filename: complexCode.js
 * content: Complex code demonstrating an interactive quiz program
 */

// Define the Quiz object
class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.questionIndex];
  }

  answerQuestion(answer) {
    if (this.getCurrentQuestion().isCorrect(answer)) {
      this.score++;
    }
    this.moveToNextQuestion();
  }

  moveToNextQuestion() {
    this.questionIndex++;
    if (this.questionIndex === this.questions.length) {
      this.showResult();
      return;
    }
    this.showQuestion();
  }

  showQuestion() {
    const question = this.getCurrentQuestion();
    console.log(question.text);
    question.choices.forEach((choice, index) => {
      console.log(`${index + 1}. ${choice}`);
    });
  }

  showResult() {
    console.log(`Your score: ${this.score}/${this.questions.length}`);
    console.log("Thanks for playing!");
  }
}

// Define the Question object
class Question {
  constructor(text, choices, correctAnswerIndex) {
    this.text = text;
    this.choices = choices;
    this.correctAnswerIndex = correctAnswerIndex;
  }

  isCorrect(answerIndex) {
    return answerIndex === this.correctAnswerIndex;
  }
}

// Define questions for the quiz
const questions = [
  new Question(
    "What is the capital of France?",
    ["Paris", "London", "New York", "Berlin"],
    0
  ),
  new Question(
    "What is the largest planet in our solar system?",
    ["Mars", "Earth", "Jupiter", "Venus"],
    2
  ),
  new Question(
    "Who painted the Mona Lisa?",
    ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    0
  ),
  new Question(
    "Which country won the FIFA World Cup in 2018?",
    ["Brazil", "Germany", "France", "Argentina"],
    2
  ),
];

// Start the quiz
const quiz = new Quiz(questions);
quiz.showQuestion();

// Simulate user input and answer questions
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (input) => {
  const selectedChoiceIndex = parseInt(input) - 1;
  quiz.answerQuestion(selectedChoiceIndex);
});

readline.on("close", () => {
  console.log("User input ended");
});
