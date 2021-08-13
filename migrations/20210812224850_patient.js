/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  const createTable = `
            CREATE TABLE patients (
              id SERIAL PRIMARY KEY,name varchar(255) NOT NULL,lastName varchar(255) NOT NULL, identification bigint NOT NULL, priority bigint NOT NULL, entry_time timestamp NOT NULL)
          `;
  return knex.raw(createTable);
};
exports.down = function (knex, Promise) {
  const dropQuery = 'DROP TABLE patients CASCADE';
  return knex.raw(dropQuery);
};
