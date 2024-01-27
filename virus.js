const viName   = "Big Ass Disease";		// virus name
const pop    	 = 20;                  // population size
const coName   = "America";           // country name
const infTime  = 1 * 1000;            // infecting time
const stInf    = 0;                   // starting infected

var inf        = stInf;               // the infected people count
var vaProg     = 0;                   // the vaccine progress
var temp       = 0;                   // dont ask, its useful though

function init() {
  console.log (`BREAKING NEWS: People of ${coName}, a new virus called '${viName}' is going around. Please stay safe.`);
  var a = setInterval(function() {
    temp += 1;
    if (temp >= 3) {
      vaProg += 1;
      if (vaProg >= 3) {
        clearInterval(a);
        console.log (`After ${inf} people infected out of ${pop}, we finally made a vaccine for ${viName}. ${coName} is now free from ${viName}.`);
      } else {
        console.log (`Someone has been infected with ${viName}.`);
        console.log (`Vaccine Progress: ${vaProg}`);
        inf += 1;
      }
      console.log (`Infected: ${inf}`);
    } else {
      console.log (`Someone has been infected with ${viName}.`);
      inf += 1;
      console.log (`Infected: ${inf}`);
    }
  }, infTime);
}

init();
