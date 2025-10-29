function welcome(){
document.getElementById("demo1").innerHTML="Hello Dolly";
document.getElementById("demo2").innerHTML="How are you";
}

const x = 5;
const y = 6;
const z = x + y;

document.getElementById("demo").innerHTML = "The value of z is " + z;

 // Operators
function showResults() {
  let a = 10;
  let b = 5;
  let output = "";

  // Arithmetic Operators
  output += "<h3>1: Arithmetic Operators</h3>";
  output += `a + b = ${a + b}<br>`;
  output += `a - b = ${a - b}<br>`;
  output += `a * b = ${a * b}<br>`;
  output += `a / b = ${a / b}<br>`;
  output += `a % b = ${a % b}<br><br>`;

  // Comparison Operators
  output += "<h3>2: Comparison Operators</h3>";
  output += `a == b  ${a == b}<br>`;
  output += `a != b  ${a != b}<br>`;
  output += `a > b  ${a > b}<br>`;
  output += `a < b  ${a < b}<br>`;
  output += `a >= b  ${a >= b}<br>`;
  output += `a <= b  ${a <= b}<br><br>`;

  // Logical Operators
  output += "<h3>3: Logical Operators</h3>";
  output += `(a > b && b > 0)  ${a > b && b > 0}<br>`;
  output += `(a > b || b < 0)  ${a > b || b < 0}<br>`;
  output += `!(a == b)  ${!(a == b)}<br><br>`;

  // Assignment Operators
  output += "<h3>4: Assignment Operators</h3>";
  let x = 10;
  x += 5;
  output += `x += 5  ${x}<br>`;
  x -= 3;
  output += `x -= 3  ${x}<br>`;
  x *= 2;
  output += `x *= 2  ${x}<br>`;
  x /= 4;
  output += `x /= 4  ${x}<br><br>`;

  // String Operators
  output += "<h3>5: String Operators</h3>";
  let firstName = "Iqra";
  let lastName = "Gul";
  output += `firstName + " " + lastName = ${firstName + " " + lastName}<br>`;

  document.getElementById("result1").innerHTML = output;
}


// Conditions:
function checkNumber() {
  let num = document.getElementById("userNumber").value;
  let resultBox = document.getElementById("result2");

  if (num === "") {
    resultBox.innerHTML = " Please enter a number first!";
    resultBox.style.color = "red";
  } 
  else if (num > 0) {
    resultBox.innerHTML = " The number is Positive.";
    resultBox.style.color = "green";
  } 
  else if (num < 0) {
    resultBox.innerHTML = " The number is Negative.";
    resultBox.style.color = "orange";
  } 
  else {
    resultBox.innerHTML = " The number is Zero.";
    resultBox.style.color = "blue";
  }
}



// Create an Object:
const car = {type:"Fiat", model:"500", color:"white"};

document.getElementById("objcreate").innerHTML =
"The car type is " + car.type;


// js date:
const d = new Date("2025-10-29");
document.getElementById("dateexe").innerHTML = d;



// js array:
const fruits = ["Banana", "Orange", "Apple", "Mango" ,"orange"];
fruits.length = 4;
document.getElementById("arrlength").innerHTML = fruits;


