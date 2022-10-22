/* .js files add interaction to your website */
var factList = [
  "Climate change has caused the average temperature rise around 2 degrees F.",
  "There is more CO2 in the atmosphere than at any time in history.",
  "Climate has played a big part in increasing the frequency of heat waves.",
  "It is estimated that by 2050 200 million people could be relocated because of climate change.",
  "On average the ocean temperature increases 0.14 degrees F every 10 years."];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}