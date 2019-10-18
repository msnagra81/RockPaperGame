console.log("Congratulations! Your Javascript is working")
var userScore=0;
var compScore=0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result-message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const elementById= (id) => document.getElementById(id);

console.log("User Score: "+userScore_span.textContent);
console.log("Compoter Score: "+compScore_span.textContent);

rock_div.addEventListener("click", ()=>{
	game('r');
});
paper_div.addEventListener("click", ()=>{
	game('p');
});
scissors_div.addEventListener("click", ()=>{
	game('s');
});
function getComputerChoice(){
	var textArray = ['r','p','s'];
	var randomNumber = Math.floor(Math.random()*textArray.length);
	return textArray[randomNumber];
}
const smallUserWord='User'.fontsize(3).sub();
const smallCompWord='User'.fontsize(3).sub();

function convertToWord(choice){
	if(choice === 'r') return "Rock";
	if(choice === 'p') return "Paper";
	return "Scissors"
}
function userWin(userChoice, compChoice){
	userScore++;
	userScore_span.innerHTML=userScore;
	document.getElementById("resultId").innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You Win!`;
	elementById(userChoice).classList.add('green-border');
	setTimeout(function(){elementById(userChoice).classList.remove('green-border')},500);
}
function userLose(userChoice, compChoice){
	compScore++;
	compScore_span.innerHTML=compScore;
	document.getElementById("resultId").innerHTML=`${convertToWord(compChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You Lose!`;
	elementById(userChoice).classList.add('red-border');
	setTimeout(function(){elementById(userChoice).classList.remove('red-border')},500);
}
function draw(userChoice, compChoice){
	document.getElementById("resultId").innerHTML=`${convertToWord(compChoice)}${smallCompWord} same as ${convertToWord(userChoice)}${smallUserWord}. Draw!`;
	elementById(userChoice).classList.add('yellow-border');
	setTimeout(function(){elementById(userChoice).classList.remove('yellow-border')},500);
}
function game(userChoice){
	let compChoice= getComputerChoice();
	console.log("Computer choice: "+compChoice+" | your choice : "+userChoice)
	switch(userChoice+compChoice){
		case "rs":
		case "pr":
		case "sp":
			userWin(userChoice,compChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			userLose(userChoice,compChoice);
			break;
		case "rr":
		case "ss":
		case "pp":
			draw(userChoice,compChoice);
			break;		

	}
}