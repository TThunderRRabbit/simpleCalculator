        const currentTextElement = document.querySelector('.currentOutput')
        const previousTextElement = document.querySelector('.previousOutput')
        const numberButtons = document.querySelectorAll('.number')
        const operationButtons = document.querySelectorAll('.operation');
        const deleteAllButton = document.querySelector('.deleteAll');   
        const computeButton = document.querySelector('.equals')
        class Calculator {
            constructor(previousTextElement, currentTextElement) {
                this.previousTextElement = previousTextElement
                this.currentTextElement = currentTextElement
                this.clear()
            }

            clear() {
                this.currentText = ''
                this.previousText = ''
                this.operation = undefined
                this.updateDisplay()
            }

            updateDisplay() {
                this.currentTextElement.innerText = this.currentText
                this.previousTextElement.innerText = this.previousText
            }

            appendNumber(number) {
                this.currentText += number.toString();
                this.updateDisplay();
            }

            chooseOperation(operation) {
                if(this.currentText === '') return
                if(this.previousText !== '') {
                    this.compute();
                }
                this.operation = operation; 
                this.previousText = this.currentText 
                this.currentText = '';
                this.updateDisplay();
            }

            compute () {    
                let result;
                const previous = parseFloat(this.previousText)
                const current = parseFloat(this.currentText)

                if (isNaN(current) || isNaN(previous)) return;

                switch (this.operation) {
                    case '+':
                        result = previous + current
                        break;
                    case '*':
                        result = previous * current
                        break;
                    case '/':
                        result = previous / current
                        break;
                    case '-':
                        result = previous - current
                        break;
                    defult:
                        return;
                }

                this.currentText = result
                this.operation = undefined
                this.previousText = ''
                this.updateDisplay()
            }
        }

        const calculator = new Calculator(previousTextElement, currentTextElement); 

        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                calculator.appendNumber(button.innerText);
            });
        }); 

        operationButtons.forEach(button => {
            button.addEventListener('click', () => {
                calculator.chooseOperation(button.innerText);
            });
        });
        
        computeButton.addEventListener('click', () => {
            calculator.compute();
        })

        deleteAllButton.addEventListener('click', () => {
            calculator.clear();
        })
        

