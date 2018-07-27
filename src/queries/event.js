const graphql = require("graphql")
const projectionFields = require("../util/mongoProjections")
const EventType = require("../type/event")
const Event = require("../models/normalModel")

module.exports = {
    type: EventType,
    args: {
        id: {
            name: 'id',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: (root, { id }, _, argsProjection) => {
        return new Promise((resolve, reject) => {
            const projection = projectionFields(argsProjection)
            Event.findById(id)
            .select(projection)
            .exec()
            .then(data => resolve(data))
            .catch(errors => { reject(errors) })
        })
    }
}