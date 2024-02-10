let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#winner");


let turnA=true;//checks for the player's turn

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let count=0;
let winnerFound=false;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        count++;
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
        if(count==9 && !winnerFound){
            showTie();
            msgContainer.classList.remove("hide");
        }
    });
})

const resetGame=()=>{
    turnA=true;
    enableButton();
    boxes.forEach((box)=>{
        box.innerText="";
    });
    msgContainer.classList.add("hide");
}


resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);




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

const showTie=()=>{
    msg.innerText=`Oops!! It's a Tie!!`
    msgContainer.classList.remove("hide");
}


newGame.addEventListener("click",()=>{
    resetGame();
    msgContainer.classList.add("hide");
})



const checkWinner=()=>{
    let pos1,pos2,pos3;
    for(let pattern of winPattern )//here pattern is bacically the array
    {

        pos1=pattern[0];
        pos2=pattern[1];
        pos3=pattern[2];
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]) boxes[pattern[0]] denotes the button at pattern[0]th position
         patt1=boxes[pattern[0]].innerText;
         patt2=boxes[pattern[1]].innerText;
         patt3=boxes[pattern[2]].innerText;
          if(patt1!="" &&patt2!="" &&patt3!=""){
            if(patt1===patt2 && patt2===patt3){
                disableButton();
                showWinner(patt1);
                winnerFound=true;
            }
        }
    }
    
}

