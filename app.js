
const koa = require('koa')
const app = new koa();
var koaRouter = require('koa-router');
const router = new koaRouter();
var connection = require("./util/mongoConnection")
connection.initialize();


const login = require("./router/login")
router.use('/login', login.routes())




app.use(router.routes());
app.listen(3030,()=>{
      console.log('Backend Up')
});
