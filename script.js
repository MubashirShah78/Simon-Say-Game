let gameSaq = [];
let userSaq = [];

let start = false;
let lvl = 0;

let btns = ["yellow", "green", "red", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (start == false) {
        // console.log("your game is start now");
        start = true;
        lvlUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");

    }, 250);
}


function lvlUp() {
    userSaq =[];
    lvl++;
    h2.innerText = `level ${lvl}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSaq.push(randColor);
    console.log(gameSaq);

    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)

    btnFlash(randBtn);

}
function CheckSaq(idx) {
    if(userSaq[idx]=== gameSaq[idx]){
        if(userSaq.length === gameSaq.length){
            setTimeout(lvlUp, 1000);
        }
    }else{
        h2.innerHTML = `GameOver Your Score was <b> ${lvl} </b>  <br></br> Press Any Key To RESTART The Game`;
        let body = document.querySelector("body");
        body.style.backgroundColor ="red";
        setTimeout( function(){
            body.style.backgroundColor ="white" ;
        }, 250)
        reset();
    }
}

function btnPress() {
    // console.log("batton press");
    btnFlash(this);
    let userColor = this.getAttribute("id");
    console.log(userColor);
    userSaq.push(userColor);

    CheckSaq(userSaq.length-1);
    
}



let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}


function reset() {
    start = false;
    gameSaq = [];
    userSaq = [];
    lvl = 0;

    
}
