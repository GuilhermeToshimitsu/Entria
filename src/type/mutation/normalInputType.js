import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString, GraphQLInputType } from "graphql";
export const normalInputType = new GraphQLInputType({
    name: "EventInput",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        fields0: {
            type: GraphQLString
        },
        fields1: {
            type: GraphQLString
        },
        fields2: {
            type: GraphQLInt
        }

    })
})