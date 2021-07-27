boton = document.querySelector('.btn');
contenedor = document.querySelector(".contenedor");

colores =["#306b34", "red", "#19028C", "#19323C", "#FAD27B", "rgb(127,107,86)" ];

function cambiaColor(){
    let aleatorio = Math.floor(Math.random() * colores.length);
    contenedor.style.background = colores[aleatorio];
}


boton.addEventListener('click', cambiaColor);