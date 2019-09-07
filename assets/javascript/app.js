const game = {
    0:{
        question:"what is jquery?",
        choices:["libary","other answer", "choice3","module"],
        answer:"libary"
    }
}

const createStartPage = () => {
  let $container = $(`.container`);
  let $row = $(`<div>`).addClass(`row`);
  let $col = $(`<div>`);
  let $title = $(`<h1>`);
  let $start = $(`<button>`);

  $($title).text("Trivia Game!");
  $($start).text("Start Quiz~");

  $title = $row.clone().append(
    $col
      .clone()
      .addClass(`col-md-12 text-center`)
      .append($title)
  );
  $start = $row.clone().append(
    $col
      .clone()
      .addClass(`col-md-12 text-center`)
      .append($start)
  );

  $container.append($title, $start);
};

$(document).ready(function() {
  createStartPage();
});
