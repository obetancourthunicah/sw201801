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

module.exports = router;
