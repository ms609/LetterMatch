var clearIncorrect;
var badNoise;
var target = '';

NewLetter = function (avoid) {
  target = RandomLetter(avoid);
  ShowTarget();
}

ShowTarget = function () {
  if (target != '') {
    // $('#target').html(target + target.toLowerCase());
    $('#target').html(target.toLowerCase());
  }
  //$('body').removeClass("pressed");
}

Ding = function () {
  new Audio('66136__aji__ding30603-spedup.wav').play();
}

Green = function () {
  $('body').addClass("correct");
  setTimeout(function() {
    $('body').removeClass("correct");
  }, 2000);
}

Fireworks = function () {
  $('body').fireworks();
  $('body').fireworks('destroy');
}

MarkCorrect = function() {
  Ding();
  Green();
  Fireworks();
}

UnmarkIncorrect = function() {
  $('body').removeClass("incorrect");
  clearIncorrect = false;
}

Beep = function() {
  var context = new AudioContext();
  badNoise = context.createOscillator();
  badNoise.type = "sine";
  badNoise.connect(context.destination);
  badNoise.start();
  setTimeout(function () {badNoise.stop();}, 300);
}

MarkIncorrect = function() {
  if (clearIncorrect) {
    window.clearTimeout(clearIncorrect);
    clearIncorrect = setTimeout(UnmarkIncorrect, 300);
  } else {
    $('body').addClass("incorrect");
    clearIncorrect = setTimeout(UnmarkIncorrect, 300);
    Beep();
  }
}
