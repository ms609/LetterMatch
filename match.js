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
  window.clearTimeout(clearIncorrect);
  clearIncorrect = setTimeout(function() {$('body').removeClass("incorrect")}, 300);
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
