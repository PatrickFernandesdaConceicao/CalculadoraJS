let buttons = document.querySelectorAll(".btn");
let visor = document.querySelector(".visor");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let historic = document.querySelector("#historico");
let limpar = document.querySelector(".limpar")

document.addEventListener("DOMContentLoaded", function() {
    let savedHistory = localStorage.getItem("history");
    if (savedHistory) {
        historic.innerHTML = savedHistory; 
    }
});

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let buttonValue = button.textContent; 
        visor.innerHTML += buttonValue; 
    });
});

equal.addEventListener("click", function() {
    let visorValue = visor.textContent; 
    let total = eval(visorValue); 
    visor.innerHTML = total; 

    let historyEntry = document.createElement("p");
    historyEntry.textContent = `${visorValue} = ${total}`;
    historic.appendChild(historyEntry);

    localStorage.setItem("history", historic.innerHTML);
});
limpar.addEventListener("click", function(){
    localStorage.removeItem("history");
    historic.innerHTML = "";

});
clear.addEventListener("click", function() {
    visor.innerHTML = ""; 
});