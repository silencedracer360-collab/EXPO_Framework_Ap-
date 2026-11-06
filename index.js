


const contador = document.getElementById("contador");

const botonClic = document.getElementById("botonClic");

const tablaRegistros = document.getElementById("tablaRegistros");




let numeroClics = 0;




botonClic.addEventListener("click", function() {

    numeroClics++;


    contador.textContent = numeroClics;



    const fechaActual = new Date();

    const horaExacta = fechaActual.toLocaleTimeString("es-CO", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });





    const nuevaFila = document.createElement("tr");



    const celdaNumero = document.createElement("td");

    const celdaHora = document.createElement("td");



    celdaNumero.textContent = numeroClics;

    celdaHora.textContent = horaExacta;



    nuevaFila.appendChild(celdaNumero);

    nuevaFila.appendChild(celdaHora);



    tablaRegistros.prepend(nuevaFila);

});
