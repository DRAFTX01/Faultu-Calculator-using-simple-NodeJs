// Creating a Faulty Calculator



const prob = Math.random();

function faultycalc (a, oper, b) {
    if (prob > 0.2 && oper == '+') {
        console.log(a + b);
    }
    else if (prob < 0.2 && oper == '+') {
        console.log(a - b);
    }
    else if (prob > 0.2 && oper == '-') {
        console.log(a - b);
    }
    else if (prob < 0.2 && oper == '-') {
        console.log(a / b);
    }
    else if (prob > 0.2 && oper == '*') {
        console.log(a * b);
    }
    else if (prob < 0.2 && oper == '*') {
        console.log(a + b);
    }
    else if (prob > 0.2 && oper == '/') {
        console.log(a / b);
    }
    else if (prob < 0.2 && oper == '/') {
        console.log(a ** b);
    }
    else {
        console.log("Error: Invalid operation. Please use +, -, *, or / in double quotes or Try again.");
}
}

// Example usage
faultycalc();