//select the box and button

let boxes = document.querySelectorAll('.box');  //it will return the node list of box
let resetBtn = document.querySelector('#reset-btn');

// this is used to decide turn of the player - playerX, playerO
let turnO = true; 

//we stores all wining patterns in 2-D array
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

// enter the input to the box one-by-one
boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerHTML= 'O';
            turnO = false;
        }
        else{
            box.innerHTML= 'X';
            turnO = true;
        }
        box.disabled = true;
        box.style.backgroundColor = '#FFDAB3';
        checkWinner();
    });
});

//Check the  winner by checking the winning pattern traversing each pattern in the array and compare it with the player's input pattern 

const checkWinner = () => {
    for(let pattern of winPattern){
        posVal1 = boxes[pattern[0]].innerText;
        posVal2 = boxes[pattern[1]].innerText; 
        posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                console.log("Winner", posVal1);
            }
        }
    }
}

