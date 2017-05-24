//exo liste de plats

var plats = ["Yakitoris", "Moules", "Spare Ribs au miel", "Soles meuni\351res", "Durums Gyros", "Pizzas sans fromage"];
var longeurPlats= plats.length;
console.log(longeurPlats);
alert("Cette semaine on va manger...");
for(var i= 0; i < longeurPlats; i++)
{
     alert("des " + plats[i]);
}
alert("Miam, miam");