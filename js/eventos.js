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
})