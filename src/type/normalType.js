import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
export const normalType = new GraphQLObjectType({
    name: "Event",
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