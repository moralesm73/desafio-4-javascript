// Referencia del formulario, de todos los inputs y de los span
// getElementsbyTagName
let formulario = document.getElementsByTagName("form")[0];
let todosLosInput = document.getElementsByTagName("input");
let todosLosSpan = document.getElementsByTagName("span");
let mensajeDeExito = document.getElementById("mensajeDeExito");
const pattern = /^[a-zA-Z ]+$/gim;

// Asignación del evento submit al formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    reset(todosLosSpan, "innerHTML");
    let validacion = 0;

    for (let index = 0; index < todosLosInput.length; index++) {
        console.log("index = "+ index);
        //console.log("validacion = "+validacion);
        console.log(validar(todosLosInput[index].value, index));
        if (validar(todosLosInput[index].value, index)) {
            validacion++
            console.log(validacion);
        }
    }
    console.log(validacion);
    if (validacion == 3) {
        mensajeDeExito.innerHTML = "Mensaje Enviado";
        formulario.reset();
    } else {
        mensajeDeExito.innerHTML = "";
    }
});

// Crear una función que reciba un parámetro para validar que el campo X
// tenga o no tenga contenido
const validar = (texto, indice) => {
    console.log(pattern.test(texto));
    if (texto == "" || texto == " ") {
        todosLosSpan[indice].innerHTML = "Este campo es obligatorio";
        return false;
    } else if(pattern.test(texto)){
        todosLosSpan[indice].innerHTML = "";
        return true;
    }else if(!pattern.test(texto)){
        todosLosSpan[indice].innerHTML = "Debe ingresar solo texto";
        return false;
    }
};

const reset = (arrayParaReiniciar, prototypeParaAplicar) => {
    for (let index = 0; index < arrayParaReiniciar.length; index++) {
        if(prototypeParaAplicar == "innerHTML"){
            arrayParaReiniciar[index].innerHTML = "";
        }else if(prototypeParaAplicar == "value"){
            arrayParaReiniciar[index].value = "";
        }
    }
}