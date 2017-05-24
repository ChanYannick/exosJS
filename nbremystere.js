var nbMyst = Math.floor(Math.random() * 11);
console.log(nbMyst);
while(reponse != nbMyst){
		var reponse = prompt("Trouvez un nombre entre 1 et 10");
    var type = isNaN(reponse);
    console.log(type);
		if(!type){
     		if(reponse < nbMyst){
        	alert('Plus grand');
        }else if(reponse > nbMyst){
          alert('Plus petit'); 
        }
    }else{
    alert("Ceci n\'est pas un nombre");
    }
}
alert("Bravo vous avez trouv\351");