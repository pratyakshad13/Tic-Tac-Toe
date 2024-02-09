let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");

let turnA=true;//checks for the player's turn

const winPattern=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
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

const checkWinner=()=>{
    for(let pattern of winPattern){
        
    }
}

