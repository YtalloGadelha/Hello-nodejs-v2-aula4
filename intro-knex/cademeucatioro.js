//cademeucatioro.js

"use strict"
const knex = require("./db");

// queremos um nome para este convidado
if(!process.argv[2]){
  console.log("usage: node cademeucatioro.js <nome>");
  process.exit(0);
}

knex("cachorroExercicio").select().where({

  nomecachorro:process.argv[2]
}).then(function(ret){

  let i = ret.length;
  while(i--){
    let conv = ret[i];
    console.log(conv);
  }
  process.exit(0);
});