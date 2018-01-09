console.log('Functions Loaded...\n\nWrite "firstLine();" to log available functions.');
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




/////////////complex math (trig) starts here///////////////


function Trig(theta, ang2, opp, adj, hyp) {
  var ans = undefined;
  if(opp == 'x' && adj != null) {
    ans = (Math.tan(theta)) * adj;
    return "x = " +ans;
  } else if(adj == 'x' && opp != null) {
    ans = opp / (Math.tan(theta));
    return "x = " +ans;
  } else if(opp == 'x' && hyp != null) {
    ans = (Math.sin(theta)) * hyp;
    return "x = " +ans;
  } else if(hyp == 'x' && opp != null) {
    ans = opp / (Math.sin(theta));
    return "x = " +ans;
  } else if(adj == 'x' && hyp != null) {
    ans = (Math.cos(theta)) * hyp;
    return "x = " +ans;
  } else if(hyp == 'x' && adj != null) {
    ans = adj / (Math.cos(theta));
    return "x = " +ans;
  } else if(theta == 'x' && ang2 != null) {
    ans =  180 - (ang2 + 90);
    return "x = " +ans;
  } else if(ang2 == 'x' && theta != null) {
    ans = 180 - (theta + 90);
    return "x = " +ans;
  } else if(theta == 'x' && hyp != null && opp != null) {         //Multiply the result by 180/Math.PI to convert from radians to degrees.
    ans = (Math.asin(opp / hyp)) * (180/Math.PI);
    return "x = " +ans;
  } else if(theta == 'x' && hyp != null && adj != null) {
    ans = (Math.acos(adj / hyp)) * (180/Math.PI);
    return "x = " +ans;
  } else if(theta == 'x' && opp != null && adj != null) {
    ans = (Math.atan(opp / adj)) * (180/Math.PI);
    return "x = " +ans;
  } else if(theta != 'x' && ang2 != 'x' && opp != 'x' && adj != 'x' && hyp != 'x') {
    console.log("Please be sure to make one of the inputs 'x' so the function can find the value of that variable.");
  }
}
