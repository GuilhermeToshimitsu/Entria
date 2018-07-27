import { GraphQLInputObjectType, GraphQLInt, GraphQLString } from "graphql";
export const EventInput = new GraphQLInputObjectType({
    name: 'EventInput',
    fields: {
        _id: {
            type: GraphQLInt,
            required: true
        },
        fields0: {
            type: GraphQLString,
            required: true
        },
        fields1: {
            type: GraphQLString
        },
        fields2: {
            type: GraphQLInt
        }
    }
})