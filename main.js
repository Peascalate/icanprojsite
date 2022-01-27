const fastify = require('fastify')
const autoload = require('fastify-autoload');
const static = require('fastify-static')
const path = require('path')
const app = fastify();
const c = require('./cutil')

app.register(autoload, {
    dir: path.join(__dirname, 'routes')
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public')
});

// Start Node
const start_node = async () => {
  try {
    c.info("Attempting to start WS at port 80")
    await app.listen(80)
    c.success("Started WS successfully!")
  } catch (err) {
    c.error("Failed to start WS!\n Error info:\n\n");
    console.log(err);
  }
}
start_node()