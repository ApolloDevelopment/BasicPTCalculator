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


///////// -- To get a number's square root without Math.sqrt(number), simply put its answer to the power of 0.5
//-- Example:
/*

var leg = ((c - b) ** 0.5); ------- <--- is the same as:


var leg = (c - b);
var ans = Math.sqrt(leg);

----------------------------- yes, it uses more lines of code, but it is written a lot cleaner and easier to read for
                              newer programmers to understand and learn from.
*/
function getHypotenuse(a, b) {
  var hyp = ((a *= a) + (b *= b));
  var ans = Math.sqrt(hyp);
  return ans;
}

function getMissingLeg(b, c) {
  var leg = ((c *= c) - (b *= b));
  var ans = Math.sqrt(leg);
  return ans;
}

function getRelation(a,b,c) {
  var relation;
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
  var answer;
  var outside = (a *= a);
  answer = (outside * d);
  return answer;
}


///////if you have a complex radical and need to use the numbers squared////////


function getHsquared(a, b) {
  var hyp = (a + b);
  var ans = Math.sqrt(hyp);
  return ans;
}

function getMLsquared(b, c) {
  var leg = (c - b);
  var ans = Math.sqrt(leg);
  return ans;
}

function getRsquared(a,b,c) {
  var relation;
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
  var ans;
  if(opp == 'x' && adj != null && hyp == null) {
    ans = (Math.tan(theta)) * adj;
    return "x = " +ans;
  } else if(adj == 'x' && opp != null && hyp == null) {
      ans = opp / (Math.tan(theta));
      return "x = " +ans;
  } else if(opp == 'x' && hyp != null && adj == null) {
      ans = (Math.sin(theta)) * hyp;
      return "x = " +ans;
  } else if(hyp == 'x' && opp != null && adj == null) {
      ans = opp / (Math.sin(theta));
      return "x = " +ans;
  } else if(adj == 'x' && hyp != null && opp == null) {
      ans = (Math.cos(theta)) * hyp;
      return "x = " +ans;
  } else if(hyp == 'x' && adj != null && opp == null) {
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
      console.log("Please be sure to set one of the inputs to 'x' so the function can find the value of that variable.");
  }
}





//Continue functions here when you actually feel like coding something else lmfao

function Trapezoid(a, b1, b2, h) {
  var ans;
  if(a == 'x') {
    ans = (0.5*h) * (b1 + b2);
    return "A = " +ans;
  } else if(b1 == 'x') {
    ans = (a / (0.5*h)) - b2;
    return "x = " +ans;
  } else if(b2 == 'x') {
    ans = (a / (0.5*h)) - b1;
    return "x = " +ans;
  } else if(h == 'x') {
    ans = (a*2) / (b1 + b2);
    return "x = " +ans;
  } else if(a != 'x' && b1 != 'x' && b2 != 'x' && h != 'x'){
    console.log("Please be sure to set one of the inputs to 'x' so the function can find the value of that variable.");
  }
}

function Pyramid(l, w, h, sl) {
  var ans;
  if(h === 'x') {
    var a = 0.5 * l;
    ans = Math.sqrt((sl *= sl) - (a *= a));
    return "Height = "+ans;
  } else if(sl === 'x' || sl === null || sl === undefined) {
    ans = (1/3) * (l * w * h);
    return "Volume = "+ans;
  }
}

function Cone(r, h, sl) {
  var ans;
  if(h == 'x') {
    ans = Math.sqrt((sl *= sl) - (r *= r));
    return "Height = "+ans;
  } else {
    ans = (1/3) * Math.PI*(r *= r) * h;
    return "V = "+ans;
  }
}
