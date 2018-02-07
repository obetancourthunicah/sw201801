var express= require('express');
var router = express.Router();

/*

  /sumar -- post
  /restar -- post
  /multiplicar -- post
  /dividir -- post
  /limpiar -- delete
  /historico  -- get
  /historico/usuario --get
*/

var operaciones = [];
var operacion_struc={"usuario":"","operacion":"","datos":{},"resultado":""};

router.get("/historico", function(req,res,next){
  res.json(operaciones);
}); // fin historico

router.post("/sumar", function(req,res,next){
  var usuario = req.body.usuario;
  var operando1 = parseFloat(req.body.operando1);
  var operando2 = parseFloat(req.body.operando2);
  var resultado = operando1 + operando2;
  var newOperacion = Object.assign({},operacion_struc,
                  {"usuario":usuario,
                  "operacion":"sumar",
                   "datos":{"o1":operando1, "o2":operando2},
                   "resultado": resultado
                 }); //Object.assign
    operaciones.push(newOperacion);
    res.json(newOperacion);
});// sumar

router.delete("/limpiar", function(req,res,next){
  operaciones = [];
  res.json(operaciones);
});// limpiar
// http://localhost:3000/api/historico/obetancourth
router.get('/historico/:usuario', function(req,res,next){
    var usuario = req.params.usuario;
    var operacionesFiltradas = operaciones.filter(function(o,i){
      return o.usuario == usuario;
    });
    res.json(operacionesFiltradas);
}); //historial/usuario

module.exports = router;
