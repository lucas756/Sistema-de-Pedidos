require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host: 'us-cdbr-east-02.cleardb.com',
  username: 'b37f9704709c60',
  password: '2d9e3514',
  database: 'heroku_0852980fee7f6d5',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
