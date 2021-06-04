const connection = require('../config/connection');

function index(req, res){
    if(connection){
       let sql = "SELECT * FROM carros";
       connection.query(sql, (err, resp) => {
       if(err)
          res.json(err);
       else
          res.json(resp);
       });
    }
 }
 
 function show(req, res){
    if(connection){
       const { id } = req.params;
       let sql = `SELECT * FROM carros WHERE id = ${connection.escape(id)}`;
       connection.query(sql, (err, resp) => {
         if(err)
             res.json(err);
         else{
            let mensaje1 = "";
            if(resp === undefined || resp.length == 0)
             mensaje1 = "Carro no encontrado";
             res.json({data: resp, mensaje: mensaje1});
         }
       });
    }
 }
 
 function create(req, res){
    if(connection){
       const carros = req.body;
 
       //Validaciones
       if(!carros.modelo)
          return res.status(400).send({
             error: true,
             mensaje: "El modelo es necesario"
          });
        if(!carros.marca)
          return res.status(400).send({
             error: true,
             mensaje: "La marca es necesaria"
          });
       if(carros.año.length == 4)
          return res.status(400).send({
             error: true,
             mensaje: "La longitud del año debe ser 4"
          });
 
       let sql = "INSERT INTO carros set ?";
       connection.query(sql,[carros], (err, resp) => {
          if(err)
             res.json(err);
          else
             res.json({data: resp, mensaje: "Persona creada con exito"});
       });
    }
}

module.exports = {
    index,
    show,
    create
 };