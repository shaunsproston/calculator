//input

const input = document.getElementById("input");
let output = document.getElementById("output");
const btn = document.getElementsByClassName("btn");

// Keypad Controls and Cancel



document.addEventListener("click", function(e){
  let inputVal = e.target.innerHTML;
  if (inputVal === "C"){
    input.innerHTML = "";
  } else {
    input.innerHTML += e.target.innerHTML;
  }
});

// Simple addition

document.addEventListener("click", function(e){
  let inputVal = e.target.innerHTML;
  if (inputVal === "="){
    inputVal = input.innerHTML.slice(0,-1);
    let result = eval(inputVal);
    output.innerHTML = result;
    input.innerHTML = "";
    console.log("test 2 " + result);
  }
})


/*
switch (inputVal) {
  case 1:
    console.log(inputVal);
    break;
  case 2:
    console.log('Number ok');
    break;
  case 3:
    console.log('Number ok');
    break;
  case 4:
    console.log('Number ok');
    break;
  default:
    console.log('Invalid input');
}
*/
