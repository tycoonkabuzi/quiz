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
    quiz.style.backgroundColor="white";
});
    

function deselectElement(){
    answersElement.forEach((answer) => {
       answer.checked=false;
    });
}
// calling the getQuestions function to get the first question and responses on loading page.
getQuestions();
submit.addEventListener("click",()=>{
    
    let storedAnswer;
    //creating a loop wich will loop over all the array answersElement and find if anything is checked. 
    answersElement.forEach((answer)=>{
        storedAnswer=answer.id;
        if (answer.checked){
     // if any element is checked, verify if the element checked is equal to the value of dataBase[currentQuestions].correct
            if (storedAnswer==dataBase[currentQuestion].correct){
                console.log("correct");
                //if true add the variable score.
                score++;
            }
            //add the currentQuestion variable whenever time we have checked an element.
            currentQuestion++;
            // if currentQuestion variable is less than the dataBase length, we keep calling the getQuestions function
            if (currentQuestion<dataBase.length){
                getQuestions();
            }
            //Creating some styles once the if is no long satisfied.
            else{
            
                quiz.style.height=40+"vh";
                quiz.style.textAlign="center";
                quiz.style.paddingTop=10+"vh";
                quiz.style.paddingleft=6+"vh";
                quiz.style.paddingRight=4+"vh";
             //create a changing color and style in case the score is less or more than 2 in this case once the score is less than two the color will be red and the below message will display
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