module.exports = {
    HOST: "adatok",
    USER: "root",
    PASSWORD: "password",
    DB: "adatok",
    dialect: "mysql",    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };