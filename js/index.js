// Pruebas de Jquery
$(document).ready(function (){
  console.log("Documento listo");
  
  // Lamando a elemento con ID
  // $("#contenido").html("Cambiado desde Script");

  // LLamando elemento por etiqueta
  $("h1").hide();

  // Llamando elemento por etiqueta y clase a la vez
  $("p.miParrafo").hide()
  
  
  
  // Usando temporizador para ejecutar una función
  setTimeout('ejecutaEsto()', 4000);
  
  setTimeout('cambiaTitulo()', 7000); // 3 sengundos despues
   
  // Obtener atrinuto de un elemento
  const atributo = $('a').attr('href');
  console.log("Valor Inicial Atributo de etiqueta A",atributo);
  setTimeout(()=>{
    // Cambiamos atributo de la etiqueta A
    $('a').attr('href','https://cambiadoJquery.com')
    const atributo2 = $('a').attr('href');
    console.log("Valor despues del cambio",atributo2);
  }, 2000);

  // Eliminar atributo
  $('a').removeAttr('href');
  console.log($('a').attr('href'));

  // Obtener una etiqueta
  const etiqueta = $('span').html();
  console.log(etiqueta);
  
  // OBtener el texto de la etiqueta
  const textoEtiqueta = $('span').text();
  console.log(textoEtiqueta)
  
  // Cambiar el texto de la etiqueta
  $('span').text('Nuevo Texto');

  // Añadir texto al final de un elemento (DENTRO)
  $('h3').append(" <-FINAL");

  // Añadir texto al inicio del elemento (DENTRO)
  $('h3').prepend("INICIO->")

  // Añadir texto antes de la etiqueta
  $('h3').before('<h2>AÑADIDO ANTES</h2>')

  // Añadir texto despues de la etiqueta
  $('h3').after('<h4>AÑADIDO DESPUES</h4>')

  // Crear una nueva etiqueta e insertarla al inicio de span
  const nuevo = $('<h1></h1>').text("TITULO SECCION")
  $('span').before(nuevo);
})

const ejecutaEsto = () => {
  $('h1').show()
  console.log("Mostrando Texto");
}
const cambiaTitulo = () => {
  $('h1').html('Este título es uno nuevo');
}