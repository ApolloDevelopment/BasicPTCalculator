///////// -- To get a number's square root without Math.sqrt(number), simply put its answer to the power of 0.5

function getHypotenuse(a, b) {
  a = document.getElementById('getHypotenuse_a').value;
  b = document.getElementById('getHypotenuse_b').value;
  var ans_text = document.getElementById('hypotenuse-answer');
  var hyp = ((a *= a) + (b *= b));
  var ans = Math.sqrt(hyp);
  ans_text.innerHTML = "Hypotenuse: " + ans.toFixed(5);
}

function getMissingLeg(b, c) {
  b = document.getElementById('MissingLeg_b').value;
  c = document.getElementById('MissingLeg_c').value;
  var ans_text = document.getElementById('MissingLeg-answer');
  var leg = ((c *= c) - (b *= b));
  var ans = Math.sqrt(leg);
  ans_text.innerHTML = "Leg: " + ans.toFixed(5);
}

function getRelation(a,b,c) {
  a = document.getElementById('RelationLeg_a').value;
  b = document.getElementById('RelationLeg_b').value;
  c = document.getElementById('RelationLeg_c').value;
  var ans_text = document.getElementById('Relation-answer');
  var relation;
  var relationC = (c *= c);
  var relationAB = ((a *= a) + (b *= b));
  if(relationC > relationAB) {
    relation = "Obtuse";
    ans_text.innerHTML = relation + " Triangle";
  } else if(relationC < relationAB) {
    relation = "Acute";
    ans_text.innerHTML = relation + " Triangle";
  } else if (relationC == relationAB){
    relation = "Right";
    ans_text.innerHTML = relation + " Triangle";
  }
}

function radical(a, d) {
  a = document.getElementById('Radical_out').value;
  d = document.getElementById('Radical_in').value;
  var radical_text = document.getElementById('Radical-inside');
  var decimal_text = document.getElementById('Radical-dec');
  var inside = (a *= a) * d;
  var decimal = Math.sqrt(inside);
  radical_text.innerHTML = "Original Radical:<br />⎷" + inside;
  decimal_text.innerHTML = "Decimal:<br />" + decimal.toFixed(6);
  /*
    radical symbol: ⎷
  */
}

function reverse_radical(num) {
  num = document.getElementById('reverse-rad').value; // the users input
  var ans_text = document.getElementById('Reverse_radical_ans');
  if(num == "" || typeof num === NaN || num.includes('.')){ //checks if the input is empty, is a string, or contains a '.' (ex: 2.5). If any of these are true
    ans_text.innerHTML = "Please enter a whole number value"; // the user will be asked to input a whole number value
  } else {
    var numbers = []; //creating the array (we add objects in this array with the while(true) loop below)
    let i = 0; //defining the index of the array (starts at 0)
    let base_num = 0; //starting base number (un-squared versions) being 0, then 1, then 2, then 3, since we want the index to match the base number, we will start the base number at 0 also.
    while(i <= 999) { //loops unitl the numbers[] array has a length of 1000 (index is only up to 999, because arrays are 0-based, meaning they start at 0)
      numbers.push({}); //adds object to array
      numbers[i].base = base_num; //defines the created object's base number value
      numbers[i].squared = Math.pow(base_num, 2); //defines the created object's squared number value for that specific base number
      base_num++; // increment the values of both the base number
      i++; //////////////////////                   AND the array index
    }
    var valid_nums = numbers.filter(number_f => (number_f.squared < num && Number.isInteger(num/number_f.squared))); // creates a separate array of objects by filtering out all objects with squared numbers larger than the input value and requiring that any objects left must have a squared value that results in an integer when being divided by the user's input value
    console.log(valid_nums); // returning all objects with possible squared values
    const max_num = valid_nums[valid_nums.length -1].squared; //gets the largest possible squared number by identifying the exact last object, using the array's length and subracting 1 (because it's 0-based) and grabbing its "squared" object value
    if(Number.isInteger(num / Math.sqrt(num))) { //checks if the user input is a perfect square by dividing by the number by its own square root. If it ends up being a whole number, that means it divides evenly, being a perfect square.
      ans_text.innerHTML = Math.sqrt(num) + "<br />(It was a perfect square)"; //telling user the value is a perfect square
    } else if(valid_nums.length > 1){ //if there is only 1 object in the possible values, it is the number 1, which goes for any number, and you don't need a 1 before a radical because that's the same as saying it's simplified.
      ans_text.innerHTML = Math.sqrt(max_num) + "⎷" + (num /(max_num));
    } else { // if the amount of objects in the new valid_nums array is <= 1 (because those are everything "else" except being greater than (>). )
      ans_text.innerHTML = "Radical is already simplified"; // refer to the comment on line 79
    }
  }                       /* All credits to Dalton Hatter for this function (and every other function on this site) */
}



/////////////complex math (trig) starts here///////////////


function Trig(theta, ang2, opp, adj, hyp) {
  theta = document.getElementById('Trig_theta').value;
  ang2 = document.getElementById('Trig_ang2').value;
  opp = document.getElementById('Trig_opp').value;
  adj = document.getElementById('Trig_adj').value;
  hyp = document.getElementById('Trig_hyp').value;
  var ans_text = document.getElementById('Trig-answer');
  var ans;
  if(opp == "x" && adj != "" && hyp == "") {
    ans = (Math.tan(theta * (Math.PI/180))) * adj;
    ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(adj == "x" && opp != "" && hyp == "") {
      ans = opp / (Math.tan(theta * (Math.PI/180)));
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(opp == "x" && hyp != "" && adj == "") {
      ans = (Math.sin(theta * (Math.PI/180))) * hyp;
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(hyp == "x" && opp != "" && adj == "") {
      ans = opp / (Math.sin(theta * (Math.PI/180)));
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(adj == "x" && hyp != "" && opp == "") {
      ans = (Math.cos(theta * (Math.PI/180))) * hyp;
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(hyp == "x" && adj != "" && opp == "") {
      ans = adj / (Math.cos(theta * (Math.PI/180)));
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(theta == "x" && ang2 != "") {
      ans =  180 - (ang2 + 90);
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(ang2 == "x" && theta != "") {
      ans = 180 - (theta + 90);
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(theta == "x" && hyp != "" && opp != "") {         //Multiply the result by 180/Math.PI to convert from radians to degrees.
      ans = (Math.asin(opp / hyp)) * (180/Math.PI);
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(theta == "x" && hyp != "" && adj != "") {
      ans = (Math.acos(adj / hyp)) * (180/Math.PI);
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(theta == "x" && opp != "" && adj != "") {
      ans = (Math.atan(opp / adj)) * (180/Math.PI);
      ans_text.innerHTML = "x = " +ans.toFixed(6);
  } else if(theta != "x" && ang2 != "x" && opp != "x" && adj != "x" && hyp != "x") {
      ans_text.innerHTML = "Error: 1 value must be set to x";
  }
}

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
  if(h == 'x') {
    var a = 0.5 * l;
    ans = Math.sqrt((sl *= sl) - (a *= a));
    return "Height = "+ans;
  } else if(sl == 'x' || sl === null || sl === undefined) {
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









/*
// these functions serve no purpose, therefore,
// they are not included with the functions
// displayed on the website


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
*/
