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
  num = document.getElementById('reverse-rad').value;
  var ans_text = document.getElementById('Reverse_radical_ans');
  //integer (whole number) validation
  if(num == "" || typeof num === NaN || num.includes('.')){
    ans_text.innerHTML = "Please enter a whole number value";
  //if the input is an integer
  } else {
  //creating an array of squared numbers we can use to filter
    var numbers = [];
    let i = 0;
    let base_num = 0;
    while(i <= 999) {
      numbers.push({});
      numbers[i].base = base_num;
      numbers[i].squared = Math.pow(base_num, 2);
      base_num++;
      i++;
    }
    //creating a separate array with squared numbers that are less than the input and return an integer when divided by the input
    var valid_nums = numbers.filter(number_f => (number_f.squared < num && Number.isInteger(num/number_f.squared)));
    const max_num = valid_nums[valid_nums.length -1].squared;
    if(Number.isInteger(num / Math.sqrt(num))) { //Perfect Square
      ans_text.innerHTML = Math.sqrt(num) + "<br />(It was a perfect square)";
    } else if(valid_nums.length > 1){ //Unsimplified Radical
      ans_text.innerHTML = Math.sqrt(max_num) + "⎷" + (num /(max_num));
    } else { //Simplified Radical
      ans_text.innerHTML = "Radical is already simplified";
    }
  }
}

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

function reg_polygon() {
  var n = document.getElementById("poly_n").value; //Number of Sides
  var sideLength = document.getElementById("poly_sideLength").value;
  var radius = document.getElementById("poly_radius").value;
  var apothem = document.getElementById("poly_apothem").value;
  var area = document.getElementById("poly_area").value;
  var ans_text = document.getElementById("poly_answer");

  //variables needed for equations
  const half_side = 0.5 * sideLength;


  //Number of Sides input validation
  if(n != "" && typeof n !== NaN){
    if(!n.includes(',')){
      if(area == 'x'){
        if(sideLength != "" && typeof sideLength !== NaN){
          if(apothem != "" && typeof apothem !== NaN) {
            ans_text.innerHTML = "x = " + 0.5 * ((sideLength * n) * apothem);
          } else if(radius != "" && typeof radius !== NaN){
            /* Side Lengths and Radius are given but apothem is missing */
          } else {
            /* Only Side Lengths are given */
          }
        } else if(apothem != "" && typeof apothem !== NaN){
            if(radius != "" && typeof radius !== NaN){
              /* Use pythagorean theorem with radius (hyp) and apothem (opp) to get side length (double it because
               the answer will be half the side length)*/
            } else {
              /* Only Apothem is given */
            }
        } else if(radius != "" && typeof radius !== NaN){
          /* ONLY Radius is given */
        } else {
          ans_text.innerHTML = "Not enough information";
        }
      } else if(sideLength == 'x'){
        if(apothem != "" && typeof apothem !== NaN){
          if(radius != "" && typeof radius !== NaN){
            /* Radius AND apothem are given */
          } else if(area != "" && typeof area !== NaN) {
            /* Area and apothem are given but radius is missing */
          } else {
            /* ONLY apothem is given */
          }
        } else if(radius != "" && typeof radius !== NaN){
          if(area != "" && typeof area !== NaN){
            /* Radius AND Area are given */
          } else {
            /* ONLY radius is given */
          }
        } else if(area != "" && typeof area !== NaN){
          /* ONLY area is given */
        } else {
          ans_text.innerHTML = "Not enough information";
        }
      } else if(apothem == 'x'){
        if(sideLength != "" && typeof sideLength !== NaN){
          if(radius != "" && typeof radius !== NaN){
            /* Side Length and Radius are given (use pythagorean theorem)
               (Radius is hypotenuse)*/
          } else if(area != "" && typeof area !== NaN){
            /* Side length and Area is given but Radius is missing */
          } else {
            /* ONLY Side Length is given */
          }
        } else if(radius != "" && typeof radius !== NaN){
          if(area != "" && typeof area !== NaN){
            /* Only Radius and Area are given */
          } else {
            /* ONLY Radius is given */
          }
        } else if(area != "" && typeof area !== NaN) {
          /* ONLY Area is given */
        } else {
          ans_text.innerHTML = "Not enough information";
        }
      } else if(radius == 'x'){
        if(sideLength != "" && typeof sideLength !== NaN){
          if(apothem != "" && typeof apothem !== NaN){
            /* Side Length AND Apothem are given (Use pythagorean theorem)
               (Both are legs, so try to find the hypotenuse)*/
          } else if(area != "" && typeof area !== NaN){
            /* Side Length and Area are given but Apothem is missing */
          } else {
            /* ONLY Side Length is given */
          }
        } else if(apothem != "" && typeof apothem !== NaN){
          if(area != "" && typeof area !== NaN){
            /* Area AND Apothem are given */
          } else {
            /* ONLY Apothem is given */
          }
        } else if(area != "" && typeof area !== NaN){
          /* ONLY Area is given */
        } else {
          ans_text.innerHTML = "Not enough information";
        }
      } else {
        ans_text.innerHTML = "Error: 1 value must be set to x"
      }
    } else {
      ans_text.innerHTML = "Commas don't belong in numbers Cledus..";
    }
  } else { // if n's input is blank or contains a letter
    ans_text.innerHTML = "You MUST input a number for the Number of Sides";
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
