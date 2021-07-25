module.exports = function check(str, bracketsConfig) {
    // your solution
    let openBrackets = [];
    for (let brackets of bracketsConfig) {
        openBrackets.push(brackets[0]);
    }
    bracketsConfig.forEach((el) => {
        [el[0], el[1]] = [el[1], el[0]];
    });
    let objPairs = Object.fromEntries(bracketsConfig);

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        if (openBrackets.includes(current)) {
            stack.push(current);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let top = stack[stack.length - 1];
            if (objPairs[current] === top) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
