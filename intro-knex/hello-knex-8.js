// hello-knex-8.js
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); // olha a macumba..

// queremos um nome para este cachorro
if(!process.argv[2]){
  console.log("usage: node hello-knex-8.js <nome>");
  process.exit(0);
}

// inserir cachorro
knex("cachorro").insert({
  nomecachorro:process.argv[2],
  marcacachorro:process.argv[3]
},"idcachorro").then((ret) => {
  console.log(`cachorro inserido com a chave ${ret[0]}`);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});

// knex("cachorro").update({
// 	marcacachorro:process.argv[2]
// }).where({
// 	idcachorro:process.argv[3]
// }).then(() => {
// 	//console.log(`convidado ${id} renomeado para ${nome}`);
// 	process.exit(0);
// }).catch((err) =>{
// 	console.log(err);
// 	process.exit(1);
// })