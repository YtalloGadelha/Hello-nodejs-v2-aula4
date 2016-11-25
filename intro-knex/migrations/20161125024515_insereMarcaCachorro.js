
exports.up = function(knex, Promise) {
  return knex.schema.table("cachorroExercicio", (table) => {
    table.string("marcacachorro");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("cachorroExercicio", (table) => table.dropColumn("marcacachorro"));
};