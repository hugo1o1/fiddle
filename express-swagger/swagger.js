const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: '用户管理',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js', './routes/users.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);