function checkAnswers ()
{
    var score=0;
    var feedback=[];
    if (document.quest.a1A.checked === false && document.quest.a1B.checked === true && document.quest.a1C.checked === true && document.quest.a1D.checked === true && document.quest.a1E.checked === false && document.quest.a1F.checked === true && document.quest.a1G.checked === false && document.quest.a1H.checked === false && document.quest.a1I.checked === false && document.quest.a1J.checked === false)
    {
        score++;
        feedback.push("Question 1 is Correct");
    }
    else
    {
        feedback.push("Question 1 is wrong... The answers were Halo 2, Halo 3, Halo Wars, Halo Reach");
    }
    if (document.quest.a2.value === 'Rock')
    {
        score++;
        feedback.push("Question 2 is Correct");
    }
    else
    {
        feedback.push("Question 2 is wrong... Rock was the right answer");
    }
    if (document.quest.a3.value === 'Black')
    {
        score++;
        feedback.push("Question 3 is Correct");
    }
    else
    {
        feedback.push("Question 3 is wrong... Black was the right answer");
    }
    if (document.quest.a4.value.toLowerCase() === 'dragon')
    {
        score++;
        feedback.push("Question 4 is Correct");
    }
    else
    {
        feedback.push("Question 4 is wrong... Dragon was the right answer");
    }
    if (document.quest.a5.value.toLowerCase() === 'xbox one')
    {
        score++;
        feedback.push("Question 5 is Correct");
    }
    else
    {
        feedback.push("Question 5 is wrong... Xbox One was the right answer");
    }
    if (document.quest.a6A.checked === true && document.quest.a6B.checked === true && document.quest.a6C.checked === true && document.quest.a6D.checked === false && document.quest.a6E.checked === false && document.quest.a6F.checked === false)
    {
        score++;
        feedback.push("Question 6 is Correct");
    }
    else
    {
        feedback.push("Question 6 is wrong... The answers were Halo Reach, OverWatch, Black Ops 2");
    }

    alert(score);
    alert(feedback);
}