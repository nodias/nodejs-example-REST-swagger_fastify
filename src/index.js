// 프레임워크 정의
const fastify = require('fastify')({
    logger: true
});

// Require external modules
const mongoose = require('mongoose');

// 라우트 선언
const routes = require('./routes');

//Import Swagger options
const swagger = require('./config/swagger');

// swagger 등록
fastify.register(require('fastify-swagger'), swagger.options);

//Connect to DB
mongoose.connect(`mongodb://localhost:27017/mycargarage`, {useNewUrlParser: true})
    .then(() => console.log(`MongoDB connected...`))
    .catch(err => console.log(err));

//route 등록
routes.forEach((route) => {
    fastify.route(route)
});

// Run the server
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.swagger();
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1)
    }
};

start();

