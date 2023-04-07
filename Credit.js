function Calculate(suma, rata, ani) {
    let dobanda = suma * rata/100 * ani
    return dobanda
 }
    
let button = document.querySelector(".btn"),
suma = document.querySelector(".suma"),
rata = document.querySelector(".rata"),
ani = document.querySelector(".timp");
dobanda = suma * rata * ani,
total = document.querySelector("#total"),
dobandaCredit = 0;
    
button.addEventListener("click", function() {
    if (suma.value == "" || rata.value == "" || ani.value == "") {
        total.textContent = "Datele nu sunt complete"
    } else {
        dobandaCredit = Calculate(Number(suma.value), Number(rata.value), Number(ani.value))
        total.textContent = `Dobanda are o valoare de ${dobandaCredit}`
    }
})





