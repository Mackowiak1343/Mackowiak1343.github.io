function temperatureBug()
{
    var num1 = Number(document.project1.input1.value);
    if (num1 == -459.67)
    {
        document.getElementById('weather').src="img/zero.jpg";
        return "Absolute 0"
    }
    if (num1 == 117)
    {
        document.getElementById('weather').src="img/master_chief.jpg";
        return "Halo";
    }
    if (num1 >= 80)
    {
        document.getElementById('weather').src="img/summer.jpg";
        return "Summer";
    }
    if (num1 >= 70)
    {
        document.getElementById('weather').src="img/fall.jpg";
        return "Fall";
    }
    if (num1 >= 60)
    {
        document.getElementById('weather').src="img/spring.jpg";
        return "Spring";
    }
    if (num1 < 60)
    {
        document.getElementById('weather').src="img/winter.jpg";
        return "Winter";
    }


}


function calorieCounter()
{
    var language = document.getElementById('workList').value;
    var num1 = Number(document.project2.num1.value);

    if (language == 'standing')
    {
        return (num1);
    }
    else if(language == 'walking')
    {
        return num1*5;
    }
    else if(language == 'soccer')
    {
        return num1*20;
    }
    else if(language == 'videoGaming')
    {
        return num1*6;
    }
}







function assignGrade()
{
    var num1 = Number(document.project3.input1.value);
    if (num1 >= 98)
    {
        return "A+";
    }
    else if (num1 >= 94)
    {
        return "A";
    }
    else if (num1 >= 90)
    {
        return "A-";
    }
    else if (num1 >= 88)
    {
        return "B+";
    }
    else if (num1 >= 84)
    {
        return "B";
    }
    else if (num1 >= 80)
    {
        return "B-"
    }
    else if (num1 >= 78)
    {
        return "C+"
    }
    else if (num1 >= 74)
    {
        return "C"
    }
    else if (num1 >= 70)
    {
        return "C-"
    }
    else if (num1 >= 68)
    {
        return "D+"
    }
    else if (num1 >= 64)
    {
        return "D"
    }
    else if (num1 >= 60)
    {
        return "D-"
    }
    else if (num1 >= 58)
    {
        return "F+"
    }
    else if (num1 < 58)
    {
        return "F"
    }
}

function smallToTen(input1,input2)
{
    tenNum = 0;
    numLength= input1.toString().length;

    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1));
        var currentDigit = Math.floor(input1/denominator);
        tenNum = tenNum + currentDigit*Math.pow(input2, numLength-1);
        input1 = input2%denominator;
        numLength--;
    }
    return tenNum;

}
function TentoSmall(input1,input3)
{
    smallNum = "";

    while (input1 > 0)
    {
        smallNum = input1 % input3 + smallNum;

        input1 = Math.floor(input1/input3);
    }
    return smallNum;


}

function converter(input1,input2,input3)
{
    var tempNum = smallToTen(input1,input2);
    var tempnum2 = TentoSmall(Number(tempNum) ,input3);
    return tempnum2;
}