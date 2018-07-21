var koarouter = require('koa-router');
var router = new koarouter();
var mongo = require("../util/mongoFunctions")

//ao inves de usar a funcao de mongoFunctions.js pode ser usado diretamente na rota
var model = require("../models/normalModel")



//os caminhos podem ser os mesmos,  com todos os router.post/get/put/del apontando para ("/")
//fiz assim para ficar mais facil a visualização.
router.post("/create", async function (ctx, next) {
    body = ctx.request.body
    await mongo.create(body).then(results => {
        ctx.response.body = results
    }).catch(error => {
        ctx.throw(500, 'fail to create data')
    });

    //pode ser usada funcao de controle, ou diretamente aqui....,
    //usando funcoes de controle e possivel realizar testes diretamente no arquivo de funcoes
    // modelo = new model({
    //     field0: body.f0,
    //     field1:body.f1,
    //     field2:body.f2,
    // })
    // x = await modelo.save()
    // ctx.response.body = x

});

router.get('/showall', async function (ctx, next) {
    await mongo.readAll().then(results => {
        ctx.body = results

    }).catch(error => {
        ctx.throw(500, 'fail to show data')
    })
    //ou
    //x=  await model.find({}
    // ctx.response.body = x
    // })
})

router.put('/update/:id', async function (ctx, next) {
    await mongo.updateById(ctx.params.id, ctx.request.body).then(results => {
        ctx.response.body = results
    }).catch(error => {
        ctx.throw(500, 'fail to update data')
    })

    //ou 
    //x = await model.findOneAndUpdate({_id:ctx.params.id},{$set:ctx.request.body},{new:true})
    //ctx.response.body = x
})

router.delete('/delete/:id', async function (ctx, next) {
    query = { _id: ctx.params.id }
    await mongo.deleteData(query).then(results => {
        ctx.response.body = results
    }).catch(error => {
        ctx.throw(500, 'fail to update data')
    })

    //ou
    // x = await model.findByIdAndRemove(req.params.id)
    // ctx.response.body = x

})

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