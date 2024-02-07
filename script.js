

const counterElement = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const resetBtn = document.getElementById('reset');

let count = 0;




function updateCounter() {
  counterElement.textContent = count;
}

function subtract() {
  count--;
  updateCounter();
}

function reset() {
  count= 0;
  updateCounter();
}

function add() {
  count ++;
  updateCounter();
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
resetBtn.addEventListener('click', reset);


