const fs = require(`fs`)    
var userlogin = require("../models/userLogin")
var normalModules = require("../models/normalModel")
const Q = require("q")

//esse passo extra faz com que seja possivel fazer mini testes com jest no mongoDB

function create(data){
    const normalData = new normalModules({
      field0:data.f0,
      field1:data.f1,
      field2:data.f2
    });

    return Q(normalData.save())
}

function readById(data){
    return Q(normalModules.findById(data.query.id));
}

function readAll(data){
    normalModules.find({}).lean
    return Q(normalModules.find({}).lean().exec())
}

function readQuery(data){
    return Q(normalModules.find(data.query).lean().exec())
}

function updateOne(f0,data){
    return Q(normalModules.findOneAndUpdate({field0:f0},{$set:data},{new: true}))
}

function updateById(id,data){
    return Q(normalModules.findOneAndUpdate({_id:id},{$set:data},{new:true}).lean().exec())
}


//mais seguro que update, porem tem resposta diferente...
// function patch(data){
//     deferred = Q.defer()
//     normalModules.findById(data.query,(err,dados)=>{
//         dados.set(data.dados);
//        return Q(dados.save())
//     })
// }

function deleteData(query){
    return Q(normalModules.findOneAndRemove(query).lean().exec())
}

function deleteAll(data){
    return Q(normalModules.remove({}))
}

module.exports = {create,readById,readAll,readQuery,updateOne,deleteData,deleteAll,
updateById}