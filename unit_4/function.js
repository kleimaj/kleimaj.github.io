var arr = [
    "You win some, you lose some, but you live to fight another day.",
    "For relaxing times, make it Suntory time.",
    "Everything you need is within you.",
    "Find the flow.",
    "Be in the present.",
    "Begin.",
    "The real meditation is how you live your life.",
    "Be happy in the moment, that's enough...",
    "My mama said \"You can't hurry love\"",
    "Send love to those who need it",
];

window.onload = function () {
    var quote = arr[Math.floor(Math.random()*arr.length)];
    document.getElementById('quote').textContent=quote;
}