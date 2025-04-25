const base = "rock";
const metal = "scissor";
const dummy = "paper";
    
function getComputerChoice(){
    let choose = Math.floor(Math.random()*3);
    if (choose == 0){
        return base;
    } else if (choose == 1) {
        return metal;
    } else {
        return dummy;
    }
}

function getHumanChoice(){
    const rock = document.querySelector("#rock").addEventListener("click", () => playRound(base));
    const paper = document.querySelector("#paper").addEventListener("click", () => playRound(dummy));
    const scissor = document.querySelector("#scissor").addEventListener("click", () => playRound(metal));
    
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

let tie = "it's a tie";
let won = "you've won";
let lose = "you loss";

function playdecide(manualInput,input){

  if (manualInput == input){
    alert(tie);
    return tie;
  } else if (manualInput == base) {
        if (input == metal){
            alert(won);
            return won;
        } else {
            alert(lose);
            return lose;
        }
  } else if (manualInput == metal) {
        if (input == dummy) {
            alert(won);
            return won;
        } else {
            alert(lose);
            return lose;
        }
  } else if (manualInput == dummy){
        if (input == base){
            alert(won);
            return won;
        } else {
            alert(lose);
            return lose;
        }
  }
}
function playRound(manualInput){

            let hscore = document.querySelector("#hscore");
            let cscore = document.querySelector("#cscore");
        
            let input = getComputerChoice();
            console.log(manualInput);

            console.log(input);
            let result = playdecide(manualInput,input);
                
            if (result == won) {
                humanScore += 1;    
            } else if (result == lose) {
                computerScore += 1;
            }
            hscore.textContent = "your score : " + humanScore;
            cscore.textContent = "computer score : " + computerScore;
            
            round++;
            if (round == 5) {
                setTimeout(() => {
    
            console.log("your score is : " + humanScore);
            console.log("opponent score is : " + computerScore);
            if (humanScore == computerScore){
                alert("close game! it's a tie");
            } else if (humanScore > computerScore){
                alert("congratulations you've won");
            } else {
                alert("haha you loss!");
            }
            
            round = 0;
            humanScore = 0;
            computerScore = 0;
        
            hscore.textContent = "your score : 0";
            cscore.textContent = "computer score : 0";
        }, 50); 
        
            }
}


getHumanChoice();