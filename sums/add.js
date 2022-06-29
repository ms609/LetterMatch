// Ensure that number-blocks.js is imported before this script

"use strict";

var position = 0;
var question;
var beeping = false;
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
  const sum = sums[question];
  const reverse = sum[1] == "+" && Math.random() < 0.5;
  const num1 = reverse ? sum [2] : sum[0];
  const num2 = reverse ? sum [0] : sum[2];
  let operator;
  switch(sum[1]) {
    case "-": operator = "&minus;"; break;
    default:
      operator = sum[1];
  }
    
  $("#left-num").html(Count(num1));
  PaintBlocks($("#left-block"), num1);
  $("#operator").html(operator);
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
