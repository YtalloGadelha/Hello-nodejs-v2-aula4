// 20161123000421_adiciona_marca_cachorro.js
exports.up = function(knex, Promise) {
  return knex.schema.table("cachorro", (table) => {
    table.string("marcacachorro");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("cachorro", (table) => table.dropColumn("marcacachorro"));
};
