var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var motCode = "";
var decalage = 2;
var mot = prompt("Donne moi un mot à crypter");
for(var posLettre=0; posLettre < mot.length; posLettre++){
		var lettre = mot[posLettre]; //mot.charAt(i)
    var posLettreAlphabet = alphabet.indexOf(lettre);
    if(posLettreAlphabet >= alphabet.length - decalage){
    	motCode = motCode + alphabet[posLettreAlphabet - (alphabet.length - decalage)];
    }
    else{
    	motCode = motCode + alphabet[posLettreAlphabet+decalage];
    }
    console.log(posLettreAlphabet,lettre,alphabet[posLettreAlphabet+decalage])
    
    /*for(var posAlphabet=0;posAlphabet<alphabet.length;posAlphabet++){
    	var lettreAlphabet = alphabet[posAlphabet];
      if(lettreAlphabet === lettre){
      	motCode = motCode + alphabet[posAlphabet+decalage];
        break;
      }
    }*/
}
console.log("Le mot codé est", motCode);