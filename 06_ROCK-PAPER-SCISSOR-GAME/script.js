const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const leftImage = document.querySelector(".left-img");
const rightImage = document.querySelector(".right-img");
const result = document.querySelector("h2");

const options = document.querySelectorAll(".options");
Array.from(options).forEach((element) => {
  element.addEventListener("click", (e) => {
    leftImage.src = `./images/rock.png`;
    rightImage.src = `./images/rock.png`;
    result.innerText = "Play";

    leftImage.classList.add("animate-left");
    rightImage.classList.add("animate-right");
    
    setTimeout(() => {
      leftImage.classList.remove("animate-left");
      rightImage.classList.remove("animate-right");
      let userChoosed = e.target.name;
      let userChoosedSrc = `./images/${e.target.name}.png`;
      let computerChoosed = computerOption();
      let computerChoosedSrc = `./images/${computerChoosed}.png`;
      console.log("Computer: ", computerChoosed);
      console.log("User: ", userChoosed);
      leftImage.src = computerChoosedSrc;
      rightImage.src = userChoosedSrc;
      if (userChoosed === computerChoosed) {
        console.log("Draw");
        result.innerText = "Match Draw";
      } else if (userChoosed == "rock") {
        if (computerChoosed == "paper") {
          console.log("Computer Wins");
          result.innerText = "Computer Wins";
        } else {
          console.log("User Wins");
          result.innerText = "User Wins";
        }
      } else if (userChoosed == "paper") {
        if (computerChoosed == "scissor") {
          console.log("Computer Wins");
          result.innerText = "Computer Wins";
        } else {
          console.log("User Wins");
          result.innerText = "User Wins";
        }
      } else if (userChoosed == "scissor") {
        if (computerChoosed == "rock") {
          console.log("Computer Wins");
          result.innerText = "Computer Wins";
        } else {
          console.log("User Wins");
          result.innerText = "User Wins";
        }
      }
    }, 1000);
  });
});

function computerOption() {
  let options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}
