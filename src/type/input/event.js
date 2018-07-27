const graphql = require("graphql");

module.exports = new graphql.GraphQLInputObjectType({
    name: 'EventInput',
    fields:{
        _id:{
            type: graphql.GraphQLInt,
            required: true
        },
        fields0:{
            type:graphql.GraphQLString,
            required:true
        },
        fields1:{
            type:graphql.GraphQLString
        },
        fields2:{
            type:graphql.GraphQLInt
        }
    }
})