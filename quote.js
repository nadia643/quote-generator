let quotes = [
    "Logic is the beginning of wisdom, not the end. -- Spock",
    "Highly illogical. -- Spock",
    "Live long, and prosper. -- Spock",
    "Things are only impossible until they're not. -- Captain Jean-Luc Picard",
    "Insufficient facts always invite danger. -- Spock",
    "Compassion: that's the one things no machine ever had. Maybe it's the one thing that keeps men ahead of them. -- Dr. McCoy",
    "We prefer to help ourselves. We make mistakes, but we're human--and maybe that's the word that best explains us. -- Captain James T. Kirk"
]

let quote = quotes[Math.floor(Math.random() * quotes.length)];

function newQuote() {
    document.getElementById("quote").innerHTML = quote;
}

