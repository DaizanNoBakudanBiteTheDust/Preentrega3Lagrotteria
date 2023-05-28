// Tercera pre Entrega Gabriel Lagrotteria RPG DE TEXTO para CoderHouse

//Objeto personaje a usar

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
            codigo: "<p>Excelente" + nombrePj + "mi nombre es Kaine no se si te haz enterado pero aqui han pasado muchas cosas, un Dragon ha estado atacando esta aldea y necesitamos de un valiente guerrero para que nos ayude a derrotarlo, actualmente no contamos con nadie que sepa utilzar un arma, pero veo que tu cargas una, quizas puedas ayudarnos derrotando unos slimes que se encuentran en el pueblo</p>",
        }
    ]

    // funcion que Selecciona el nombre
    
    let formularioNombre = document.getElementById("nombrePersonaje");

    let escucharForm = (e) => { 
        e.preventDefault();
        let nombre = e.target.children[0].value;
        nombrePj = nombre;
        console.log(nombre);
        textoVariable();
    }

// Agrega click y varra espaciadora

const barraEspaciadora = (e) => {
    if (e.key === " ") {
        textoVariable();
    }
};

    function agregarFunciones(){
        // Este lo cambia al hacer click llamando la funcion arriba
        textoCambiado.addEventListener("click", textoVariable);
    
        // Definicion barra espaciadora como constante asi la puedo llamar a necesidad
    
        
        window.addEventListener("keydown", barraEspaciadora);
    
    };

    //Remueve Click y barra espaciadora
    
        function removerFunciones(){
            textoCambiado.removeEventListener("click", textoVariable);
                window.removeEventListener("keydown", barraEspaciadora);
        }
    
        // evento para que se pueda apretar barra espaciadora aparte del click
    

    // llama al ID y del DOM

    let textoCambiado = document.getElementById("textoCambiar");

    // Este Codigo de aqui hacia abajo cambia el texto

    let principioTexto = 0;

    function textoVariable() {
        if (principioTexto < arrayTextos.length) {
            arrayTextos[principioTexto].codigo;
            textoCambiado.innerHTML = arrayTextos[principioTexto].codigo
            principioTexto++;
            console.log(principioTexto);
        }
        if (principioTexto === 2) {
            removerFunciones();
            textoCambiado.addEventListener("submit", escucharForm);
            principioTexto++;
            agregarFunciones();
        }
    };

    agregarFunciones();

}; 

document.addEventListener("DOMContentLoaded", function () {
    historia()
});