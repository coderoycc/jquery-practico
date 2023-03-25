// Estilos usando JQUERY

$(document).ready(()=>{
  // Agregamos una clase que cambie sus estilos
  $('a').addClass('amarillo');

  // Quitamos una clase
  $('button').removeClass('fondo');

  // Interacción de añadido y borrado
  $('div.boton').click((event)=>{
    console.log(event.currentTarget); 
    // Elemento actual al que se hizo click
    $(event.currentTarget).toggleClass('boton-rojo')
    $(event.currentTarget).toggleClass('boton-azul')
  })

  // Obtener la propiedad CSS de un elemento
  const color = $('.boton-rojo').css('color');
  console.log("El color de texto es: ", color);
  console.log("El margin-top es: ", $('.boton-rojo').css('margin-top'));
  console.log("El margin-bottom es: ", $('.boton-rojo').css('margin-bottom'));
})