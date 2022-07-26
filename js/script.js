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
    //console.log(dataBase[currentQuestion].question);
  
    
 
}
//function to get the selected element.
 //function elementSelected(){
   
//}

// deselect element once going to the next question.
window.addEventListener('load',(event)=>{
    quiz.style.transform="translateX("+0+")";
});
    

function deselectElement(){
    answersElement.forEach((answer) => {
       answer.checked=false;
    });
}
// calling the getQuestions function to get the first question and responses on loading page.
getQuestions();
submit.addEventListener("click",()=>{
    // if currentQuestion less than the dataBase length we call the function elementSelected and getQuestions.
    
    let storedAnswer;
    answersElement.forEach((answer)=>{
        storedAnswer=answer.id;
        if (answer.checked){
            console.log(storedAnswer);
            console.log(dataBase[currentQuestion].correct);
            if (storedAnswer==dataBase[currentQuestion].correct){
                console.log("correct");
                score++;
            }
            currentQuestion++;
            if (currentQuestion<dataBase.length){
                getQuestions();
            }
            else{
            
                quiz.style.height=40+"vh";
                quiz.style.textAlign="center";
                quiz.style.paddingTop=10+"vh";
                quiz.style.paddingleft=6+"vh";
                quiz.style.paddingRight=4+"vh";

                if (score<=2){
                    quiz.innerHTML=`<h1>Vous venez d'echouer avec un score de <span style="
                    color:red;" >${score}</span> /${dataBase.length}</h2>`;

                }
                else{
                    quiz.innerHTML=`<h1>Vous venez de reussir avec un score de <span style="
                    color:green;" >${score}</span> /${dataBase.length}</h2>`;
                }
            }
        }
        
    })
    
});