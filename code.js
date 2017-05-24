//var code = 
var reponse = prompt ("Insérer votre message à coder");
var motcode = "";
for (i=0;i < reponse.length; i++){
	var letter= reponse.charAt(i);
  switch(letter){
  	case"i":
    	motcode = motcode +"1";
      break;
    case"e":
    	motcode = motcode +"1";
      break;  
    case"a":
    	motcode = motcode +"4";
      break;
    case"t":
    	motcode = motcode +"7";
      break;
    case"h":
    	motcode = motcode +"H";
      break;  
    default:
    	motcode = motcode+letter;
  }
}
alert(motcode);
