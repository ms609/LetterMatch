RandomLetter = function (not) {
  var ret = String.fromCharCode(65+Math.floor(Math.random() * 26));
  if (ret == not) ret = RandomLetter(not);
  return (ret);
}

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
var clearIncorrect;
MarkIncorrect = function() {
  $('body').addClass("incorrect");
  var context = new AudioContext();
  var badNoise = context.createOscillator();
  badNoise.type = "sine";
  badNoise.connect(context.destination);
  badNoise.start();
  window.clearTimeout(clearIncorrect);
  clearIncorrect = setTimeout(function() {
    $('body').removeClass("incorrect")
    badNoise.stop();
  }, 300);
}

var target = ''
NewLetter();

$(document).keydown(function (e) {
  code = e.keyCode
  if (code > 64 && code < 123) {
  var pressed = String.fromCharCode(code);
    if (target == pressed) {
      MarkCorrect();
      setTimeout(function() {NewLetter(target);}, 2000);
      target = '';
    } else {
      if (target != '') MarkIncorrect();
    }
  }
})
