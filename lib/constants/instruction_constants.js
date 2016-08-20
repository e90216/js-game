const ImgValueConstants = require('./img_value_constants');

const InstructionConstants = {
  "grass" : `<div>${ImgValueConstants[1]} + ${ImgValueConstants[1]} + ${ImgValueConstants[1]} = ${ImgValueConstants[2]}</div>`,
  "bush"  : `<div>${ImgValueConstants[2]} + ${ImgValueConstants[2]} + ${ImgValueConstants[2]} = ${ImgValueConstants[3]}</div>`,
  "tree"  : `<div>${ImgValueConstants[3]} + ${ImgValueConstants[3]} + ${ImgValueConstants[3]} = ${ImgValueConstants[4]}</div>`,
  "hut"   : `<div>${ImgValueConstants[4]} + ${ImgValueConstants[4]} + ${ImgValueConstants[4]} = ${ImgValueConstants[5]}</div>`,
  "house" : `<div>${ImgValueConstants[5]} + ${ImgValueConstants[5]} + ${ImgValueConstants[5]} =  YOU WIN!!!</div>`
  // mansion: `${ImgValueConstants[1]} + ${ImgValueConstants[1]} + ${ImgValueConstants[1]} = ${ImgValueConstants[1]}`,
  // castle: `${ImgValueConstants[1]} + ${ImgValueConstants[1]} + ${ImgValueConstants[1]} = ${ImgValueConstants[1]}`
};

module.exports = InstructionConstants;