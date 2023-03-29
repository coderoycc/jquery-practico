$(document).ready(()=>{
  // animacion 
  /* $('button').click(()=>{
    //verifica estado y lo oculta o muestra
    $('div').toggle(800) // se le puede dar un tiempo en MS
  }); */

  // DESVANECIMIENTO
  // tambien se puede usar fadeIn() Mostrar
  //  o fadeOut() Ocultar
  // Para ambos fadeToggle()
  // A cada uno se le puede asignar un tiempo

  // DESLISAMIENTO
  // slideUp() para ocultar
  // slideDown() para mostrar
  // slideToggle() para ambos


  // cambiando propiedades
  $('button').click(()=>{
    $('div').animate({
      'margin':'0 auto',
      'width':'250px',
      'height':'500px'
    },1500);
    // Reducir cumulativamente en cada click
    // 'width':'-=50px'
    // Aumentar
    // 'width':'+=5px'
  })

  /* 
    Para ver más animaciones usando otra libreria de jquery.
    Visitar: https://jqueryui.com/
  */
});