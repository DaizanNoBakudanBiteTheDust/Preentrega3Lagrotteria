// Segunda pre Entrega Gabriel Lagrotteria RPG DE TEXTO para CoderHouse

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

// Historia en alertas
function historia() {
    alert("Bienvenido al RPG de Texto, en este viaje usaremos la imaginacion para tratar de meternos en un mundo plagado de monstruos, lo ideal seria que nos conocieramos mejor antes de continuar..");

    // Selecciona el nombre

    let nombrePj = prompt("¿Podria decirme su nombre por favor?");

    //Objeto personaje a usar
    const personaje = {
        nombre: nombrePj,
        hp: 100,
        ataque: 1
    }

    //Si no escribe nada repite hasta que lo haga

    while (nombrePj === "") {
        alert("disculpa no te he oido bien..");
        nombrePj = prompt("¿Podria decirme su nombre por favor?");
    }


    // Continua Historia en alerta

    alert("Excelente " + nombrePj + " mi nombre es Kaine no se si te haz enterado pero aqui han pasado muchas cosas, un Dragon ha estado atacando esta aldea y necesitamos de un valiente guerrero para que nos ayude a derrotarlo, actualmente no contamos con nadie que sepa utilzar un arma, pero veo que tu cargas una, quizas puedas ayudarnos derrotando unos slimes que se encuentran en el pueblo");

    alert("Cuidado " + nombrePj + " Ahi viene un Slime...");

    // Funcion de batalla la cual repetiremos a lo largo del codigo
 
    function batalla(enemigosBasicos) {
        slime = enemigosBasicos.find(enemigo => enemigo.nombre === "Slime"); // Busca si existe el slime en los enemigos
        slime.hp = slime.hp;
        batallaSlime = prompt("Ahi viene un slime, ¿deseas atacar o defender?"); // pregunta de ataque o defensa ejecuta en base al switch

        while (batallaSlime === "") {
            alert("Eso no es una accion"); // Ejecuta esta alerta siempre y cuando no se seleccione atacar o defender
            break;
        }
        for (hp = slime.hp; hp > 0; hp--) { // Recorre el For hasta acabar con la vida del enemigo
            switch (batallaSlime.toLowerCase()) {
                case "atacar": // Esto resta 1 de hp al Slime y al Personaje hasta llegar a 0 en este caso llegaria primero el slime
                    slime.hp = slime.hp - 1;
                    personaje.hp = personaje.hp - 1;
                    alert("El HP del slime se ha reducido en 1, su HP actual es " + slime.hp);
                    alert("El slime te ha atacado tu hp se ha reducido tu HP Actual es " + personaje.hp);
                    break;
                case "defender": // Esto resta La mitad del daño y el slime no recibe daño
                    slime.hp = slime.hp - 0;
                    personaje.hp = personaje.hp - 0.5;
                    alert("El slime te ha atacado tu hp se ha reducido tu HP Actual es " + personaje.hp);
                    break;
                default: // Esto se asegura de que elejiste atacar o defender
                    slime.hp = slime.hp - 0;
                    personaje.hp = personaje.hp - 0;
                    alert("Eso no es una accion");
                    break;
            }

            // Si la vida del Slime llega a 0 se gana la batalla

            if (slime.hp === 0) {
                alert("Excelente " + nombrePj + " Te curare la vida para que puedas continuar con tu camino, por favor derrota al dragon");
                terminoBatalla = true;
                personaje.ataque = personaje.ataque + 1;

                slime.hp = + 5;
                break;
            } else {
                batallaSlime = prompt("¿deseas atacar o defender?"); // Repite la pregunta hasta llegar a O
                while (batallaSlime === "") {
                    alert("Eso no es una accion"); // Ejecuta esta alerta siempre y cuando no se seleccione atacar o defender
                }
            }
        }
    }


    batalla(enemigosBasicos);

    alert("Cuidado " + nombrePj + " se acerca otro enemigo");

    // Esta funcion entrega un enemigo Aleatorio PD: solo para usar math y darle mas dinamismo a este juego por ahora

    let enemigoRandom; // dejo variable que llamo abajo abierta para que se mantengan valores en la funcion venidera

    function batallaAleatoria(enemigosBasicos) {  // este codigo lo puedo llamar cuantas veces quiera y va a entregar valores distintos
        personaje.hp = 100;
        enemigoRandom = enemigosBasicos[Math.floor(Math.random() * enemigosBasicos.length)]; // Busca un enemigo del array de enemigos
        enemigoRandom.nombre = enemigoRandom.nombre; // Llama al nombre enemigo
        enemigoRandom.hp = enemigoRandom.hp; // Llama al Hp del enemigo
        enemigoRandom.ataque = enemigoRandom.ataque; // Llama atq del enemigo
        batallaRandom = prompt("Ahi viene " + enemigoRandom.nombre + " ¿deseas atacar o defender?"); // pregunta de ataque o defensa ejecuta en base al switch

        while (batallaRandom === "") {
            alert("Eso no es una accion"); // Ejecuta esta alerta siempre y cuando no se seleccione atacar o defender
        }
        for (hp = enemigoRandom.hp; hp > 0; hp--) { // Recorre el For hasta acabar con la vida del enemigo
            switch (batallaRandom.toLowerCase()) {
                case "atacar": // Esto resta hp al Enemigo y al Personaje hasta llegar a 0 en este caso llegaria primero el slime
                    enemigoRandom.hp = enemigoRandom.hp - personaje.ataque;
                    personaje.hp = personaje.hp - enemigoRandom.ataque;
                    alert("El HP del " + enemigoRandom.nombre + " se ha reducido en " + personaje.ataque + " su HP actual es " + enemigoRandom.hp);
                    alert("El " + enemigoRandom.nombre + " te ha atacado tu hp se ha reducido tu HP Actual es " + personaje.hp);
                    break;
                case "defender": // Esto resta La mitad del daño y el slime no recibe daño
                    enemigoRandom.hp = enemigoRandom.hp - 0;
                    personaje.hp = personaje.hp - enemigoRandom.ataque * 0.5;
                    alert("El HP del " + enemigoRandom.nombre + " se ha reducido en" + personaje.ataque + " su HP actual es " + enemigoRandom.hp);
                    break;
                default: // Esto se asegura de que elejiste atacar o defender
                    enemigoRandom.hp = enemigoRandom.hp - 0;
                    personaje.hp = personaje.hp - 0;
                    alert("Eso no es una accion");
                    break;
            }

            // Si la vida del Enemigo llega a 0 se gana la batalla

            if (enemigoRandom.hp === 0) {
                alert("Excelente " + nombrePj + " Te curare la vida para que puedas continuar con tu camino");
                terminoBatalla = true;
                personaje.ataque = personaje.ataque * 2;
                personaje.hp === 100;
                break;
            } else {
                batallaRandom = prompt("Ahi viene " + enemigoRandom.nombre + " ¿deseas atacar o defender?"); // Repite la pregunta hasta llegar a O
                while (batallaRandom === "") {
                    alert("Eso no es una accion"); // Ejecuta esta alerta siempre y cuando no se seleccione atacar o defender
                }
            }
        }


    }

    batallaAleatoria(enemigosBasicos);

}


historia()