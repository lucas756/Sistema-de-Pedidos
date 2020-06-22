require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
<<<<<<< HEAD
  username: 'postgres',
  password: 'docker',
=======
  username: 'root',
  password: 'root',
>>>>>>> 16df0447fd24e29e645c3db0bfa4675ca23b4388
  database: 'base_pedidos',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
