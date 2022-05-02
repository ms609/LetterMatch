var dictionary = {
  cat: '🐈',
  pen: '🖋️',
  dog: '🐕',
  hat: '👒',
  bat: '🦇',
  sad: '😞',
  nut: '🌰',
  bag: '👜',
  tag: '🏷️',
  ten: '🔟',
  leg: '🦵',
  pin: '📍',
  web: '🕸️',
  lip: '💋',
  mop: '🧹',
  box: '📦',
  fox: '🦊',
  cut: '✂️',
  bug: '🐛',
  pig: '🐷',
  red: '🟥',
  pan: '🍳',
  van: '🚚',
  tap: '🚰',
  map: '🗺️',
  bed: '🛏️',
  rat: '🐀',
  bin: '🗑️',
  sun: '🌞',
  skull: '💀',
  wave: '👋',
  pinch: '🤏',
  point: '👉',
  feet: '👣',
  ear: '👂',
  brain: '🧠',
  tooth: '🦷',
  bone: '🦴',
  eye: '👁',
  baby: '👶',
  vest: '🦺',
  sock: '🧦',
  scarf: '🧣',
  shoe: '👞',
  ring: '💍',
  crown: '👑',
  boot: '👢',
  frog: '🐸',
  duck: '🦆',
  chick: '🐥',
  owl: '🦉',
  wolf: '🐺',
  boar: '🐗',
  horse: '🐴',
  bee: '🐝',
  snail: '🐌',
  ant: '🐜',
  snake: '🐍',
  dino: '🦖',
  ladybird: '🐞',
  squid: '🦑',
  fish: '🐟',
  crab: '🦀',
  whale: '🐳',
  tiger: '🐅',
  zebra: '🦓',
  camel: '🐫',
  cow: '🐄',
  swan: '🦢',
  dove: '🕊',
  paw: '🐾',
  tree: '🌳',
  leaf: '🍃',
  shell: '🐚',
  moon: '🌙'  ,
  star: '🌟',
  snow: '🌨',
  rain: '☔️',
  wave: '🌊',
  lemon: '🍋',
  apple: '🍏',
  pear: '🍐',
  banana: '🍌',
  melon: '🍉',
  grape: '🍇',
  orange: '🍊',
  lime: '🍈',
  kiwi: '🥝',
  carrot: '🥕',
  bread: '🍞',
  cheese: '🧀',
  // meat: '🥩', // ambiguous
  egg: '🥚',
  pizza: '🍕',
  cake: '🎂',
  tea: '☕️',
  ice: '🧊',
  lolly: '🍭',
  spoon: '🥄',
  salt: '🧂',
  ball: '🏀',
  yoyo: '🪀',
  kite: '🪁',
  swim: '🏊‍♀️',
  paint: '🎨',
  car: '🚗',
  bus: '🚌',
  taxi: '🚕',
  bike: '🚲',
  train: '🚝',
  siren: '🚨',
  plane: '🛩',
  clock: '🕰',
  torch: '🔦',
  key: '🔑',
  book: '📔',
  three: '3️⃣',
  five: '5️⃣',
  six: '6️⃣',
  seven: '7️⃣',
  nine: '9️⃣',
  yellow: '🟨',
  green: '🟩',
  blue: '🟦',
  black: '⬛️',
  white: '⬜️',
  brown: '🟫'
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
    $('#letter4').html(target.substring(3, 4));
    $('#letter5').html(target.substring(4, 5));
    $('#letter6').html(target.substring(5, 6));
    $('#letter7').html(target.substring(6, 7));
    $('#letter8').html(target.substring(7, 8));
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
      if (position == target.length) {
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
