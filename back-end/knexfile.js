/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://djnvcbnu:ZpXGa3qB1RWVCivzlwXpPkz_wGwwsbi7@mouse.db.elephantsql.com/djnvcbnu",
  DATABASE_URL_DEVELOPMENT = "postgres://ebhwquhu:GueLCVrdIgfbB3eZIfhcUGI1ktd9chdP@mouse.db.elephantsql.com/ebhwquhu",
  DATABASE_URL_TEST = "postgres://drbaysev:wpeuowywPUnltvNDsghHlvqVcRxcbTXL@mouse.db.elephantsql.com/drbaysev",
  DATABASE_URL_PREVIEW = "postgres://zvergmgq:UjjCn-8KE5GWwMjNlWhqUYI_cdt6YvIf@mouse.db.elephantsql.com/zvergmgq",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
