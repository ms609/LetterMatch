var dictionary = {
  cat: '🐈',
  pen: '🖋️',
  dog: '🐕',
  hat: '👒',
  bat: '🦇',
  sad: '😞',
  nut: '🌰',
  pig: '🐷',
  red: '🟥',
  pan: '🍳',
  van: '🚚',
  tap: '🚰',
  map: '🗺️',
  bed: '🛏️',
  rat: '🐀',
  bin: '🗑️',
  sun: '🌞'
}
var words = Object.keys(dictionary)
var position = 0;
var beeping;


RandomWord = function (not) {
  var ret;
  selected = Math.floor(Math.random() * words.length);
  ret = words[selected];
  console.log(ret + "!= " + not);
  if (ret == not) ret = RandomWord(not);
  return (ret);
}

NewWord = function (avoid) {
  target = RandomWord(avoid);
  position = 0;
  $(".letter").removeClass("green");
  ShowTargetWord();
}

ShowTargetWord = function () {
  if (target != '') {
    $('#letter1').html(target.substring(0, 1));
    $('#letter2').html(target.substring(1, 2));
    $('#letter3').html(target.substring(2, 3));
    $('#image').html(dictionary[target]);
  }
}

NewWord();

$(document).keydown(function (e) {
  code = e.keyCode
  if (code > 47 && code < 123) {
    var pressed = String.fromCharCode(code).toLowerCase();
    if (pressed == target.substring(position, position + 1)) {
      Green();
      Ding();
      position = position + 1;
      $('#letter' + position).addClass("green");
      if (position == 3) {
        Fireworks();
        setTimeout(function() {NewWord(target);}, 2000);
        target = '';
      }
    } else {
      if (target != '') {
        letter = $("#letter" + (position + 1));
        if (letter.hasClass('red')) {
          letter.removeClass('red');
          void document.getElementById('letter' + (position + 1)).offsetWidth;
        }
        
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
          setTimeout(function () {badNoise.stop();}, 300);
        }
        $(letter).addClass('red');
      }
    }
  }
})
