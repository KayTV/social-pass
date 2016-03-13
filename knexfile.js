module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/linkedin-passport'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
