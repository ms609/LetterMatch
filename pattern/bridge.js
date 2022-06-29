"use strict";

var position = 0;
var question;
var beeping = false;
var dinging = false;

// Seqences

function NextSeq(not) {
  var ret = Math.floor(Math.random() * seqs.length);
  if (ret == not) {
    ret = NextSeq(not);
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
  const seq = seqs[question];
  console.log("Question " + question, seqs[question])

  for (const c of seq[0]) {
    $("#bridge").append("<div class=\"bridge-block block-" + c + "\">&nbsp;</div>");
  }
  for (var i = 0; i != seq[1].length; i++) {
    $("#bridge").append("<div id=\"answer-" + i + "\" class=\"bridge-block block-x\">&nbsp;</div>");
  }

  $(".bridge-block").css({
    "height": (((100 / (seq[0].length + seq[1].length)) - 0.25) + "vw")
  })
}

function NewSeq(avoid) {
  question = NextSeq(avoid);
  position = 0;
  ShowQuestion();
}

NewSeq();

$(document).keydown(function (e) {
  if (dinging || beeping) return;

  let pressed = e.key;
  let greenDuration = 4000
  let block = $("#answer-" + position);
  if (isFinite(e.key)) {
    block.css({
      "background-color": "var(--col-" + e.key + ")",
      "outline-color": "var(--col-" + e.key + ")"
    })

    let seq = seqs[question];
    let ans = seq[1][position];
    if (pressed == ans) {

      console.log("Good.")
      block
        .animate({
          height: "+=1vw",
          margin: "-=0.5vw",
        }, "fast", () => block.css("outline-style", "solid"))
        .animate({
          height: "-=1vw",
          margin: "+=0.5vw"
        }, "fast")
      ;

      position++;
      console.log("position: ", position);

      if (position == seq[1].length) {
        Ding();
        dinging = true;
        Green(greenDuration);
        Fireworks();
        $(".bridge-block").animate({
          opacity: 0,
          width: 0,
          height: 0,
          margin: $(".bridge-block").css("width").replace("px", "") / 2 + "px"
        }, greenDuration * 0.6, function() {
          $(this).remove();
        });
        setTimeout(() => {
          dinging = false;
          console.log("unding");
          NewSeq(question);
        }, greenDuration + 10);
      }

    } else {

      var context = new AudioContext();
      badNoise = context.createOscillator();
      badNoise.type = "sine";
      badNoise.connect(context.destination);
      beeping = true;
      console.log("BEEEEP")
      badNoise.start();
      setTimeout(function() {badNoise.stop();}, 250);

      block
        .animate({
          marginTop: "20vw",
          opacity: 0
        }, "slow", function() {
          block.css({
            marginTop: $(".bridge-block").css("marginTop"),
            backgroundColor: "transparent",
            outlineColor: "#555"
          });

        })
        .animate({
          opacity: 1
        }, "fast", () => {
          beeping = false;
          console.log("unbeep")
        })
      ;
    }
  }
})
