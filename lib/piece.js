const ImgValueConstants = require('./constants/img_value_constants');

const Piece = function (type, cellPos) {
  this.type = type;

  this.pos = cellPos; //[row, col]
  // this.cellNo = cellPos[0] * 5 + cellPos[1];

  this.value = ImgValueConstants[type];

  this.imgTag = ImgValueConstants[this.value];
  // debugger
};

Piece.prototype.getCellNo = function () {
  return this.pos[0] * 5 + this.pos[1];
};

// Piece.prototype.render = function () {
//   return this.imgTag; //or call this getImg()
// };

Piece.prototype.combine = function () {
  //this should take care of the logic of becoming the next level object...
  //bear will rewrite this
};

module.exports = Piece;