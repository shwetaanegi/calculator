document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                display.innerText = '';
                return;
            }

            if (value === '=') {
                try {
                    currentInput = eval(currentInput);
                    display.innerText = currentInput;
                    resultDisplayed = true;
                } catch (e) {
                    display.innerText = 'Error';
                }
                return;
            }

            if (resultDisplayed) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }

            display.innerText = currentInput;
        });
    });
});
