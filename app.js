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
    "To boldly go where no man has gone before. -- Captain James T. Kirk",
    "Computers make excellent and efficient servants, but I have no wish to serve under them. -- Spock",
    "It's not safe out here. It's wondrous, with treasures to satiate desires both subtle and gross; but it's not for the timid. -- Q",
    "If we're going to be damned, let's be damned for what we really are. -- Jean-Luc Picard",
    "A library serves no purpose unless someone is using it. -- Mr. Atoz",
    "Perhaps man wasn't meant for paradise. Maybe he was meant to claw, to scratch all the way. -- James T. Kirk",
    "Madness has no purpose. Or reason. But it may have a goal. -- Spock", 
    "Mister Kim, we're Starfleet Officers. Weird is part of the job. -- Janeway",
    "You know as well as I do that fear exists for one purpose, to be conquered. -- Janeway",
    "You can't just walk away from your responsibilities because you made a mistake. -- Janeway",
    "I dread the day when everyone on this ship agrees with me. -- Janeway"


]

function newQuote() {
    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}


function newShip() { 
  //gets a number between 1 and 12 for the ship images
  let value = Math.floor((Math.random() * 10) + 2);
  document.getElementById("ship-pic").innerHTML = "<img src='./images/ships/ship-" + value +  ".png'>";
}


// live time function for the top
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