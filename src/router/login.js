var koarouter = require('koa-router');
var router = new koarouter();


router.get("/test",function(ctx,next){
    // console.log("Rota Funcional")
    ctx.response.body = {'msg':'ola'}

});

module.exports =router;