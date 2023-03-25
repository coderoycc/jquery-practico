$(document).ready(()=>{
  // Obtenemos padre imediato (directo) de P
  let elemento = $('p').parent();
  console.log(elemento);

  // Obtenemos todos los padres 
  let elementos = $(".parrafoLista").parents();
  console.log(elementos);

  console.log($('li').parent());

  // Se puede acceder al arbol DOM usando
  // parents()
  // children()
  // siblings()
  // next() nextAll()
  // eq(indice)
  console.log($('div').eq(1));

  const hijos = $('#contenido01').children()
  console.log(hijos);
  
  // Eliminar elemento
  hijos.remove() // o tambien hijos.empty()
  

})