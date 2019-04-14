//input

const input = document.getElementById("input");
let output = document.getElementById("output");
let btn = document.getElementsByClassName("btn");
console.log(btn[6].innerHTML);




// Keypad Controls and Cancel

document.addEventListener("click", function(e){
  let inputVal = e.target.innerHTML;

  if (inputVal === "C"){
    input.innerHTML = "";
  } else {
    input.innerHTML += e.target.innerHTML;
    console.log('test 2 ' + inputVal)
  }
  if (inputVal === "="){
    inputVal = input.innerHTML.slice(0,-1);
    let result = eval(inputVal);
    output.innerHTML = result;
    input.innerHTML = "";
    console.log('test 3 ' + inputVal)
  }

});
/*
document.addEventListener("click", function(e){
  let inputVal = e.target.innerHTML;

  if (inputVal === "1"){
    input.innerHTML = "1";
  } else {
    input.innerHTML = ""
  }

});
*/
