/*
*  Arquivo   : carro.js
*  Autor     : Alan f Sousa
*  Descricao : modulo de classe Carro
*  Data      : 24/02/2021
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Classe carro
  - Marca
  - Model
  - Versão
  - Ano
  - Quilometragem
  - Tipo de Câmbio
- Preço de venda
 */
var CarroSchema = new  Schema ({
    Marca: String,
    Model: String,
    Versao: String,
    Ano: Number,
    Quilometragem:  Number,
    Tipo_de_Cambio: String,
    Preco_de_Venda: Number
});

module.exports = mongoose.model('Carro',CarroSchema);