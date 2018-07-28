import { GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString,GraphQLInputObjectType } from "graphql";
export const normalInputType = new GraphQLInputObjectType({
    name: "EventInput",
    fields: {
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

    }
})