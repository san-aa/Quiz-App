
var testMarks= document.getElementById("testMarks");
function check()
{
    var score=0;
    var rightAns1= document.getElementById("b1");
    

    if(rightAns1.checked==true)
    {
       
        // alert("Right Answer :)");
        var color=document.getElementById("ques1");
        color.style.backgroundColor="rgb(218, 247, 166)";
        score++;

    }
    else{
        var color=document.getElementById("ques1");
        color.style.backgroundColor="rgb(255, 68, 51)";
        // alert("Wrong Answer :(");
    }

    var rightAns2= document.getElementById("a2");
   

    if(rightAns2.checked==true)
    {
        var color=document.getElementById("ques2");
        color.style.backgroundColor="rgb(218, 247, 166)";
       
        score++;

    }
    else{
        var color=document.getElementById("ques2");
        color.style.backgroundColor="rgb(255, 68, 51)";
        
    }

    var rightAns3= document.getElementById("c3");
   

    if(rightAns3.checked==true)
    {
        var color=document.getElementById("ques3");
        color.style.backgroundColor="rgb(218, 247, 166)";
       
        score++;

    }
    else{
        var color=document.getElementById("ques3");
        color.style.backgroundColor="rgb(255, 68, 51)";
        
    }
    var marks=document.createElement("p");
    var scoreTxt=document.createTextNode("Your score is "+score);
    marks.appendChild(scoreTxt);
    testMarks.appendChild(marks);
}

