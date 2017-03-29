import calculator from './calculator.js';

var operation = (x, y, z) => {
    var addResult = calculator.add(x, y);
    var mulResult = calculator.mul(addResult, z);

    return mulResult + 1;
}

export default operation;