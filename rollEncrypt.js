function rollEncrypt(rolls, text) {
  var temp;
  for (var i = 0; i < rolls; i++) {
    if (i == 0) {
      temp = btoa(text);
    } else {
      temp = btoa(temp);
    }
  }
  
  return temp;
}
