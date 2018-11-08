const server = require('./server').default;
const routes = require('./routes');

routes.initRoutes();
server.listen(3000, () => {
    console.log('Servidor Up')
});