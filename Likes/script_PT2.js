var counter1 = 9
var counter2 = 12
var counter3 = 20

var counter1Element = document.querySelector("#counter1")
var counter2Element = document.querySelector("#counter2")
var counter3Element = document.querySelector("#counter3")

function addLike1() {
    counter1++;
    counter1Element.innerText = counter1 + " like(s)";
    console.log(counter1);
}

function addLike2() {
    counter2++;
    counter2Element.innerText = counter2 + " like(s)";
    console.log(counter2);
}

function addLike3() {
    counter3++;
    counter3Element.innerText = counter3 + " like(s)";
    console.log(counter3);
}