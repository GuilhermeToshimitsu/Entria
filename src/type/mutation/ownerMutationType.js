import { GraphQLInputObjectType,GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
export const ownerMutationType = new GraphQLInputObjectType({
    name: "OwnerMutation",
    fields:()=> ({
        name: {
            type:GraphQLString
        },
        type:{
            type: GraphQLInt
        },
    })
})