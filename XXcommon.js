var clearIncorrect;
var badNoise;
var target = '';

NewLetter = function (avoid) {
  target = RandomLetter(avoid);
  $('#target').html(target + target.toLowerCase());
}

MarkCorrect = function() {
  new Audio('66136__aji__ding30603-spedup.wav').play();
  $('body').addClass("correct");
  $('body').fireworks();
  $('body').fireworks('destroy');
  setTimeout(function() {
    $('body').removeClass("correct");
  }, 2000);
}

UnmarkIncorrect = function() {
  $('body').removeClass("incorrect");
  clearIncorrect = false;
}

MarkIncorrect = function() {
  if (clearIncorrect) {
    window.clearTimeout(clearIncorrect);
    clearIncorrect = setTimeout(UnmarkIncorrect, 300);
  } else { 
    $('body').addClass("incorrect");
    var context = new AudioContext();
    badNoise = context.createOscillator();
    badNoise.type = "sine";
    badNoise.connect(context.destination);
    badNoise.start();
    setTimeout(function () {badNoise.stop();}, 300);
    clearIncorrect = setTimeout(UnmarkIncorrect, 300);
  }
}

$(document).keydown(function (e) {
  code = e.keyCode
  if (code > 47 && code < 123) {
  var pressed = String.fromCharCode(code);
    if (target == pressed) {
      MarkCorrect();
      oldLetter = target;
      setTimeout(function() {NewLetter(oldLetter);}, 2000);
      target = '';
    } else {
      if (target != '') MarkIncorrect();
    }
  }
})
