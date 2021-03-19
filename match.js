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
  $('#target').addClass("correct");
  setTimeout(function() {$('#target').removeClass("correct")}, 2000);
}
MarkIncorrect = function() {
  $('#target').addClass("incorrect");
  setTimeout(function() {$('#target').removeClass("incorrect")}, 800);
}

var target = ''
NewLetter();

$(document).keydown(function (e){
  var pressed = String.fromCharCode(e.keyCode);
  if (target == pressed) {
    MarkCorrect();
    setTimeout(function() {NewLetter(target);}, 2000);
    target='';
  } else {
    if (target != '') MarkIncorrect();
  }
})
