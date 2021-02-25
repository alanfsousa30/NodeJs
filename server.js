
/**
 * Arquivo: server.js     Autor: Alan f Sousa  Data: 24/02/2021 
 */

//Chamadas dos pacotes:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Carro = require('./app/models/carro');

// conexao do mongodb na cloud, instancia de teste
mongoose.connect('mongodb+srv://dbuser:Carro123@cluster0.iesp6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useMongoclient:true, useNewUrlParser: true});

//Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Instância das Rotas
var router = express.Router();



router.use(function(req,res,next){
  console.log("Midleware event");
  next();
});

/*===============================
*          Rotas de API 
================================*/
//get all and post 
router.route('/carros')
/*
* POST
*/
.post(function(req,res){
    var carro = new Carro();
    carro.Marca          = req.body.Marca;
    carro.Model          = req.body.Model;
    carro.Versao         = req.body.Versao;
    carro.Ano            = req.body.Ano;
    carro.Quilometragem  = req.body.Quilometragem;
    carro.Tipo_de_Cambio = req.body.Tipo_de_Cambio;
    carro.Preco_de_Venda = req.body.Preco_de_Venda;

    carro.save(function(error){
       if (error)
           //res.status(204).json();
           res.send('Erro ao salvar dados do carro : '+ error);
       res.json({message: 'Carro cadastrado com sucesso'}); 
         
    });

})

/*
* GET
*/
.get(function(req,res){
  Carro.find( req.query, function(error,carros){
    if (error)
       res.send('Erro ao selecionar todos os dados dos carros : '+ error);
    res.json(carros);   
  });

});

/*
* Rotas por ID
*/
router.route('/carros/:carro_id')
/*
* GET:ID
*/
.get(function (req, res) {
  Carro.findById(req.params.carro_id, function(error, carro) {
      if(error)
          res.send('Id do Carro não encontrado....: ' + error);

      res.json(carro);
  }); 
})
/*
*  PUT
*/
.put(function(req, res) {

  Carro.findById(req.params.carro_id, function(error, carro) {
      if (error) 
          res.send("Id do carro não encontrado....: " + error);

          //Segundo: 
          carro.Marca          = req.body.Marca;
          carro.Model          = req.body.Model;
          carro.Versao         = req.body.Versao;
          carro.Ano            = req.body.Ano;
          carro.Quilometragem  = req.body.Quilometragem;
          carro.Tipo_de_Cambio = req.body.Tipo_de_Cambio;
          carro.Preco_de_Venda = req.body.Preco_de_Venda;

          //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
          carro.save(function(error) {
              if(error)
                  res.send('Erro ao atualizar o carro....: ' + error);

              res.json({ message: 'carro atualizado com sucesso!' });
          });
      });
  })

  /* 
  * DELETE
  */
  .delete(function(req, res) {
      
      Carro.remove({
          _id: req.params.carro_id
          }, function(error) {
              if (error) 
                  res.send("Id do Carro não encontrado....: " + error);

              res.json({ message: 'carro Excluído com Sucesso!' });
          });
      });

//Definindo um padrão das rotas prefixadas: '/api':
app.use('/api', router);


//ativando servidor nodejs
app.listen(8000, function() {
    console.log("Server is running");
  });
