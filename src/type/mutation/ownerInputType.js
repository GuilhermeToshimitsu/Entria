import { GraphQLInputObjectType,GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
export const ownerInputType = new GraphQLInputObjectType({
    name: "OwnerInput",
    fields:()=> ({
        _id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        type:{
            type: GraphQLInt
        },
    })
})