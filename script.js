let input = document.getElementById("input");
let output = document.getElementById("output");

document.addEventListener("click", function(evt){
let btnClicked = evt.target.className;
let btnContent = evt.target.textContent
  if (btnClicked === "btn symbol" || btnClicked === "btn number" || btnClicked === "btn equals") {
    btnOptions(btnContent);
  }
});

function btnOptions(btn){

  switch (btn){
    case "C":
      clear();
      break;
    default:
      inputSum(btn);
  };
};

function inputSum(val){
  let sum = input.textContent += val;
  if(val === "="){
    sum = input.textContent.slice(0,-1);
    sum = sum.replace(/x/g, "*");
    //sum = sum.replace(/&divide/i, "/");
    console.log(sum);
    calculation(sum);
  };
};

function calculation(sum){
  let result = eval(sum);
  outputResult(result);
};

function clear(){
  input.textContent = "";
  output.textContent = "";
};

function outputResult(val){
  output.textContent = val;
  input.textContent = "";
};

function multiplyOperator(){
  return btn = "*";
};
