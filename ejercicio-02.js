// Recibo en los parametros los elementos que tienen la clase square y result

let arrayDeCuadradosLaterales = document.querySelectorAll(".square");
let cuadradoQueRecibeColor = document.querySelector(".result");

//Con for Each le doy un evento a cada uno para que recupere el atributo data-color y lo agrege a la clase del cuadrado result
arrayDeCuadradosLaterales.forEach(cuadrado => 
    cuadrado.addEventListener("click", () => {
        let nombreColorCuadrado = cuadrado.getAttribute("data-color");
        cuadradoQueRecibeColor.className = "result " + nombreColorCuadrado;
    })
)