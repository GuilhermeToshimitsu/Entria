var koarouter = require('koa-router');
var router = new koarouter();


router.get("/teste",function(ctx,next){
    console.log("Rota Funcional")
});

module.exports =router;