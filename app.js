let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetButtonId");
let newGameBtn=document.querySelector("#newButtonId");
let messageContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;//

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
      
        if(turno)
            {
                box.innerText='o';
                
                turno=false;
            }
            else{
                box.innerText="x";
                turno=true;
            }
            box.disabled=true;
            checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}


const enableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }

}

const showWinner=(winner)=>
    {

        msg.innerText=`Congratulations!!! Mr.${winner}`;
        messageContainer.classList.remove("hide");
        newGameBtn.classList.remove("hide");
    }


const checkWinner=()=>
    {
        for(pattern of winPatterns)
            {
                let pos1val=boxes[pattern[0]].innerText;
                let pos2val=boxes[pattern[1]].innerText;
                let pos3val=boxes[pattern[2]].innerText;
                if(pos1val!=""&&pos2val!=""&&pos3val!="")
                    {
                        if(pos1val===pos2val&&pos2val===pos3val)
                            {
                                console.log("Winner",pos1val);
                                showWinner(pos1val);

                            }
                    }
            }
    }

const resetGame=()=>{
    turno=true;
    enableBoxes();
    messageContainer.classList.add("hide");
    newGameBtn.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);