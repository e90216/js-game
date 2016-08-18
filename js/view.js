const ImgConstants = require('./img_constants');

const View = function (game, $el) {
  this.game = game;
  this.$el = $el;
};

View.prototype.bindEvents = function () { //when cell is clicked, check if empty, then send cell to make move
  $(".cell").on("click", (event) => {
    if($(event.currentTarget).html() === "") {
      this.makeMove($(event.currentTarget));
      // console.log($(event.currentTarget).attr("data-number"));
    }
    // console.log($(event.currentTarget).attr("data-number"));
  });
};

View.prototype.makeMove = function ($cell) {
  //call game's play move?
  this.game.playMove($cell);
};

View.prototype.setupBoard = function () {
  const grid = $("<ul>").addClass("grid").addClass("group");

  for(let i = 0; i < 25; i++) {
    let $cell = $("<li>").addClass("cell");
    $cell.attr("data-number", i);
    // cell.html(i);
    grid.append($cell);
  }

  this.$el.append(grid); //set up the grid for the pieces to be places

  //make a separate place to hold to current piece to be placed
  this.$el.append($("<div>").addClass("current-piece"));

  //place random pieces (from: grass, bush, tree, hut) in random cells
  //- some number of pieces between 5-7
  let numPieces = Math.floor(Math.random() * (8 - 5) + 5);

  for(let i = 0; i < numPieces; i++) {
    let randomPiece = `${ImgConstants[Math.floor(Math.random() * (18 - 1) + 1)]}`;
    let randomCellNo = Math.floor(Math.random() * 25);

    // make sure cell is empty else do it again
    // and also make sure this piece is not adjacent to 2+ of the same piece
    while(($(`.cell[data-number=${randomCellNo}]`).html())) {
      console.log("oops! there's already something there!");
      randomCellNo = Math.floor(Math.random() * 25);
    }

    while((this.game.adjacentSamePieces($(`.cell[data-number=${randomCellNo}]`).html(randomPiece))).length >= 2) {
      console.log("oops! pick a different cell! (would need to combine)");
      $(`.cell[data-number=${randomCellNo}]`).html("");
      randomCellNo = Math.floor(Math.random() * 25);
    }

    $(`.cell[data-number=${randomCellNo}]`).html(randomPiece);
  }
};

module.exports = View;
