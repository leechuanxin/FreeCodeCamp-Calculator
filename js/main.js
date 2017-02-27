// Buttons
var buttons = (function() {
	// cache DOM
	var button = document.querySelectorAll('button');

	// bind events
	button.forEach(function(el) {
		el.addEventListener("click", function() {
			switch(el.textContent) {
				case "C":
					display.clearAll();
					break;
				case "CE":
					display.clearEntry();
					break;
				case "=":
					display.equal();
					break;
				default:
					display.addInput(el.textContent);
			}
		});
	});
})();

// Display
var display = (function() {
	// cache DOM
	var input = document.querySelector('.input');
	var answer = document.querySelector('.answer');

	// init variables
	var inputText = '';
	var answerText = 0;
	var limitWarning = 'Limit Reached!';
	var maxDisplayLength = 12;

	// init timeout
	var inputWarningTimeout;
	var answerWarningTimeout;

	// render
	renderAnswer();
	renderInput();

	// add input
	function addInput(newInput) {
		renderInput(inputText + newInput);
	};

	// clear entry
	function clearEntry() {
		inputText = inputText.slice(0, inputText.length - 1);
		renderInput();
	}

	// clear input
	function clearAll() {
		inputText = '';
		answerText = 0;

		renderAnswer();
		renderInput();
	};

	// equal
	function equal() {
		// evaluates only if last input entry is number
		if (!isNaN(parseInt(inputText[inputText.length - 1]))) {
			var timesRegex = /x/g;
			var evaluatedAnswer = eval(inputText.replace(timesRegex, "*")).toString();
			var currentDisplay = answer.textContent;
			
			inputText = evaluatedAnswer;

			renderAnswer(evaluatedAnswer);
			

			if (answer.textContent.length > maxDisplayLength) {
				showWarning(answer, currentDisplay);
			}
			else {
				renderInput();
			}
		}
	};

	// hide warning
	function hideWarning(element, elementDisplay) {
		if (element.classList.contains('input')) {
			inputWarningTimeout = setTimeout(function() {
				if (element.classList.contains('warning')) {
					element.classList.remove('warning');
				}

				input.textContent = elementDisplay;
			}, 1000);
		}
		else {
			answerWarningTimeout = setTimeout(function() {
				if (element.classList.contains('warning')) {
					element.classList.remove('warning');
				}

				answer.textContent = elementDisplay;
			}, 1000);
		}
	};

	// render input
	function renderInput(str) {
		var currentInputDisplay = input.textContent;
		var nextInputDisplay = str || inputText;

		if (nextInputDisplay.length <= maxDisplayLength) {
			inputText = nextInputDisplay;
			input.textContent = inputText;
		}
		else if (!input.classList.contains('warning')) {
			showWarning(input, currentInputDisplay);
		}
	};

	// render answer
	function renderAnswer(str) {
		answer.textContent = str || answerText;

		if (answer.textContent == '') {
			answer.textContent += '0';
		}
	};

	// show warning
	function showWarning(element, elementDisplay) {
		if (!element.classList.contains('warning')) {
			element.className += ' warning';
		}

		if (element.classList.contains('input')) {
			clearTimeout(inputWarningTimeout);

			input.textContent = limitWarning.toUpperCase();
		}
		else {
			clearTimeout(answerWarningTimeout);

			answer.textContent = limitWarning.toUpperCase();
		}

		hideWarning(element, elementDisplay);
	};

	return {
		addInput: addInput,
		clearEntry: clearEntry,
		clearAll: clearAll,
		equal: equal 
	};
})();
