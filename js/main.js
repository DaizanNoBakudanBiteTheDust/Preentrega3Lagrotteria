// Tercera pre Entrega Gabriel Lagrotteria RPG DE TEXTO para CoderHouse


// Objeto  Enemigos

class enemigo {
    constructor(nombre, hp, ataque) {
        this.nombre = nombre,
            this.hp = hp,
            this.ataque = ataque
    }
    recibiDaño() {
        this.hp = this.hp - 1
    }
}

// Array objeto constructor de enemigos en base a array

const enemigosBasicos = [
    new enemigo("Slime", 5, 1),
    new enemigo("Esqueleto", 10, 2),
    new enemigo("Dragon", 20, 3),
];

// declaro el personaje

const personaje = {
    nombre: nombrePj,
    hp: 100,
    ataque: 1
}

// Historia en array (Se agregan arrays los cuales seran necesarios en la historia)
function historia() {

    // funcion que Selecciona el nombre
    let nombrePj;

    let formularioNombre;

    function seleccionarNombre() {
        formularioNombre = document.getElementById("nombrePersonaje");
        formularioNombre.addEventListener("submit", escucharForm);
    }

    // recibo valores del form

    let escucharForm = (e) => {
        e.preventDefault();
        nombrePersonaje = document.getElementById("nombrePersonajePrincipal");
        let nombre = nombrePersonaje.value; // llama el valor del form
        sessionStorage.setItem('nombrePj', JSON.stringify(nombre));
        let obtenerNombre = JSON.parse(sessionStorage.getItem('nombrePj'));
        nombrePj = obtenerNombre;
        textoVariable();
    }

    // Llamo al submit


    // Agrega click y varra espaciadora

    const barraEspaciadora = (e) => {
        if (e.key === " ") {
            textoVariable();
        }
    };

    // Agrega funciones al texto variable en funcion del click o barra espaciadora

    function agregarFunciones() {
        // Este lo cambia al hacer click llamando la funcion arriba
        textoCambiado.addEventListener("click", textoVariable);

        // Definicion barra espaciadora como constante asi la puedo llamar a necesidad
        window.addEventListener("keydown", barraEspaciadora);

    };

    //Remueve Click y barra espaciadora

    function removerFunciones() {
        textoCambiado.removeEventListener("click", textoVariable);
        window.removeEventListener("keydown", barraEspaciadora);
    }


    // llama al ID del DOM

    let textoCambiado = document.getElementById("textoCambiar");

    // Este Codigo de aqui hacia abajo cambia el texto

    let principioTexto = 0;

    function textoVariable() {
        let textos = JSON.parse(localStorage.getItem('textos'));
        console.log(nombrePj);

        if (principioTexto < textos.length) {
            textos[principioTexto].codigo; // recorre el array de arriba
            textoCambiado.innerHTML = textos[principioTexto].codigo
            principioTexto++;
            console.log(principioTexto);
        };
        if (principioTexto === 2) {
            removerFunciones(); // remueve eventos para que no se ejecuten en el form
            // remuevo el storage para que al recargar no tome el anterior
            seleccionarNombre();
            
        }
        if (principioTexto === 3) {
            dameElNombre = document.getElementById("nombreNombre");
        dameElNombre.innerHTML = nombrePj;
            agregarFunciones(); // los llamo de vuelta para que se ejecuten despues del form
            // agrego un storage que recibe del form del array 2
            principioTexto === 4;
            principioTexto++;
        }
    };

    agregarFunciones();

};

// Cargo la funcion principal despues del html asi no me tira error al traer eventos del form

document.addEventListener("DOMContentLoaded", function() {
    historia();
  });