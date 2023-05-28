document.addEventListener('DOMContentLoaded', function() {
  var container = document.querySelector('.container');
  var calculator = document.createElement('div');
  calculator.className = 'calculator';
  var form = document.createElement('form');
  var displayDiv = document.createElement('div');
  displayDiv.className = 'display';
  var displayInput = document.createElement('input');
  displayInput.type = 'text';
  displayInput.name = 'display';
  displayInput.id = 'display1';
  displayDiv.appendChild(displayInput);
  form.appendChild(displayDiv);

  var buttonValues = [
    ['AC', function() { displayInput.value = ''; }, 'operator'],
    ['DE', function() { displayInput.value = displayInput.value.slice(0, -1); }, 'operator'],
    ['.', function() { displayInput.value += '.'; }, 'operator'],
    ['X', function() { displayInput.value += '*'; }, 'operator'],
    ['7', function() { displayInput.value += '7'; }, 'number'],
    ['8', function() { displayInput.value += '8'; }, 'number'],
    ['9', function() { displayInput.value += '9'; }, 'number'],
    ['/', function() { displayInput.value += '/'; }, 'operator'],
    ['4', function() { displayInput.value += '4'; }, 'number'],
    ['5', function() { displayInput.value += '5'; }, 'number'],
    ['6', function() { displayInput.value += '6'; }, 'number'],
    ['-', function() { displayInput.value += '-'; }, 'operator'],
    ['1', function() { displayInput.value += '1'; }, 'number'],
    ['2', function() { displayInput.value += '2'; }, 'number'],
    ['3', function() { displayInput.value += '3'; }, 'number'],
    ['+', function() { displayInput.value += '+'; }, 'operator'],
    ['0', function() { displayInput.value += '0'; }, 'number'],
    ['00', function() { displayInput.value += '00'; }, 'number'],
    ['=', function() { displayInput.value = eval(displayInput.value); }, 'equal operator']
  ];

  buttonValues.forEach(function(buttonInfo) {
    var button = document.createElement('input');
    button.type = 'button';
    button.value = buttonInfo[0];
    button.className = buttonInfo[2];
    button.addEventListener('click', buttonInfo[1]);
    form.appendChild(button);
  });

  calculator.appendChild(form);
  container.appendChild(calculator);
});
