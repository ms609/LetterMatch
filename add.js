// Ensure that number-blocks.js is imported before this script

"use strict";

let sums = [

  [i1, "+", i1, i2],
  [i1, "+", i1, i2],
  
  // Three
  [i1, "+", i2, i3],
  [i1, "+", i2, h3],
  [i1, "+", i2_1, i3],
  [i1_2, "+", i2, i3],
  
  // Four
  [i1, "+", l3, sq4],
  [i1_3, "+", i3, i4],
  [i1, "+", i3_1, i4],
  [i1_1, "+", l3, sq4],
  [i1_1, "+", h3, sq4],
  [i2, "+", i2, sq4],
  [_2, "+", _2, sq4],
    
  // Five
  [i1, "+", i4, i5],
  [i1_2, "+", sq4, h5],
  [i2, "+", i3, h5],
  [i2, "+", i3, i5],
  [i2_3, "+", i3, i5],
  [i1, "+", i4_1, i5],
  
  // Six
  [i1_2, "+", h5, rect6],
  [i1, "+", i5, rect6],
  [i1, "+", h5, rect6],
  [i3, "+", i3, rect6],
  [i2, "+", sq4, wide6],
  [_2_2, "+", sq4, rect6],
  
  // Seven
  [i1_3, "+", rect6, h7],
  [i1, "+", wide6, dog7],
  [i1, "+", rect6, h7],
  [i1, "+", rect6, h7],
  [_2, "+", h5, h7],
  [i2, "+", i5, d7],
  [i3, "+", i4, h7],
  
  // Eight
  [i1, "+", h7, rect8],
  [i1, "+", o7, o8],
  [i1_3, "+", h7, rect8],
  [i2, "+", rect6, rect8],
  [_2, "+", rect6, rect8],
  [i3, "+", i5, rect8],
  [i3, "+", i5, b8],
  [r3, "+", h5, rect8],
  [i4, "+", i4, rect8],
  [sq4, "+", sq4, rect8],
  [sq4_2, "+", sq4, rect8],
  
  // Nine
  [i1, "+", rect8, h9],
  [i1, "+", o8, sq9],
  [_2, "+", h7, h9],
  [_2, "+", dog7, sq9],
  [i2, "+", b7, h9],
  [i3, "+", rect6, sq9],
  [i4, "+", i5, h9],
  [sq4, "+", h5, h9],
  [sq4, "+", r5, sq9],

];

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

function Count(blocks) {
  var ret = 0;
  blocks.forEach(function (block) {
    if (block) ++ret;
  });
  return ret;
}

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

function ShowQuestion() {
  let sum = sums[question];
  let reverse = sum[1] == "+" && Math.random() < 0.5;
  let num1 = reverse ? sum [2] : sum[0];
  let num2 = reverse ? sum [0] : sum[2];
    
  $("#left-num").html(Count(num1));
  PaintBlocks($("#left-block"), num1);
  $("#operator").html(sum[1]);
  $("#right-num").html(Count(num2));
  PaintBlocks($("#right-block"), num2);
  $("#ans-num").html("?");
  PaintBlocks($("#ans-block"), i0);
}

function NewSum(avoid) {
  question = NextSum(avoid);
  position = 0;
  ShowQuestion();
}

NewSum();

$(document).keydown(function (e) {
  let pressed = e.key;
  let greenDuration = 4000
  if (isFinite(e.key)) {
    let sum = sums[question];
    let ans = sum[3];
    if (pressed == Count(ans)) {
      if (!dinging) {
        $("#ans-num").html(Count(ans));
        PaintBlocks($("#ans-block"), ans);
        Ding();
        dinging = true;
        Green(greenDuration);
        Fireworks();
        setTimeout(function() {
          dinging = false;
          NewSum(question);
        }, greenDuration);
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
