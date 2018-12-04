/*
Gameplan

Html:
(*) Calculator window for operations to be shown along with result
(*) Number buttons for the calculator
() operator buttons (+,-,*,etc)
(*) '=' button
(*) Reset or clear button
() optional: Backspace button???

Javascript
() function that captures what typed in the calcWindow
() Separate functions that add number, subtract numbers, ect.
 */

function calculate(expression) //ex. expression is 2+5 or 9*6 or 10/5
{
    //'Expression' is a string of everything in your calcWindow
    //Need to extract the first number from 'expression'
    var num = expression;
    var numlength = num.length;

    for (var i = 0; i <= numlength; i++)
    {
        if (expression.substr(i,1) === '+' || expression.substr(i,1) ==='-' || expression.substr(i,1) ==='*' || expression.substr(i,1) === '^' || expression.substr(i,1) === '/') //Thanks to Shivam
        {
            var operator = expression.substr(i,1);
            var firstNum = Number(expression.substr(0,i));
            var secondNum = Number(expression.substr(i+1, numlength-1));
        }
    }
    if (operator === '+')
    {
        return addNums(firstNum,secondNum)
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum)
    }
    else if (operator === '*')
    {
        return multiplicatNums(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum)
    }
    else if (operator === '^')
    {
        return powNums(firstNum, secondNum)
    }
}

function addNums(p1,p2) //addNums expects 2 parameters... p1 and p2
{
    return p1 + p2;
}
function backspace()
{
    var backspace = document.calculator.calcWindow.value.substr(0, document.calculator.calcWindow.value.length - 1); // THANKS TO SHIVAM!!!!!!!!!!!!!!!!!!!!!!!!!
    return backspace;// SHIVAM THE BEST!!!!!!!!!!!!!!
}
function subtractNums(p1, p2)
{
    return p1 - p2;
}
function multiplicatNums(p1, p2)
{
    return p1 * p2;
}
function divideNums(p1, p2)
{
    return p1 / p2;
}
function powNums(p1,p2)
{
    return Math.pow(p1,p2);
}