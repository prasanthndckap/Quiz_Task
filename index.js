const Questions = [{
    id: 0,
    ques: "Which is the longest river in the world?",
    result : "Nile",
    ans: [{ text: "kauveri", isCorrect: false },
    { text: "ganga", isCorrect: false },
    { text: "Nile", isCorrect: true },
    { text: "Amazon", isCorrect: false }
    ]

},
{
    id: 1,
    ques: "Which is india's first super computer?",
    result : "Param8000",
    ans: [{ text: "Para80000", isCorrect: false, isSelected: false },
    { text: "para800", isCorrect: false },
    { text: "param80000", isCorrect: false },
    { text: "Param8000", isCorrect: true }
    ]

},
{
    id: 2,
    ques: "What is the capital of Gujarat",
    result : "gandhinagar",
    ans: [{ text: "surat", isCorrect: false },
    { text: "vadodara", isCorrect: false },
    { text: "gandhinagar", isCorrect: true },
    { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 3,
    ques: "What is the capital of Gujarat",
    result : "gandhinagar",
    ans: [{ text: "surat", isCorrect: false },
    { text: "vadodara", isCorrect: false },
    { text: "gandhinagar", isCorrect: true },
    { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 4,
    ques: "who is the captain of RCB",
    result : "virat",
    ans: [{ text: "Dhoni", isCorrect: false },
    { text: "virat", isCorrect: false },
    { text: "raina", isCorrect: true },
    { text: "Kl rahul", isCorrect: false }
    ]
},
{
    id: 5,
    ques: "who is  the CEO of tesla",
    result : "Elon",
    ans: [{ text: "Elon", isCorrect: false },
    { text: "vadodara", isCorrect: false },
    { text: "gandhinagar", isCorrect: true },
    { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 6,
    ques: "full from of who",
    result : "world health organisation",
    ans: [{ text: "waschingtan health organisation", isCorrect: false },
    { text: "world human oraganisation", isCorrect: false },
    { text: "world health organisation", isCorrect: true },
    { text: "war house organisation", isCorrect: false }
    ]
},
{
    id: 7,
    ques: "Who invented the equals sign (=) ?",
    result : "Robert Recorde",
    ans: [{ text: "robort kiyasaki", isCorrect: false },
    { text: "Robert Recorde", isCorrect: false },
    { text: "ramanujam", isCorrect: true },
    { text: "APJ abdhul kalam", isCorrect: false }
    ]
},
{
    id: 8,
    ques: "What is the capital of Gujarat",
    result : "gandhinagar",
    ans: [{ text: "surat", isCorrect: false },
    { text: "vadodara", isCorrect: false },
    { text: "gandhinagar", isCorrect: true },
    { text: "rajkot", isCorrect: false }
    ]
}

]
let questions = document.querySelector(".questions")
let Answers = document.querySelectorAll(".opt");
let nextBtn = document.querySelector("#next")
console.log(Answers);
let showAns = document.querySelector(".showAnswer");
questions.innerText = Questions[0].ques
Answers[0].innerText = Questions[0].ans[0].text
Answers[1].innerText = Questions[0].ans[1].text
Answers[2].innerText = Questions[0].ans[2].text
Answers[3].innerText = Questions[0].ans[3].text


let counter = 0;
nextBtn.addEventListener("click", (e) => {
    // showAns.innerText = "";
    counter++
    if (counter == Questions.length) {
        showAns.innerText = " Quiz Finished..!";
        showAns.style.color = "rgb(207, 40, 207)";
     setTimeout(()=>{showAns.innerText = "";
        showAns.innerText = ""
    
    },1000)
    }
    e.target = questions.innerText = Questions[counter].ques;
    e.target = Answers[0].innerText = Questions[counter].ans[0].text;
    e.target = Answers[1].innerText = Questions[counter].ans[1].text;
    e.target = Answers[2].innerText = Questions[counter].ans[2].text;
    e.target = Answers[3].innerText = Questions[counter].ans[3].text;
})

for(let i=0; i<Answers.length; i++){
    Answers[i].addEventListener("click",(e)=>{
        let targetEl = e.target.innerText;
        if(targetEl == Questions[counter].result){
            showAns.innerText = "Correct";
            showAns.style.color = " rgb(29, 161, 29)";
            e.target.style.backgroundColor = " rgb(29, 161, 29)";
         
        }
        else{
            showAns.innerText = "wrong";
            showAns.style.color = "rgb(212, 57, 57)";
            e.target.style.backgroundColor = "rgb(212, 57, 57)";
            
        }
        setTimeout(()=>{showAns.innerText = "";
        e.target.style.backgroundColor = "";
    },1000)
    })
}




// for(let i=0; i<Answers.length; i++){
//     Answers[i].addEventListener("click",(e)=>{
//         let targetEl = e.target.innerText;
//         if(targetEl == Questions[counter].ans[1].isCorrect.innerText == "true"){
//             showAns.innerText = "true";
//         }
//         else{
//             showAns.innerText = "False";
//         }
//     })
// }