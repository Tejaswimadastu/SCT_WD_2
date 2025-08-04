const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

buttons.forEach(button => {
  if (button.dataset.val) {
    button.addEventListener('click', () => {
      display.value += button.dataset.val;
    });
  }
});

clearBtn.addEventListener('click', () => {
  display.value = '';
});

equalsBtn.addEventListener('click', evaluateExpression);

function evaluateExpression() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.';
  if (validKeys.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === 'Enter') {
    evaluateExpression();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === 'c') {
    display.value = '';
  }
});
