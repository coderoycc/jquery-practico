$(document).ready(() => {
  $('p').click(()=>{
    $('p').html('Nuevo texto desde evento CLICK')
  });

  // MOUSE
  $('.caja').mouseenter(()=>{
    $('p').css({'background-color':'#202020', 'color':'white'})
  });
  $('.caja').mouseleave(()=> {
    $('p').css('background','#aa20aa')
  })

  // TECLAS (input)
  $('#nombre').keydown(()=>{ // Presionar
    $('#mensaje').css('color','red');
    $('#mensaje').html($('#nombre').val());
  })
  $('#nombre').keyup(()=>{ // soltar
    $('#mensaje').css('color', 'blue');
  });

  // Varios eventos
  $('h1').on('mouseleave click', ()=> {
    alert('Aplicando dos eventos al titulo')
  });

  // Quitar el evento
  $('h1').off('mouseleave')


  /**
   * Objeto event de JQUERY
   */
  $('a').click((event) => {
    console.log(event.pageX,"*" ,event.pageY);
    event.preventDefault() // evitar que se abra un enlace
    console.log(event.which);
    console.log(event.target);
    console.log('No se puede abrir enlace');
  });

  $('input').keyup((event)=>{
    console.log('Has pulsado: ', event.which) // muestra el codigo de tecla
  })

  // Ejecutar un evento sin que lo realice el usuario
  // $('identificador').trigger('evento');
})