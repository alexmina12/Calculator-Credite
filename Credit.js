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




function Calculate(suma2, rata2, luni) {
    let dobanda2 = suma2 * rata2 * luni * 30/(100 * 360)
    return dobanda2
 }

let button2 = document.querySelector(".buton"),
suma2 = document.querySelector(".suma-depozit"),
rata2 = document.querySelector(".valoare-dobanda"),
luni = document.querySelector(".perioada"),
dobanda2 = suma2 * rata2 * luni * 30/100 * 360,
total2 = document.querySelector("#valoare-totala"),
dobandaDepozit = 0;

button2.addEventListener("click", function() {
    if (suma2.value == "" || rata2.value == "" || luni.value == "") {
        total2.textContent = "Datele nu sunt complete"
    } else {
        dobandaDepozit = Calculate(Number(suma2.value), Number(rata2.value), Number(luni.value))
        total2.textContent = `Dobanda are o valoare de ${dobandaDepozit}`
    }
})
