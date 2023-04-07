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