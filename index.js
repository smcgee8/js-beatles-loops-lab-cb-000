function theBeatlesPlay(musicians, instruments) {
  var talents = [];
  for (var i = 0; i < musicians.length; i++) {
    talents.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return talents
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return array;  
}
