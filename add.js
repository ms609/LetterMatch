"use strict";
let sums = [
  [1, "+", 1],
  [1, "+", 2],
  [1, "+", 3],
  [1, "+", 4],
  [1, "+", 5],
  [1, "+", 6],
  [1, "+", 7],
  [1, "+", 8],
  
  
  [1, "+", 1],
  [2, "+", 1],
  [3, "+", 1],
  [4, "+", 1],
  [5, "+", 1],
  [6, "+", 1],
  [7, "+", 1],
  [8, "+", 1],
  
  [2, "+", 2],
  [2, "+", 3],
  [3, "+", 2],
  [3, "+", 4],
  [3, "+", 3],
  [4, "+", 4],
  [4, "+", 5],
];

let i0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let i1 = [0, 0, 0,
         0, 0, 0,
         0, 0, 0,
         0, 0, 0,
         0, 1, 0];
let i2 = [0, 0, 0,
          0, 0, 0,
          0, 0, 0,
          0, 2, 0,
          0, 2, 0];
let i3 = [0, 0, 0,
          0, 0, 0,
          0, 3, 0,
          0, 3, 0,
          0, 3, 0];
let i4 = [0, 0, 0,
          0, 0, 0,
          0, 4, 0,
          0, 4, 0,
          0, 4, 0,
          0, 4, 0];          
let sq4 = [0, 0, 0,
         0, 0, 0,
         0, 0, 0,
         4, 4, 0,
         4, 4, 0];
let i5 =
        [0, 5, 0,
         0, 5, 0,
         0, 5, 0,
         0, 5, 0,
         0, 5, 0];
let i6 =         
        [0, 0, 0,
         0, 0, 0,
         6, 6, 0,
         6, 6, 0,
         6, 6, 0];
let h7 = 
        [0, 0, 0,
         0, 7, 0,
         5, 6, 0,
         3, 4, 0,
         1, 2, 0];
let rect8 =
        [0, 0, 0,
         8, 8, 0,
         8, 8, 0,
         8, 8, 0,
         8, 8, 0];
let sq9 = [0, 0, 0,
           0, 0, 0,
           "9-top", "9-top", "9-top",
           9, 9, 9,
           "9-btm", "9-btm", "9-btm"];
let rect10 = 
        [10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 0];
let h11 = 
        [10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 1];
let rect12 = [ 0,  0,  0,
              10, 10, 10,
              10,  2, 10,
              10,  2, 10,
              10, 10, 10];
              
var position = 0;
var question;
var beeping;
var dinging = false;

// Populate block containers

$(".block-container").each(function (index) {
  for (let i = 0; i < 15; ++i) {
    $(this).append("<div class=\"block\">&nbsp;</div>");
  }
});

// Sums

function NextSum(not) {
  var ret = Math.floor(Math.random() * sums.length);
  if (ret == not) {
    ret = NextSum(not);
  }
  return (ret);
}

function PaintBlocks(div, shown) {
  div.children().each(function (index) {
    $(this).css("visibility", shown[index] ? "visible" : "hidden");
    $(this).css("outline-color",
                "var(--col-" + shown[index] + ")");
    $(this).css("background-color",
                "var(--col-" + shown[index] + ")");
  });
}

function ShowBlocks(div, no) {
  switch (no) {
    case 1:
      PaintBlocks(div, i1);
      break;
    case 2:
      PaintBlocks(div, i2);
      break;
    case 3:
      PaintBlocks(div, i3);
      break;
    case 4:
      PaintBlocks(div, sq4);
      break;
    case 5:
      PaintBlocks(div, i5);
      break;
    case 6:
      PaintBlocks(div, i6);
      break;
    case 7:
      PaintBlocks(div, h7);
      break;
    case 8:
      PaintBlocks(div, rect8);
      break;
    case 9:
      PaintBlocks(div, sq9);
      break;
    case 10:
      PaintBlocks(div, rect10);
      break;
    case 11:
      PaintBlocks(div, rect11);
      break;
    case 12:
      PaintBlocks(div, rect12);
      break;
  default: 
    PaintBlocks(div, i0);
  }
}

function ShowQuestion() {
  let sum = sums[question];
  $("#left-num").html(sum[0]);
  ShowBlocks($("#left-block"), sum[0]);
  $("#operator").html(sum[1]);
  $("#right-num").html(sum[2]);
  ShowBlocks($("#right-block"), sum[2]);
  $("#ans-num").html("?");
  ShowBlocks($("#ans-block"), 0);
}

function NewSum(avoid) {
  question = NextSum(avoid);
  position = 0;
  ShowQuestion();
}

NewSum();

$(document).keydown(function (e) {
  let pressed = e.key;
  if (isFinite(e.key)) {
    let sum = sums[question];
    var ans;
    switch(sum[1]) {
      case "+":
        ans = sum[0] + sum[2];
        break;
      default:
        console.log("Undefined operator: ", sum[1]);
    }
    if (pressed == ans) {
      if (!dinging) {
        $("#ans-num").html(ans);
        ShowBlocks($("#ans-block"), ans);
        Ding();
        dinging = true;
        Green();
        Fireworks();
        setTimeout(function() {
          dinging = false;
          NewSum(question);
        }, 4000);
      }
    } else {
      if (beeping) {
        window.clearTimeout(beeping);
        beeping = setTimeout(function () {beeping = false;}, 320);
      } else {
        var context = new AudioContext();
        badNoise = context.createOscillator();
        badNoise.type = "sine";
        badNoise.connect(context.destination);
        badNoise.start();
        beeping = setTimeout(function() {beeping = false;}, 320);
        $("body").addClass("incorrect");
        setTimeout(function () {badNoise.stop(); $("body").removeClass("incorrect");}, 300);
      }
    }
  }
})
