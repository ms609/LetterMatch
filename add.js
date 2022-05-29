"use strict";
let sums = [
  [1, "+", 1],
  [2, "+", 2],
  [2, "+", 3],
  [3, "+", 4],
  [3, "+", 3],
  [4, "+", 5],
];
var position = 0;
var question;
var beeping;

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
      PaintBlocks(div,
        [0, 0, 0,
         0, 0, 0,
         0, 0, 0,
         0, 0, 0,
         0, 1, 0]);
      break;
    case 2:
      PaintBlocks(div,
        [0, 0, 0,
         0, 0, 0,
         0, 0, 0,
         0, 2, 0,
         0, 2, 0]);
      break;
    case 3:
      PaintBlocks(div,
        [0, 0, 0,
         0, 0, 0,
         0, 3, 0,
         0, 3, 0,
         0, 3, 0]);
      break;
    case 4:
      PaintBlocks(div,
        [0, 0, 0,
         0, 0, 0,
         0, 0, 0,
         4, 4, 0,
         4, 4, 0]);
      break;
    case 5:
      PaintBlocks(div,
        [0, 5, 0,
         0, 5, 0,
         0, 5, 0,
         0, 5, 0,
         0, 5, 0]);
      break;
    case 6:
      PaintBlocks(div,
        [0, 0, 0,
         0, 0, 0,
         6, 6, 0,
         6, 6, 0,
         6, 6, 0]);
      break;
    case 7:
      PaintBlocks(div,
        [0, 0, 0,
         0, 7, 0,
         5, 6, 0,
         3, 4, 0,
         1, 2, 0]);
      break;
    case 8:
      PaintBlocks(div,
        [0, 0, 0,
         8, 8, 0,
         8, 8, 0,
         8, 8, 0,
         8, 8, 0]);
      break;
    case 9:
      PaintBlocks(div,
        [0, 0, 0,
         0, 0, 0,
         "9-top", "9-top", "9-top",
         9, 9, 9,
         "9-btm", "9-btm", "9-btm"]);
      break;
    case 10:
      PaintBlocks(div,
        [10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 0]);
      break;
    case 11:
      PaintBlocks(div,
        [10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 0,
         10, 10, 1]);
      break;
    case 12:
      PaintBlocks(div,
        [0, 0, 0,
         10, 10, 10,
         10,  2, 10,
         10,  2, 10,
         10, 10, 10]);
      break;
  default: 
    PaintBlocks(div, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
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
      $("#ans-num").html(ans);
      ShowBlocks($("#ans-block"), ans);
      Ding();
      Green();
      Fireworks();
      setTimeout(function() {NewSum(question);}, 2000);
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
