const contenedor_texto =  document.getElementById("contenedor_texto");
const tarjeta = document.getElementById("tarjeta");
const contact_link = document.getElementById("contact");
const contact_section = document.getElementById("contact_section");
const contenedor_portfolio = document.getElementById("contenedor_portfolio");
const portfolio_link = document.getElementById("portfolio_link");
const apartados = document.getElementById("apartados");
var cont = 0;

function myMove() {
    let id = null;
    const elements = document.getElementsByClassName("animate");
    let pos = 0;
    let cont;
    clearInterval(id);
    id = setInterval(frame, 12);
    function frame() {
      if (pos == 51) {
        pos--;
        for(cont = 0; cont < elements.length; cont++){
            elements[cont].style.top = pos + '%';
            if(pos == 35){
                pos++;
                for(cont = 0; cont < elements.length; cont++){
                elements[cont].style.top = pos + '%';
                if(pos == 50){
                    clearInterval(id);
                }
                }
            }
        }
        clearInterval(id);
      } else {
        pos++;
        for(cont = 0; cont < elements.length; cont++){
        elements[cont].style.top = pos + '%';
        }

      }
    }
  }

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
        /*strings: [
            'HOLA, SOY JAVIER :) ...<BR> TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB. ESTOY UN POCO OBSESIONADO DE QUE TODO ENCAJE A LA PERFECCIÓN... QUIZÁ EN LA VIDA REAL ESTO NO ES TAN CONVENIENTE, PERO... EN EL DISEÑO Y DESARROLLO DE SITIOS WEB, ES UN PUNTO A FAVOR. <br><br><br><div class="servicios">SERVICIOS<br>- Desarrollo y diseño web personalizado<br>- Posicionamiento SEO<br>- Integración de API\'S</div><div class="valores">VALORES<br>- Compromiso<br>- Coherencia<br>- Paciencia</div><div class="tecnologias">TECNOLOGÍAS<br>- HTML<br>- CCS<br>- JAVASCRIPT<br>- BOOTSTRAP<br>- PHP<br>- YII FRAMEWORK</div>',
        ],*/
        stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
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

    myMove();
    /*const collection = document.getElementsByClassName("apartados-icons");
    for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = "block";*/
}





portfolio_link.addEventListener("click", function(){
    
    apartados.style.display = "none";
    contact_section.style.display = "none";
    contenedor_texto.style.display = "none";
    contenedor_portfolio.style.display = "block";


})

contact_link.addEventListener("click", function(e){
    apartados.style.display = "none";
    contenedor_portfolio.style.display = "none";
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