
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const decr = document.querySelector("#decr");
const res = document.querySelector("#reset");
const incr = document.querySelector("#incr");

const reset = () => {
    count = 0;    
    document.getElementById("value").innerHTML = count;
}

const increase = () => {
    count += 1;
    document.getElementById("value").innerHTML = count;
}

const decrease = () => {
    count -= 1;
    document.getElementById("value").innerHTML = count;
}
    
decr.addEventListener("click", decrease);
res.addEventListener("click", reset);
incr.addEventListener("click", increase);
value.textContent = count;

