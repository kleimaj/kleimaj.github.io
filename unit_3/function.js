var arr = [
    "You win some, you lose some, but you live to fight another day.",
    "For relaxing times, make it Suntory time.",
    "Everything you need is within you.",
    "Find the flow.",
    "Be in the present.",

];

window.onload = function () {
    var quote = arr[Math.floor(Math.random()*arr.length)];
    document.getElementById('quote').textContent=quote;
}