// Exporta funciones que permitan obtener
// los datos necesarios para la aplicacion
let personas = [
  {"codigo":1, "nombre":"Adriana Celina","genero":"F"},
  {"codigo":2, "nombre":"Josue Eduardo","genero":"M"},
  {"codigo":3, "nombre":"José Adan","genero":"M"},
  {"codigo":4, "nombre":"Julieta María","genero":"F"}
];
/*
  $personas = array(
  array("codigo"=>1,"nombre"=>"Adriana Celina", "genero"=>"F"),
  array("codigo"=>1,"nombre"=>"Adriana Celina", "genero"=>"F"),
  ....
)
*/
let getPersonas = function(){
  return personas;
}

let getPersonasByGenero = function(genero){
  var filterArray = personas.filter(
    function(item,index){
      return item.genero == genero;
    }
  );
  return filterArray;
}

let addPersona = function(nombre, genero){
  var nextCode = personas.length + 1;
  var newPersonas = {"codigo":nextCode,"nombre":nombre, "genero":genero};
  personas.push(newPersonas);
  return personas;
}

module.exports = {
  "getPersonas":getPersonas,
  "getPersonasByGenero":getPersonasByGenero,
  "addPersona":addPersona
};
