//input

const input = document.getElementById("input");
let output = document.getElementById("output");
let btn = document.getElementsByClassName("btn");
/*
for (let i=0; i<btn.length; i++){
  console.log(btn[i].textContent);
}
*/






document.addEventListener("click", function(evt){
let btnClicked = evt.target.className;
let btnContent = evt.target.textContent
  if (btnClicked === "btn symbol" || btnClicked === "btn number" || btnClicked === "btn equals") {
    console.log("button");
    console.log(btnContent);
  }
});


// Keypad Controls and Cancel
/*
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
*/
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
