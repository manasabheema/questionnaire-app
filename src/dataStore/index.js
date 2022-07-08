export const questions = [
  {
    id: 0,
    question: "Which company invented Vue.js?",
    options: ["Facebook", "Google", "Oracle", "Twitter"],
    answer: 1,
    selected: null,
  },
  {
    id: 1,
    question:
      'Which of the following data binding interpolation is also known as "Mustache" syntax?',
    options: ["v-on", "v-model", "{{}}", "[]"],
    answer: 2,
    selected: null,
  },
  {
    id: 2,
    question:
      "Which of the following is the correct syntax to use for loop in Vue.js?",
    options: ["vFor", "v-for", "*v-for", "None of the above"],
    answer: 1,
    selected: null,
  },
  {
    id: 3,
    question:
      "Which of the following syntax is correct for creating a Vue.js instance?",
    options: [
      "var text = new object ({//options})",
      "var text = new class ({//options})",
      "var text = new text ({//options})",
      "var text = new Vue({// options })",
    ],
    answer: 3,
    selected: null,
  },
  {
    id: 4,
    question:
      "Which of the following directive is used for two-way binding in Vue.js?",
    options: ["v-on", "v-bind", "v-model", "no-one"],
    answer: 2,
    selected: null,
  },
];

export const instructions = [
  {
    instructionKey: "Total Questions:",
    instructionValue: questions.length,
  },
  {
    instructionKey: "Marks per question:",
    instructionValue: "1 mark",
  },
  {
    instructionKey: "Passing criteria:",
    instructionValue: "40%",
  },
];

export const guidelines = [
  "5 Attempts are allowed.",
  "Passing criteria is 40% score with no negative marking.",
  "If time is over, unanswered questions will be marked wrong.",
  "Do not close the app during the test.",
];

export const successResults = {
  message: `Congratulation !
  You have passed the test`,
  note: "You can download your certificate and appointment letter once your documents are verified.",
  imgSRC: "../assets/pass.png",
  color: "green",
};

export const failureResults = {
  message: `Better Luck next time !
  You have failed the test.`,
  note: "Minimum passing criteria is 40%. You have 4 attempts left.",
  imgSRC: "../assets/fail.png",
  color: "red",
};
