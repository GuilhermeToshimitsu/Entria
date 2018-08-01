import { GraphQLList,GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
export const buildingInputType = new GraphQLObjectType({
    name: "Building",
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        zip: {
            type: new GraphQLNonNull(GraphQLInt)
        },
       number: {
        type: new GraphQLNonNull(GraphQLInt)
        },
        lat: {
            type: GraphQLString
        },
        lng:{
            type: GraphQLString
        },
        price:{
            type:GraphQLFloat
        },
    }
})