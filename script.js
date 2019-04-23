let numberButtons = document.querySelectorAll('[data-number]');
let operationsButtons = document.querySelectorAll('[data-operator]');
let equalsButton = document.querySelector('[data-equals]');
let deleteButton = document.querySelector('[data-delete]');
let clearButton = document.querySelector('[data-clear]');
let inputTextElement = document.querySelector('#input'); // previous operand
let outputTextElement = document.querySelector('#output'); // current operand
let appendedVal;
let result;


const clear = ()=>{
  inputTextElement.textContent = '';
  outputTextElement.textContent = '';
  operationsButtons = undefined;
};

const deleteInput = ()=>{
  inputTextElement.textContent = inputTextElement.textContent.slice(0,-1);
  return;
};

const appendNumber = (num)=>{
  if (num === '.' && appendedVal.includes('.')) return;
  appendedVal = inputTextElement.textContent += num;
  calculate();
};

const chooseOperation = (operator)=>{
  if (appendedVal.endsWith('+') || appendedVal.endsWith('-') || appendedVal.endsWith('*') || appendedVal.endsWith('/')) return;
  appendedVal = inputTextElement.textContent += operator;
};

const calculate = ()=>{
 result = eval(appendedVal);
 updateDisplay(result);
};

const updateDisplay = (output)=>{
  outputTextElement.innerText = output;
  console.log(inputTextElement.textContent);
};



numberButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    appendNumber(btn.innerText);
  });
});

operationsButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    chooseOperation(btn.innerText);
  });
});

clearButton.addEventListener('click', ()=>{
    clear();
});

equalsButton.addEventListener('click', ()=>{
  inputTextElement.textContent = result;
  outputTextElement.textContent = '';
})

deleteButton.addEventListener('click', ()=>{
  deleteInput();
})

console.log(outputTextElement.innerText);
