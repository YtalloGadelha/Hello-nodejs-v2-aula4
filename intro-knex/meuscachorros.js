//meuscachorros.js
"use strict"
const knex = require("./db");

// queremos um nome e raça para este cachorro
if(!process.argv[3]){
  console.log("usage: node meuscachorros.js <nome> <raca>");
  process.exit(0);
}

// inserir cachorro
knex("cachorroExercicio").insert({

  nomecachorro:process.argv[2],
  marcacachorro:process.argv[3]

},"idcachorro").then((ret) => {
  console.log(`Cachorro inserido com a chave ${ret[0]}`);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});