var count = 1
var countElement = document.querySelector("#counter")

console.log(countElement);

function add1() {
    count++;
    countElement.innerText = count + " like(s)"
    console.log(count);
}

