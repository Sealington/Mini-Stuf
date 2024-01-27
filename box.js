function generateBox(x, y) {
  var corner = "+";
  var wall   = "|";
  var tops    = "-";
  
  var top = tops.repeat(x); // the top of the box
  
  // now, making the sides will be much more complicated
  var s = " ";
  var space = s.repeat(y);
  
  console.log(`
${corner}${top}${corner}
${wall}${space}${wall}
${corner}${top}${corner}
`);
}
