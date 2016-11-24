//hello-knex-2.js
//conectando com o bando de dados
const knex = require("./db");

//queremos um nome para este convidado
if(!process.argv[2]){
	console.log("usage: node hello-knex-2.js <nome>");
	process.exit(0);
}

//inserir convidados
knex("convidado").insert({
	nomeconvidado:process.argv[2]
},"idconvidado").then((ret) => {
	//console.log(ret);
	console.log(`convidado inserido com a chave ${ret}`);
	process.exit(0);
}).catch((err) => {
	console.log(err);
	process.exit(1);
});
