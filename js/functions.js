console.log('Functions:\n\n- firstLine() //logs the pre-loaded line to the console that states the available functions\n\n- getHypotenuse(a, b) //gets the value of the hypotenuse with the given A and B leg lengths\n\n- getMissingLeg(b, c) //gets the length of a missing side if the hypotenuse is given\n\n- getRelation(a, b, c) //gets the relationship of a triangle (obtuse, acute, right) based on its length measurements\n');
function firstLine() {
  var firstLine = console.log('Functions:\n\n- getHypotenuse(a, b) //gets the value of the hypotenuse with the given A and B leg lengths\n\n- getMissingLeg(b, c) //gets the length of a missing side if the hypotenuse is given\n\n- getRelation(a, b, c) //gets the relationship of a triangle (obtuse, acute, right) based on its length measurements\n');
  return firstLine;
}
function windowLoad () {
  alert('This is a simple pythagorean theorom calculator. Use the console to run the functions and get your answer. Tips are presented on the main page.');
}
//window.onload = windowLoad();

//////////////- where the math starts -/////////////////////////////
function getHypotenuse(a, b) {
  var hyp = (((a *= a) + (b *= b)) ** 0.5);
  return hyp;
}

function getMissingLeg(b, c) {
  var leg = (((c *= c) - (b *= b)) ** 0.5);
  return leg;
}

function getRelation(a,b,c) {
  let relation = undefined;
  var relationC = (c *= c);
  var relationAB = ((a *= a) + (b *= b));
  if(relationC > relationAB) {
    relation = "Obtuse";
    return relation;
  } else if(relationC < relationAB) {
    relation = "Acute";
    return relation;
  } else {
    relation = "Right";
    return relation;
  }
}

function radical(a, d) {
  let answer = undefined;
  var outside = (a *= a);
  answer = (outside * d);
  return answer;
}


///////if you have a complex radical and need to use the numbers squared////////


function getHsquared(a, b) {
  var hyp = ((a + b) ** 0.5);
  return hyp;
}

function getMLsquared(b, c) {
  var leg = ((c - b) ** 0.5);
  return leg;
}

function getRsquared(a,b,c) {
  let relation = undefined;
  var relationC = c;
  var relationAB = (a + b);
  if(relationC > relationAB) {
    relation = "Obtuse";
    return relation;
  } else if(relationC < relationAB) {
    relation = "Acute";
    return relation;
  } else {
    relation = "Right";
    return relation;
  }
}
