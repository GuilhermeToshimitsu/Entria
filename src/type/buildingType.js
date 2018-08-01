import { GraphQLList,GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
import {ownerType} from "./ownerType"
import {ownerModel} from "../models/ownerModel"
export const buildingType = new GraphQLObjectType({
    name: "Building",
    fields:()=> ({
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
        owner:{
            type: owner,
            resolve(parent,args){

            }
        }
    })
})
//
