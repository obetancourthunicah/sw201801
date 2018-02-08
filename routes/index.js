var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orlando' });
});

router.get('/data', function(req, res, next) {
  res.render('index', { title: 'Data Uri' });
});

router.get('/porsi', function(req, res, next) {
  res.render('index', { title: 'Porsi Uri' });
});

router.get('/ruta', function(req,res,next){
  res.render('newview',
                {"nombre":"Orlando",
                "correo":"obetancourthunicah@gmail.com"
              });
});

// var ejemplo2_handler = function(req,res,next){
//   res.render("ejemplo2",{});
// }
//
// router.get('/ejemplo2', ejemplo2_handler); // end get
var nombres = [];
router.get('/ejemplo2', function(req,res,next){
  res.render("ejemplo2",{"history":nombres});
}); //end get

router.post('/ejemplo2', function(req,res,next){
  nombres.push(req.body.txtNombre);
  res.render("ejemplo2",{"txtNombre":req.body.txtNombre, "history":nombres});
});

//aqui crearemos las dos rutas
// son dos ya que a diferencia de php o otros
// lenguages de server side scripting
// en node.js debemos diferencia como se
// menjará para cada tipo de método http
// El comun solo para consulta es el método get

router.get('/formulario', function(req,res,next){
    //este código manerar el método get
    // datos es lo que en javascript se
    // conoce como un objeto javascript
    // o en sus siglas un JSON.
    //  {} este es un json vacio totalmente válido
    // la estructura básica de un JSON es
    // la llave entre comillas dobles
    // y el valor (puede ser texto, numerico o booleano)
    // luego cada par de llave valor es separado por coma
         var datos = {
      "txtNombre":"",
      "Mchecked":"checked=checked",
      "FChecked":"",
      "resultado":""
    };
    // res.render es la funcion que devuelve la
    // plantilla de la carpeta view
    // y datos son los valores que seran
    // incorporados en los {{ }}  en la plantilla
    res.render('formulario', datos);
});

router.post('/formulario', function(req,res,next){
  //este código manejara el metodo post de la misma
  //ruta que la anterior.
  // Para capturar la data que viene del Formulario
  // Express nos ofrece dentro del objeto req
  // un objeto json con los valores
  console.log(req.body); // esto lo observaremos
  // en la terminal done se corrió nodemon o
  // npm start.
  // { txtNombre: 'Hola Mundo', genMasculino: 'F' }

  var datos = {
"txtNombre":req.body.txtNombre,
"Mchecked":(req.body.genMasculino && true)?"checked=checked":"",
"FChecked":(req.body.genFemenino && true)?"checked=checked":"",
"resultado":"Hola " + req.body.txtNombre
};
  res.render('formulario', datos);

});



/// -----------------------------------------
var personasModel = require("../models/personas.js");
router.get('/personas', function(req,res,next){
  res.render('personas', {"personas":personasModel.getPersonas()});
});//get personas/

router.get('/personas_masculino', function(req,res,next){
  res.render('personas', {"personas":personasModel.getPersonasByGenero("M")});
});//get personas/

router.get('/personas_femenino', function(req,res,next){
  res.render('personas', {"personas":personasModel.getPersonasByGenero("F")});
});//get personas/

router.get('/personas/json', function(req,res,next){
  //res.render('personas', {"personas":personasModel.getPersonas()});
  res.json(personasModel.getPersonas());
});//get personas/

// get consultas
// post agregar nuevos datos
// put modificar datos existentes
// delete eliminar datos existentes

router.post('/personas/new', function(req,res,next){
  var nombre = req.body.nombre;
  var genero = req.body.genero;
  res.json(personasModel.addPersona(nombre, genero));
});//personas/new


router.get('/albums', function(req,res,next){
  var data = {};
  data.albums = [];
  for(var i = 1 ; i<=100 ; i++){
    data.albums.push(i);
  }
  res.render('albums', data);
});

module.exports = router;
