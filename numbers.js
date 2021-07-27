RandomLetter = function (not) {
  var ret;
  if (Math.random() < 0.31) {
    var ret = String.fromCharCode(48 + Math.floor(Math.random() * 10));    
  } else {
    var ret = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  console.log(ret, not)
  if (ret == not) ret = RandomLetter(not);
  return (ret);
}

NewLetter();
