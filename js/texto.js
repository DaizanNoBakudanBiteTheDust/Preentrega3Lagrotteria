let nombrePj;

const arrayTextos = [{
    texto: 1,
    codigo: "<p>¿Podria decirme su nombre por favor?</p>"
},
{
    texto: 2,
    codigo: '<form id="nombrePersonaje"><input id="nombrePersonajePrincipal" type="text"> <input type="submit" value="enviar"></form>',
}, {
    texto: 3,
    codigo: `<p>Excelente <span id="nombreNombre">${nombrePj}</span> mi nombre es Kaine no se si te haz enterado pero aquí han pasado muchas cosas, un Dragón ha estado atacando esta aldea y necesitamos de un valiente guerrero para que nos ayude a derrotarlo, actualmente no contamos con nadie que sepa utilizar un arma, pero veo que tú cargas una, quizás puedas ayudarnos derrotando unos slimes que se encuentran en el pueblo</p>`,
},
{
    texto: 4,
    codigo: `<p>hola ${nombrePj}</p>`,
}
]

localStorage.setItem('textos', JSON.stringify(arrayTextos));
