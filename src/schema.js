const graphql = require("graphql");
const queries = require('./queries')
const mutations = require("./mutations")

module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name:"Query",
        fields:queries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})
