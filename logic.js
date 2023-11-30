let turn = "X";
let moveTurn = new Audio("img/ting.mp3");
let bgMusic = new Audio("img/music.mp3");
let goMusic = new Audio("img/gameover.mp3");
let gameOver = false;
let pl1 = document.getElementById("pl1");
let pl2 = document.getElementById("pl2");
let pl1img = document.getElementById("pl1img");
let pl2img = document.getElementById("pl2img");
let sideBar = document.getElementById("side-bar");
let body=document.getElementById("body");




// function closeSide() {
//   sideBar.style.right = "-200px";
// }

// function openSide() {
//   sideBar.style.right = "0";
// }

bgMusic.play();
bgMusic.loop=true;
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
player1.style.color = "greenyellow";
player1.style.border = "1px solid greenyellow";

// turn change
function changeTurn() {
  return turn === "X" ? "O" : "X";
}

function checkWin() {
  let Text = document.getElementsByClassName("text");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    // console.log(Text[e[0]].innerText)
    if (
      Text[e[0]].innerText == Text[e[1]].innerText &&
      Text[e[1]].innerText == Text[e[2]].innerText &&
      Text[e[0]].innerText != ""
    ) {
      // alert("Winner")
      if (Text[e[0]].innerText === "X") {
        player1.innerText = "Winner";
        player2.style.color = "white";
        player2.style.border = "1px solid white";
        player1.style.color = "pink";
        player1.style.border = "1px solid pink";
        pl1.style.display = "block";
        pl1img.style.display = "none";
      } else {
        player2.innerText = "Winner";
        player2.style.color = "pink";
        player2.style.border = "1px solid pink";

        player1.style.color = "white";
        player1.style.border = "1px solid white";
        pl2.style.display = "block";
        pl2img.style.display = "none";
      }
      goMusic.play();
      gameOver = true;
      setTimeout(reset, 3000);
    }
  });
}



// main logic with frnd
function vsFriend() {
  sideBar.style.display="none";
  body.style.display="flex";
  let box = document.getElementsByClassName("box");
  Array.from(box).forEach((element) => {
    let boxText = element.querySelector(".text");
    element.addEventListener("click", () => {
      if (boxText.innerText === "") {
        boxText.innerText = turn;
        moveTurn.play();
        turn = changeTurn();
        checkWin();
        if (!gameOver) {
          if (turn === "O") {
            player2.style.color = "greenyellow";
            player2.style.border = "1px solid greenyellow";

            player1.style.color = "white";
            player1.style.border = "1px solid white";
          } else {
            player2.style.color = "white";
            player2.style.border = "1px solid white";
            player1.style.color = "greenyellow";
            player1.style.border = "1px solid greenyellow";
          }
        }
      
      }
    });
  
  });
 

}


function vsComputer() {
  sideBar.style.display="none";
  body.style.display="flex";
  let box1 = document.getElementsByClassName("box");
  Array.from(box1).forEach((element) => {
    let boxText1 = element.querySelector(".text");
    element.addEventListener("click", () => {
      if (boxText1.innerText === "") {
        boxText1.innerText = "X";
        player2.style.color = "greenyellow";
        player2.style.border = "1px solid greenyellow";

        player1.style.color = "white";
        player1.style.border = "1px solid white";
        moveTurn.play();
        checkWin();
        if (!gameOver) {
          setTimeout(compLogic, 500);
          moveTurn.play();
        }
      }
    });
  });
}

// random logic
function compLogic() {
  player2.style.color = "white";
  player2.style.border = "1px solid white";
  player1.style.color = "greenyellow";
  player1.style.border = "1px solid greenyellow";
  let boxText = document.getElementsByClassName("text");
  let computer = true;
  while (computer) {
    let c = 0;
    let rnm = Math.floor(Math.random() * 9);
    if (boxText[rnm].innerText === "") {
      boxText[rnm].innerText = "O";
      break;
    } else {
      Array.from(boxText).forEach((e) => {
        if (e.innerText !== "") {
          c++;
        }
      });
      if (c == 9) {
        computer = false;
      } else {
        computer = true;
      }
    }
  }

  checkWin();
}





// reset logic
function reset() {
  let boxtexts = document.querySelectorAll(".text");
  Array.from(boxtexts).forEach((e) => {
    e.innerText = "";
    turn = "X";
  });
  player1.innerText = "player1:X";
  player2.innerText = "player2:O";
  player1.style.color = "greenyellow";
  player1.style.border = "1px solid greenyellow";
  player2.style.color = "white";
  player2.style.border = "1px solid white";
  gameOver = false;
  pl1.style.display = "none";
  pl2.style.display = "none";
  pl1img.style.display = "block";
  pl2img.style.display = "block";
}





