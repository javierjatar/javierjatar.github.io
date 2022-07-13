const contenedor_texto =  document.getElementById("contenedor_texto");
const tarjeta = document.getElementById("tarjeta");
const contact_link = document.getElementById("contact");
const contact_section = document.getElementById("contact_section");
var cont = 0;

/*window.addEventListener("resize", function(){
    if(screen.width <= 720){
        contact_section.style.display = "block";
        console.log(screen.width);
    }else if(screen.width > 720){
        contact_section.style.display = "flex";
        console.log(screen.width);
    }
})*/

function escritura(){
    cont++;
    console.log(cont);
    if(cont >= 2){
        contact_section.style.display = "none";
        contenedor_texto.style.display = "block";
        //e.target.removeEventListener(e.type);
    }else{
    contact_section.style.display = "none";
    contenedor_texto.style.display = "block";
    const span = document.createElement("span");
    //span.style.class = "typed";
    document.getElementById('contenedor_texto').appendChild(span);
    document.getElementById('contenedor_texto').firstChild.classList.add("typed");
    const typed = new Typed('.typed', {
        strings: [
            'HOLA, SOY JAVIER :) ...<BR> TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB. ESTOY UN POCO OBSESIONADO DE QUE TODO ENCAJE A LA PERFECCIÓN... QUIZÁ EN LA VIDA REAL ESTO NO ES TAN CONVENIENTE, PERO... EN EL DISEÑO Y DESARROLLO DE SITIOS WEB, ES UN PUNTO A FAVOR. ',
        ],
        stringsElement: '#contenedor-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 30, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });

    }

}

contact_link.addEventListener("click", function(e){
    contenedor_texto.style.display = "none";
    if(screen.width <= 720){
        contact_section.style.display = "block";
        console.log(screen.width);
    }else if(screen.width > 720){
        contact_section.style.display = "flex";
        console.log(screen.width);
    }
    e.target.removeEventListener(e.type, escritura);

})