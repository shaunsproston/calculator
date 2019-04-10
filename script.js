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

// Addition

document.addEventListener("click", function(e){
  let inputVal = e.target.innerHTML;
  if (inputVal === "="){
    console.log(input.innerHTML.slice(0,-1));
  }
})
