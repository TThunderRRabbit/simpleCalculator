
x = prompt('x?')
y = prompt('y?')
ope = prompt('operation?')
result = ''

function add() {
    result = parseInt(x) + parseInt(y)
}

function subtract () {
    result = parseInt(x) - parseInt(y)
}

function multiply () {
    result = parseInt(x) * parseInt(y)
}

function divide () {
    result = parseInt(x)/parseInt(y)
}

if (ope == "+") {
    add()
    console.log(result)
}
    else if (ope == "-") {
        subtract()
        console.log(result)
    }
    else if (ope == "*") {
        multiply()
        console.log(result)
    }
    else if (ope == "/" && y == '0') {
        console.log('error')
    }
    else if (ope == "/" && y !='0') {
        divide()
        console.log(result)
    }



