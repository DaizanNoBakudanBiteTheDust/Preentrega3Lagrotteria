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

let nombrePj;

const personaje = {
    nombre: nombrePj,
    hp: 100,
    ataque: 1
}

// Historia en alertas (Se agregan arrays los cuales seran necesarios en la historia)
function historia() {

    const arrayTextos = [{
            texto: 1,
            codigo: "<p>¿Podria decirme su nombre por favor?</p>"
        },
        {
            texto: 2,
            codigo: '<form id="nombrePersonaje"><input type="text"> <input type="submit" value="enviar"></form>',
        }, {
            texto: 3,
            codigo: `<p>Excelente ${nombrePj} mi nombre es Kaine no se si te haz enterado pero aqui han pasado muchas cosas, un Dragon ha estado atacando esta aldea y necesitamos de un valiente guerrero para que nos ayude a derrotarlo, actualmente no contamos con nadie que sepa utilzar un arma, pero veo que tu cargas una, quizas puedas ayudarnos derrotando unos slimes que se encuentran en el pueblo</p>`,
        }
    ]

    // funcion que Selecciona el nombre

    let formularioNombre;

  function seleccionarNombre() {
    formularioNombre = document.getElementById("nombrePersonaje");
    formularioNombre.addEventListener("submit", escucharForm);
  }

    let escucharForm = (e) => {
        e.preventDefault();
        inputs = formularioNombre.children;
        let nombre = inputs[0].value; // llama el valor del form
        nombrePj = nombre;
        personaje.nombre = nombrePj;
        console.log(nombrePj);
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

    let botonSubmit = textoCambiado.querySelector("input[type=submit]");
    // Este Codigo de aqui hacia abajo cambia el texto

    let principioTexto = 0;

    function textoVariable() {
        if (principioTexto < arrayTextos.length) {
            arrayTextos[principioTexto].codigo;
            textoCambiado.innerHTML = arrayTextos[principioTexto].codigo
            principioTexto++;
            console.log(principioTexto);
        };
        if (principioTexto === 2) {
            removerFunciones();
            principioTexto === 3;
            seleccionarNombre();
        };

    };

    agregarFunciones();

};

// Cargo la funcion principal despues del html asi no me tira error al traer eventos del form

document.addEventListener("DOMContentLoaded", function () {
    historia()
});