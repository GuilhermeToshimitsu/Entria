const graphql = require("graphql");
const queries = require('./queries')

module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name:"Query",
        fields:queries
    })
})