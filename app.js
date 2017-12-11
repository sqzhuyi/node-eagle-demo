
const Koa = require("koa");
const app = new Koa();
const eagle = require("node-eagle");
const config = require("./config");

eagle(app, config);

app.listen(config.port, config.host, function(){
    console.log(`app start at ${config.host}:${config.port}`);
});
