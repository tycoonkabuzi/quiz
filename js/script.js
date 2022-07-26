//here we create a little database which is a list of objects in the array dataBase
const dataBase=[
    {
        question:"Quel est le president de la RDC ?",
        a:"John Bieden",
        b:"Joseph KABILA",
        c:"Felix TSHISEKEDI",
        d:"Vital KAMERHE",
        correct:"c"
    },

    {
        question:"Quel est le nom du concepteur de ce petit Quiz ?",
        a:"Tycoon KABUZI",
        b:"Mark ZUCKERBERG",
        c:"Elon MUSK",
        d:"Johny DRILLE",
        correct:"a"
    },
    {
        question:"Quel est le langage de programmation le plus connu ?",
        a:"C++",
        b:"C#",
        c:"Javascript",
        d:" python",
        correct:"c"
    },
    {
        question:"Quel est le livre le plus sage du monde ?",
        a:"Alchimiste",
        b:"Bible",
        c:"La mort de Johny",
        d:" Coran",
        correct:"b"
    },
    {
        question:"Pour quoi vous croyez en Dieu  ?",
        a:"Parce qu'il est vivant ",
        b:"Parce qu'il m'a sauvé",
        c:"La mort de Johny",
        d:" Pour son amour",
        correct:"b"
    }
];
// here we determine the current question on which we are at
let currentQuestion=0;
let score=0;// we create a score variable which will be storing the number of correct answer we will be getting.
//Get selectors of our page
const quiz= document.querySelector(".main__questions");
const questionElement=document.getElementById("question");
const aElement=document.getElementById("a_text");
const bElement=document.getElementById("b_text");
const cElement=document.getElementById("c_text");
const dElement=document.getElementById("d_text");
const submit=document.getElementById("submit");
const answersElement= document.querySelectorAll(".answers");
// function to get questions from the dataBase
function getQuestions(){
    deselectElement();// calling the deselectElement function decleared down.
    questionElement.innerText=dataBase[currentQuestion].question;
    aElement.innerText=dataBase[currentQuestion].a;
    bElement.innerText=dataBase[currentQuestion].b;
    cElement.innerText=dataBase[currentQuestion].c;
    dElement.innerText=dataBase[currentQuestion].d;
  
    
 
}
//function to get the selected element.
 function elementSelected(){
    let answerStored;
    answersElement.forEach((element)=>{
        //if the element is checked we need to be able to pass to the next question after the submit button.
        if (element.checked){
            answerStored=element.id;// Equalizing our stored id in the variable  answerStored.
            if (answerStored==dataBase[currentQuestion].correct){// if the id is equal to the element selected in the database then we add the score
               score++;
               console.log("correct");
            }
            currentQuestion++;// icreameting the currentQuestion once an elment is checked. 
        }
       
    });
}

// deselect element once going to the next question.
function deselectElement(){
    answersElement.forEach((answer) => {
       answer.checked=false;
    });
}
// calling the getQuestions function to get the first question and responses on loading page.
getQuestions();
submit.addEventListener("click",()=>{
    // if currentQuestion less than the dataBase length we call the function elementSelected and getQuestions.
    if (currentQuestion<dataBase.length){
        elementSelected();
        getQuestions();
    }
    //we are defining a changing color system when the score is less or more than two.
    else {
        if (score<=2){
            quiz.style.color="red";
            
        }
        else{
            quiz.style.color="green";
        }
        quiz.innerHTML=" <h1>You have scored  "+score+"/"+dataBase.length+"</h1> <br> <br> <br>";

    }
    
    
    
});