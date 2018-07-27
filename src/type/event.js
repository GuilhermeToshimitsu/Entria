const graphql = require("graphql")

module.exports = new graphql.GraphQLObjectType({
    name:"Event",
    fields:() => ({
        id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        fields0:{
            type: graphql.GraphQLString
        },
        fields1:{
            type:graphql.GraphQLString
        },
        fields2:{
            type:graphql.GraphQLInt
        }

    })
})