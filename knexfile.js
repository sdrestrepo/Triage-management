module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'patientsuser',
      password: 'patients',
      database: 'patientsdb',
    },
    useNullAsDefault: true,
  },
};
