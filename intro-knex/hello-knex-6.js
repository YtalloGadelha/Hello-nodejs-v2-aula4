// hello-knex-6.js
"use strict"
const knex = require("./db");

if(!process.argv[2]){
  console.log("usage: node hello-knex-6.js <id>");
  process.exit(0);
}

knex("convidado").select().where({
  idconvidado:process.argv[2]
}).then((ret) => {
  console.log("id\t\tnome")
  let i = ret.length;
  while(i--){
    let conv = ret[i];
    console.log(`${conv.idconvidado}\t\t${conv.nomeconvidado}`);
  }
  process.exit(0);
});
