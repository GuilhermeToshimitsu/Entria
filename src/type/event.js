const graphql = require("graphql")

module.exports = new graphql.GraphQLObjectType({
    name:"Event",
    fields:() => ({
        id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        name:{
            type: graphql.GraphQLString
        },
        date:{
            type:graphql.GraphQLString
        }

    })
})