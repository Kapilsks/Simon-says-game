let gameseq = [];
let userseq = [];
let randomcolor = ["red", "green", "blue", "chocolate"];
let start = false;
let level=0;

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game started");
        start = true;
        levelup();
    }
});
let h3 = document.querySelector("h3");
function levelup() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let idx = Math.floor(Math.random() * 3);
    let random = randomcolor[idx];
    gameseq.push(random);
    console.log(gameseq);
    let randombtn = document.querySelector(`.${random}`);
    btnflash(randombtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function btnpress() {
    btnflash(this);
    console.log("Button pressed");
    let color = this.getAttribute("id");
    console.log(color);
    userseq.push(color);
    checkseq(userseq.length - 1);
}

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", btnpress);
}

function checkseq(index) {
    if (gameseq[index] == userseq[index]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerText = `Game over! Your Score is ${level} Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        }, 200);
        reset();
    }
}
function reset() {
    gameseq = [];
    userseq = [];
    start = false;
    level = 0;
}