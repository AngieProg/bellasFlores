// ----------------CARROUSEL---------------------
//Función que se va a cargar cuando el contenido de nuestra página allá cargado. 
document.addEventListener('DOMContentLoaded',() => {
    //Obtiene todos los elementos que contienen la clase carousel y los guarda dentro de esta variable
    const elementosCarousel = document.querySelectorAll( '.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
});



// --------------------CARROUSEL-----------------------------