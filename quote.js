let quotes = [
    "Logic is the beginning of wisdom, not the end. -- Spock",
    "Highly illogical. -- Spock",
    "Live long, and prosper. -- Spock",
    "Things are only impossible until they're not. -- Captain Jean-Luc Picard",
    "Insufficient facts always invite danger. -- Spock",
    "Compassion: that's the one things no machine ever had. Maybe it's the one thing that keeps men ahead of them. -- Dr. McCoy",
    "We prefer to help ourselves. We make mistakes, but we're human--and maybe that's the word that best explains us. -- Captain James T. Kirk",
    "Improve a mechanical device and you may double productivity. But improve man, you gain a thousandfold. -- Khan Noonien Singh",
    "I am pleased to see that we have differences. May we together become greater than the sum of both of us. -- Surak",
    "It is possible to commit no errors and still lose. That is not a weakness. That is life. -- Captain Jean-Luc Picard to Data",
    "I canna' change the laws of physics. -- Montgomery \"Scotty\" Scott",
    "One man cannot summon the future. --Spock \"But one man can change the present!\" -- Kirk",
    "Computers make excellent and efficient servants, but I have no wish to serve under them. -- Spock",
    "You can use logic to justify almost anything. That's its power. And its flaw. - Captain Cathryn Janeway",
    "There is a way out of every box, a solution to every puzzle; it's just a matter of finding it. -- Captain Jean-Luc Picard",
    "To boldly go where no man has gone before. -- Captain James T. Kirk"

]

function newQuote() {
    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}