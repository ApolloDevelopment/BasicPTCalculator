var hyp_ans;
var ML_ans;
var reverse_rad_ans;
var trig_ans;

function default_getHypotnuse(a, b) {
  var ans = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  console.log("Hypotenuse: " +ans);
  hyp_ans = ans;
  return hyp_ans;
}

function default_getMissingLeg(b, c) {
  var ans = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
  console.log("Leg: " +ans);
  ML_ans = ans;
  return ML_ans;
}

function default_getRelation(a, b, c) {
  var relationAB = Math.pow(a, 2) + Math.pow(b, 2);
  var relationC = Math.pow(c, 2);
  if(relationAB > relationC) {
    return "Acute Triangle";
  } else if(relationAB < relationC) {
    return "Obtuse Triangle";
  } else {
    return "Right Triangle";
  }
}

function default_radical(a, d) {
  var ans = Math.pow(a, 2) * d;
  console.log("⎷"+ans);
}

function default_reverse_radical(num) {
  var ans;
  if(typeof num === NaN || num.includes('.')){
    console.log("Error: must be a whole number");
  } else {
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
    var valid_nums = numbers.filter(number_f => (number_f.squared < num && Number.isInteger(num/number_f.squared)));
    const max_num = valid_nums[valid_nums.length -1].squared;
    if(Number.isInteger(num / Math.sqrt(num))) {
      console.log(Math.sqrt(num) + " (It was a perfect square)");
      reverse_rad_ans = Math.sqrt(num);
      return reverse_rad_ans;
    } else if(valid_nums.length > 1){
      console.log(Math.sqrt(max_num) + "⎷" + (num /(max_num)));
      reverse_rad_ans = Math.sqrt(max_num) + "⎷" + (num /(max_num));
      return reverse_rad_ans;
    } else {
      console.log("Radical is already simplified");
      reverse_rad_ans = num;
      return reverse_rad_ans;
    }
  }
}

function default_Trig(theta, ang2, opp, adj, hyp) {
  var ans;
  if(opp == 'x' && adj != null && hyp == null) {
    ans = (Math.tan(theta * (Math.PI/180))) * adj;
    console.log("x = " +ans);
    trig_ans = ans;
    return trig_ans;
  } else if(adj == 'x' && opp != null && hyp == null) {
      ans = opp / (Math.tan(theta * (Math.PI/180)));
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(opp == 'x' && hyp != null && adj == null) {
      ans = (Math.sin(theta * (Math.PI/180))) * hyp;
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(hyp == 'x' && opp != null && adj == null) {
      ans = opp / (Math.sin(theta * (Math.PI/180)));
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(adj == 'x' && hyp != null && opp == null) {
      ans = (Math.cos(theta * (Math.PI/180))) * hyp;
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(hyp == 'x' && adj != null && opp == null) {
      ans = adj / (Math.cos(theta * (Math.PI/180)));
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(theta == 'x' && ang2 != null) {
      ans =  180 - (ang2 + 90);
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(ang2 == 'x' && theta != null) {
      ans = 180 - (theta + 90);
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(theta == 'x' && hyp != null && opp != null) {         //Multiply the result by 180/Math.PI to convert from radians to degrees.
      ans = (Math.asin(opp / hyp)) * (180/Math.PI);
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(theta == 'x' && hyp != null && adj != null) {
      ans = (Math.acos(adj / hyp)) * (180/Math.PI);
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(theta == 'x' && opp != null && adj != null) {
      ans = (Math.atan(opp / adj)) * (180/Math.PI);
      console.log("x = " +ans);
      trig_ans = ans;
      return trig_ans;
  } else if(theta != 'x' && ang2 != 'x' && opp != 'x' && adj != 'x' && hyp != 'x') {
      console.log("Error: 1 value must be set to x");
  }
}

function default_reg_polygon(n, side_length, radius, apothem, area) {
   var ans;
   var half_side = 0.5 * side_length;
   var a = apothem;
   var p = side_length * n;
   var ang_measure = 0.5 * ((180 * (n - 2)) / n);
  // if(area == 'x' && side_length != null && apothem != null) {
  //   ans = 0.5 * (p * a);
  // } else if(area == 'x' && side_length != null && radius != null && apothem == null) {
  //   default_Trig(ang_measure, null, 'x', half_side, radius);
  //   a = trig_ans;
  //   ans = 0.5 * (p * a);
  //   console.log(ans);
  // }
  console.log(trig_ans);
  var ans;
  // if(){
  //   if(){
  //     if(){
  //
  //     } else {
  //
  //     }
  //   } else {
  //
  //   }
  // } else {
  //
  // }
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
