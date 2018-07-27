const graphql = require("graphql");
const EventType = require("../type/event")
const EventInputType = require("../type/input/event")
const Event = require("../models/normalModel")

module.exports = {
    type:EventType,
    args:{
        data:{
            id:'data',
            type:new graphql.GraphQLNonNull(EventInputType)
        }
    },
    resolve: (root,{data})=>{
        return new Promise((resolve,reject)=>{
            const newEvent = new Event(data)
            newEvent.save()
            .then(data=>{resolve(data)})
            .catch(errors=>{reject(errors)})

        })
    }
}


