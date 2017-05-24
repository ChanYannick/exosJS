var insultesOne = ["grosse plotte sale" , "ostie de mongol", "maudit niaiseux"];
var insultesTwo = ["criss de tarla", "c\342lice de chien sale", "\351pais dans le plus mince"];
var insultesThree = ["a te d\351rencher la face", "gros colon", "mangeux de marde"];

var numRandomOne = Math.floor(Math.random()*insultesOne.length);
var insulteRandomOne = insultesOne[numRandomOne];
var numRandomTwo = Math.floor(Math.random()*insultesTwo.length);
var insulteRandomTwo = insultesTwo[numRandomTwo];
var numRandomThree = Math.floor(Math.random()*insultesThree.length);
var insulteRandomThree = insultesThree[numRandomThree];

alert("Salut bande de nioufs");
alert("Esp\350ce de "+insulteRandomOne+" de "+insulteRandomTwo+" de "+insulteRandomThree+" !!!");