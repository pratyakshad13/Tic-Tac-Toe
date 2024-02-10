let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newButton=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#winner");


let turnA=true;//checks for the player's turn

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("clicked!");
        if(turnA){ 
            box.innerText="O";
        }
        else {
            box.innerText="X";
        }
        turnA=!turnA;
        box.disabled=true;

        checkWinner();
    });
})

const resetGame=()=>{
    turnA=true;
    enableButton();
    boxes.forEach((box)=>{
        box.innerText="";
    })
}


resetBtn.addEventListener("click",resetGame);




const disableButton=()=>{
    // for(let box of boxes){
    //     box.disabled=true;
    // }
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const enableButton=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}
const showWinner=(Winner)=>{
    
    
    msg.innerText=`Congratulations Winner is ${Winner}`
    msgContainer.classList.remove("hide");
    
}



const checkWinner=()=>{
    for(let pattern of winPattern )//here pattern is bacically the array
    {
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]) boxes[pattern[0]] denotes the button at pattern[0]th position
        let patt1=boxes[pattern[0]].innerText;
        let patt2=boxes[pattern[1]].innerText;
        let patt3=boxes[pattern[2]].innerText;
    
    if(patt1!="" &&patt2!="" &&patt3!=""){
        if(patt1===patt2 && patt2===patt3){
            disableButton();
            showWinner(patt1);
        }
    }
}
}

