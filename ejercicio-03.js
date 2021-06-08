let input01 = document.getElementById("numero01");
let input02 = document.getElementById("numero02");
let verOperaciones = document.getElementById("ingresarNumeros");
let operacion = document.getElementsByClassName("btn-info");
let restart = document.getElementById("restart");
let cambiarOperacion = document.getElementById("otraOperacion");

verOperaciones.addEventListener("click", () => {
    if(input01.value == "" || input02.value == ""){
        document.getElementsByTagName("p")[0].style.display = 'block';
    } else {
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementById("box_01").style.display = 'none';
        document.getElementById("box_02").style.display = 'block';
    }
})

for (let index = 0; index < operacion.length; index++) {
    operacion[index].addEventListener("click", () => {
        if(index == 0){
            let resultado = sumar(+input01.value,+input02.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            document.getElementById("operacion").innerHTML = "suma";
            cambiarOperacion.innerHTML = "Ahora quiero Restar";
            cambiarOperacion.setAttribute("data-operation", "restar");
            cambiarOperacion.style.display = "inline";
            document.getElementById("resultado").innerHTML = resultado;
        } else if(index == 1){
            let resultado = restar(+input01.value,+input02.value);
            document.getElementById("box_02").style.display = 'none';
            document.getElementById("box_03").style.display = 'block';
            cambiarOperacion.innerHTML = "Ahora quiero Sumar";
            cambiarOperacion.setAttribute("data-operation", "sumar");
            cambiarOperacion.style.display = "inline";
            document.getElementById("operacion").innerHTML = "resta";
            if (resultado < 0){
                document.getElementById("resultado").innerHTML = "0";
            }else{
                document.getElementById("resultado").innerHTML = resultado;
            }
        }
    })
}

cambiarOperacion.addEventListener("click", () => {
    let valorAtributo = cambiarOperacion.getAttribute("data-operation");

    if (valorAtributo == "restar"){
        let resultado = restar(+input01.value,+input02.value);
        cambiarOperacion.style.display = "none";
        document.getElementById("operacion").innerHTML = "resta";
        if (resultado < 0){
            document.getElementById("resultado").innerHTML = "0";
        }else{
            document.getElementById("resultado").innerHTML = resultado;
        }
    }else if(valorAtributo == "sumar"){
        let resultado = sumar(+input01.value,+input02.value);
        document.getElementById("operacion").innerHTML = "suma";
        cambiarOperacion.style.display = "none";
        document.getElementById("resultado").innerHTML = resultado;
    }
})

restart.addEventListener("click", () => {
    document.getElementById("box_03").style.display = 'none';
    input01.value = "";
    input02.value = "";
    cambiarOperacion.removeAttribute("data-operation");
    cambiarOperacion.innerHTML = "";
    document.getElementById("box_01").style.display = 'block';
})

function sumar(n1, n2){
    return n1 + n2;
}

function restar(n1, n2){
    return n1 - n2;
}

function dividir(n1, n2){
    return n1 / n2;
}

function producto(n1, n2){
    return n1 * n2;
}

function modulo(n1, n2){
    return n1 % n2;
}