var minus_sums = [

  // One
  [i1, "-", i1, i0],

  // Two
  [i2, "-", i2, i0],
  [i2, "-", i1, i1],
  [hidden2, "-", hidden1, i1],
  
  // Three
  [i3, "-", i3, i0],
  [i3, "-", i2, i1],
  [h3, "-", i2, i1],
  [i3, "-", i2_1, i1],
  [i3_i2, "-", i2, i1_2],
  [i3, "-", i2, i1_2],
  
  // Four
  [sq4, "-", l3, i1],
  [i4, "-", i3, i1_3],
  [i4, "-", i3_1, i1],
  [sq4_l3, "-", l3, i1_1],
  [sq4_r3, "-", r3, i1_1],
  [sq4_h3, "-", h3, i1_1],
  [sq4, "-", i2, i2],
  [sq4, "-", _2, _2],
    
  // Five
  [i5, "-", i2_3, i3],
  [i5, "-", i3_2, i2],
  // [i1, "-", i4, i5],
  // [i1_2, "-", sq4, h5],
  // [i2, "-", i3, h5],
  // [i2, "-", i3, i5],
  // [i2_3, "-", i3, i5],
  // [i1, "-", i4_1, i5],
  
  // Six
  [rect6, "-", i3, i3],
  [rect6, "-", _2, sq4],
  // [i1_2, "-", h5, rect6],
  // [i1, "-", i5, rect6],
  // [i1, "-", h5, rect6],
  // [i3, "-", i3, rect6],
  // [i2, "-", sq4, wide6],
  // [_2_2, "-", sq4, rect6],
  
  // Seven
  // [i1_3, "-", rect6, h7],
  // [i1, "-", wide6, dog7],
  // [i1, "-", rect6, h7],
  // [i1, "-", rect6, h7],
  // [_2, "-", h5, h7],
  // [i2, "-", i5, d7],
  // [i3, "-", i4, h7],
  [h7_sq4, "-", sq4, h3],
  [h7, "-", sq4, h3],
  
  // Eight
  [rect8, "-", i1, h7],
  [rect8, "-", h7, i1],
  // [i1, "-", o7, o8],
  // [i1_3, "-", h7, rect8],
  [rect8, "-", rect6, i2],
  [rect8, "-", i2, rect6],
  // [_2, "-", rect6, rect8],
  // [i3, "-", i5, rect8],
  // [i3, "-", i5, b8],
  // [r3, "-", h5, rect8],
  // [i4, "-", i4, rect8],
  // [sq4, "-", sq4, rect8],
  // [sq4_2, "-", sq4, rect8],
  
  // Nine
  [sq9, "-", o8, i1_1],
  [sq9, "-", sq4, r5],
  [h9, "-", h3_3, rect6],
  // [i1, "-", o8, sq9],
  // [_2, "-", h7, h9],
  // [_2, "-", dog7, sq9],
  // [i2, "-", b7, h9],
  // [i3, "-", rect6, sq9],
  // [i4, "-", i5, h9],
  // [sq4, "-", h5, h9],
  // [sq4, "-", r5, sq9],

];

if (typeof(sums) === typeof(minus_sums)) {
  sums = sums.concat(minus_sums);
} else {
  sums = minus_sums;
}
