RandomLetter = function (not) {
  var ret = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  if (ret == not) ret = RandomLetter(not);
  return (ret);
}

NewLetter();
