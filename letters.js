RandomLetter = function (not) {
  var ret = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  if (ret == not) ret = RandomLetter(not);
  return (ret);
}

NewLetter();

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
      if (target != '') {
        MarkIncorrect();
        //$('body').addClass('pressed');
        //$('#target').html(pressed);
      }
    }
  }
})

$(document).keyup(ShowTarget)
$(document).focusout(ShowTarget)
