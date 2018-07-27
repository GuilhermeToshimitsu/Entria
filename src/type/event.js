import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString } from "graphql"
export const Event = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(graphql.GraphQLID)
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