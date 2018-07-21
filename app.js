
const koa = require('koa')
const app = new koa();
var koaRouter = require('koa-router');
const router = new koaRouter();
var connection = require("./util/mongoConnection")
connection.initialize();




const login = require("./router/login")
router.use('/login', login.routes())

const dbteste = require("./router/dbteste")
router.use('/dbteste', dbteste.routes())


app.use(async(ctx, next)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
      console.log('Backend Up')
});
