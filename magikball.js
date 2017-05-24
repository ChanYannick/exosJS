// MysteryBall exo
var reponses =["C\'est pas faux","Manger est plus important que dormir", "Pourquoi, pourquoi.. j\'ai choisi la pillule bleue?", 
"On n\'est pas le plus fort quand on le croit, mais quand on le sait !", "Moi aussi", 
"Je me disais que j\'allais \351couter vos th\351ories, les rejeter, puis ne garder que la mienne. Comme d\'habitude.", 
" Le diagnostic est plus simple : c\'est un con ", "Pourquoi vous \352tes là ? Vous m\'avez acheté un poney ?" , 
"J\'ai dit que j\'\351tais un drogu\351, j\'ai jamais dit que j\'avais un problème."]

for(var i=0;i<4;i++){
	var mystery = prompt("Que souhaitez-vous savoir?");
  var mysteryLength = mystery.length;
	var lastLetter = mystery.charAt(mysteryLength - 1); 
  var rand = reponses[Math.floor(Math.random() * reponses.length)];
	if(lastLetter == "?"){
  	alert(rand);
  }else{
  	alert("Ca c'est pas une question hein m'sieur! Une question ca se termine par un ?")
  }
}
alert("C'est fini !");