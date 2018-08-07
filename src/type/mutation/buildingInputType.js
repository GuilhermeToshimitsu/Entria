import {GraphQLInputObjectType, GraphQLList,GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
export const buildingInputType = new GraphQLInputObjectType({
    name: "BuildingInput",
    fields: ()=>({
        _id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        zip: {
            type: new GraphQLNonNull(GraphQLInt)
        },
       number: {
        type: new GraphQLNonNull(GraphQLInt)
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
    })
})