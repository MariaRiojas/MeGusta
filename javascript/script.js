
var nLikes = [9, 12, 9];

var spans = [
    document.querySelector("#num1"),
    document.querySelector("#num2"),
    document.querySelector("#num3")
];

function like(id) {
    nLikes[id]++;
    spans[id].innerHTML = nLikes[id] + " like(s)";
}