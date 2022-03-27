const { Sequelize } = require("@sequelize/core");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const db = {};

db.sequelize = sequelize;
db.drop = async () => {
  await db.sequelize.drop();
};
db.sync = async () => {
  await db.sequelize.sync();
};

module.exports = db;
