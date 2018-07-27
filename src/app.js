
const koa = require('koa')
const bodyparser = require("koa-bodyparser")
const koaRouter = require('koa-router');

var graphql = require('graphql')
const routergraph = require('koa-graphql')


var connection = require("./connection/mongoConnection")
connection.initialize();

const app = new koa();
const router = new koaRouter();



app.use(async(ctx, next)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
});

const login = require("./router/login")
router.use('/login', login.routes())

const dbteste = require("./router/dbteste")
router.use('/dbteste', dbteste.routes())


const MyGraphQL = require("./schema")

router.all('/graphql',routergraph({
    schema: MyGraphQL,
    graphiql:true,
    pretty:true
}))




app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
      console.log('Backend Up')
});

