import {GraphQLInputObjectType, GraphQLList,GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
export const buildingMutationType = new GraphQLInputObjectType({
    name: "BuildingMutation",
    fields: {
       number: {
        type: GraphQLInt
        },
        city: {
            type: GraphQLString
        },
        addr: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        apt: {
            type: GraphQLInt
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
        ownerid:{
            type:GraphQLInt
        }
    }
})