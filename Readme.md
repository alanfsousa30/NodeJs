# API RESTful Node + Express + MongoDB

# Escopo
Criar uma API em Node.JS que retorne dados, resolvendo o problema descrito abaixo.

Fique à vontade para explorar todo o seu conhecimento em Javascript ou qualquer outra ferramenta, além de persistir os dados em um banco de dados MongoDB.

Cenário fictício:
Jubscleiton está lançando uma nova plataforma de vendas de carro. Nesta plataforma, desejamos realizar o cadastro de novos carros para o clientes consultarem

Requisitos:
No filtro ser possível pesquisar por cadas atributo do carro e poder ter range de ano e preço

CRUD de Carros:
Criar um gerenciamento onde seja possível Criar, Listar, Editar e Visualizar um carro.
Atributos de um Carro são:
- Marca
- Model
- Versão
- Ano
- Quilometragem
- Tipo de Câmbio
- Preço de venda

Instruções:
- Deve ser utilizado NodeJS e MongoDb
- Crie um README com orientações para a instalação.
- O projeto deve ser entregue através de um ou mais repositórios no github.


## Recursos utilizados no desenvolvimento:

- Node.Js 
- Express.Js 
- Conceito RestFul;
- MongoDb 
- Visual Studio Code
- Mongoose 
- JSON data (para retornar os dados);
- PostMan (testar a API criada);

## Testando a Aplicação no Postman:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman].
Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!

  ROTA                  |     HTTP(Verbo)   |      Descrição        | 
------------------------| ----------------- | --------------------- | 
/api/carros             |       GET         | Selecionar Todos      | 
/api/carros             |       POST        | Criar Produto         | 
/api/carros/:carro_id   |       GET         | Selecionar Por Id     | 
/api/carros/:carro_id   |       PUT         | Atualizar Por Id      |    
/api/carros/:carro_id   |       DELETE      | Excluir Por Id        |

Exemplos

http://localhost:8000/api/carros?Ano=2018&Ano=2019
http://localhost:8000/api/carros?Marca=FORD



## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download 
* **MongoDb**: basta usar  a base de dados do MongoDb em Cloud:


### Instalando as Dependências

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm run dev 
```
ou 

node server.js


Agora, abre a página da aplicação em `http://localhost:8000/api`. E pronto a aplicação será executada de maneira local na sua máquina.        

Att

Alan

