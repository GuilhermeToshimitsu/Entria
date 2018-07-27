var koarouter = require('koa-router');
var router = new koarouter();
var mongo = require("../util/mongoFunctions")

//ao inves de usar a funcao de mongoFunctions.js pode ser usado diretamente na rota
var model = require("../models/normalModel")

router
    .post("/", async function (ctx, next) {
        body = ctx.request.body
        await mongo.create(body).then(results => {
            ctx.response.body = results
        }).catch(error => {
            ctx.throw(500, 'fail to create data')
        });
    });
router
    .get('/', async function (ctx, next) {
        await mongo.readAll().then(results => {
            ctx.body = results
        }).catch(error => {
            ctx.throw(500, 'fail to show data')
        })
    })
router
    .put('/', async function (ctx, next) {
        //nesse caso ao inves de usar o :tag estou usando no body os dados
        await mongo.updateById(ctx.request.body.id, ctx.request.body.updates).then(results => {
            ctx.response.body = results
        }).catch(error => {
            ctx.throw(500, 'fail to update data')
        })
    })
router
    .delete('', async function (ctx, next) {
        query = { _id: ctx.request.body.id }
        await mongo.deleteData(query).then(results => {
            ctx.response.body = results
        }).catch(error => {
            ctx.throw(500, 'fail to update data')
        })
    })





module.exports = router;