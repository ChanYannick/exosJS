var temperature = [1,2,8,22,12,6,-2]
var tempLength = temperature.length;
var max = 0;
var min = 100;
var moy = 0;

for(var i = 0; i < tempLength; i++) {
  if(max < temperature[i]) {
    var max = temperature[i];
  }
  if(min > temperature[i]) {
    var min = temperature[i];
  }
  var moy = moy + temperature[i];
}
alert("La température la plus élevée cette semaine sera de " + max);
alert("La température la moins chaude de cette semaine sera de " + min);
alert("La température la moins chaude de cette semaine sera de " + moy/tempLength);
