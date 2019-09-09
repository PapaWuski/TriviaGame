const game = [
  {
    question: "what is jquery?",
    choices: ["libary", "other answer", "choice3", "module"],
    answer: "libary"
  },
  {
    question: "what is jquery2?",
    choices: ["libary", "other answer", "choice3", "module"],
    answer: "libary"
  }
];
var current = 0;

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
  const $col = $(`<div>`).addClass(`col-md-12 text-center m-auto`);

  game.forEach((question, questNum) => {
    let $page = $row.clone().append($col.clone());
    let $questionTitle = $row
      .clone()
      .addClass(`question`)
      .append($col.clone().append($(`<h1>`).text(question.question)));
    console.log($questionTitle.text());
    let $answers = $col.clone();
    question.choices.forEach(choice => {
      let $label = $("<label>");
      let $choice = $(`<input>`).attr({
        name: `question${questNum}`,
        value: choice,
        type: "radio"
      });
      console.log("helloworld");
      $answers.append($label.append($choice, choice));
    });

    $answers = $row
      .clone()
      .addClass(`answer`)
      .append($answers);
    $container.append(
      $row.clone().append($col.clone().append($questionTitle, $answers))
    );
  });
};

const nextQuestion = () => {
  loadQuestion();
  current++;
};
const checkChoice = event => {
  console.log(event);
  const test = $(event.currentTarget);
  console.log(test);
  if ($(this).attr("data")) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  if (current < game.length) {
    nextQuestion();
  }
};

$(document).ready(function() {
  createStartPage();
  $(".quizStart").click(nextQuestion);
});
