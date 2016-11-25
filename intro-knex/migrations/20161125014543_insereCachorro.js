
exports.up = function(knex, Promise) {
  

  return knex.table("cachorroExercicio").insert({

  	nomecachorro:process.argv[3]
  },"idcachorro").then(() => {
  	console.log("cachorro 1 inserido");

    return knex.table("cachorroExercicio").insert({
      
      nomecachorro:process.argv[4]
    },"idcachorro").then(()=> {
      console.log("cachorro 2 inserido");
    });
  });
};

exports.down = function(knex, Promise) {
  	return knex.table("cachorroExercicio").del().where({
  		idcachorro:1
  	}).then(() => {

  	console.log("cachorro 1 deletado");
    return knex.table("cachorroExercicio").del().where({
      idcachorro:2
    }).then(()=>{
      console.log("cachorro 2 deletado");
    });
  });
};
