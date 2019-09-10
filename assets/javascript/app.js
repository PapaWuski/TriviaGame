
const game = [
  {
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    choices: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processing Unit",
      "Central Processor Unit"
    ]
  },
  {
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    choices: ["Shellshock", "Heartbleed", "Bashbug", "Stagefright"]
  },
  {
    question:
      "All of the following programs are classified as raster graphics editors EXCEPT:",
    correct_answer: "Inkscape",
    choices: ["Inkscape","GIMP", "Paint.NET",  "Adobe Photoshop"]
  },
  {
    question:
      "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
    correct_answer: "Taiwan",
    choices: [
      "United States",
      "Germany",
      "Taiwan",
      "China"
    ]
  },
  {
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    choices: [ "Shellshock","Heartbleed", "Corrupted Blood", "Shellscript"]
  },
  {
    question:
      "In 'Hexadecimal', what color would be displayed from the color code? '#00FF00'?",
    correct_answer: "Green",
    choices: ["Green", "Red", "Yellow", "Blue"]
  },
  {
    question:
      "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    choices: [ "Ageia", "Nvidia","AMD", "NovodeX"]
  },
  {
    question:
      "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    choices: [
      "Individuals and interactions",
      "Customer collaboration",
      "Responding to change",
      "Comprehensive documentation"
    ]
  },
  {
    question:
      "Laserjet and inkjet printers are both examples of what type of printer?",
    correct_answer: "Non-impact printer",
    choices: [
      "Non-impact printer",
      "Impact printer",
      "Daisywheel printer",
      "Dot matrix printer"
    ]
  },
  {
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    choices: ["128 bits", "32 bits", "64 bits", "128 bytes"]
  }
];

var current = 0;

// Timeing group
let countDown;
const timeOut = 30;
var quizRunning = false;
var time = 0;
const reset = () => {
  time = 0;
};

const start = () => {
  if (!quizRunning) {
    countDown = setInterval(count, 1000);
  }
};
const stop = () => {
  console.log("Stoped")
  clearInterval(countDown);
  quizRunning = false;
  reset()
};

const count = () => {
  time++;
  $(".timer").text(timeConverter(time));
  if (time === timeOut) {
    stop();
    loadNextScreen();
  }
};

const timeConverter = t => {
  let timeRemaining = timeOut - t;
  return `${timeRemaining} Seconds`;
};

// Game group
const createStartPage = () => {
  const $container = $(`.container`);
  const $row = $(`<div>`).addClass(`row`);
  const $col = $(`<div>`).addClass(`col-md-12 text-center`);
  let $title = $(`<h1>`);
  let $start = $(`<button>`);

  $($title).text("Trivia Game!");
  $($start).text("Start Quiz~");
  $($start).addClass("quizStart");

  $title = $row.clone().append($col.clone().append($title));
  $start = $row.clone().append($col.clone().append($start));

  $container.append($title, $start);
};

const loadQuestion = () => {
  const $container = $(`.container`);
  const $row = $(`<div>`).addClass(`row`);
  const $col = $(`<div>`).addClass(`col-md-12 text-center`);

  $container.append(
    $row
      .clone()
      .append($col.clone().append(`<h2 class="timer">${timeOut} Seconds</h2>`))
  );
  $container.append(
    $row
      .clone()
      .append($col.clone().append(`<h1>${game[current].question}</h1>`))
  );
  game[current].choices.forEach(choice => {
    let $choice = $("<h2>")
      .text(choice)
      .val(choice === game[current].correct_answer ? true : false)
      .addClass("choice");
    $container.append($row.clone().append($col.clone().append($choice)));
  });
};

const nextQuestion = () => {
  $(".container").empty();
  start();
  loadQuestion();
};

const checkChoice = e => {
  console.log(e.target);
  if ($(e.target).val()) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  stop()
  current++;
  nextQuestion();
};

createStartPage();
$(document).on("click", ".quizStart", nextQuestion);
$(document).on("click", ".choice", checkChoice);
