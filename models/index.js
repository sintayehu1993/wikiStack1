const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

// const Page = db.define("page", {
//   name: Sequelize.STRING,
//   cute: Sequelize.BOOLEAN,
//   age: Sequelize.INTEGER,
//   bio: Sequelize.TEXT,
// });

// const User = db.define("user", {
//   name: Sequelize.STRING,
//   cute: Sequelize.BOOLEAN,
//   age: Sequelize.INTEGER,
//   bio: Sequelize.TEXT,
// });

module.exports =  { db };
