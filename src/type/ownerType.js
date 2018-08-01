import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
import {buildingType} from "./buildingType"
import {placeModel} from "../models/buildingModel"
export const ownerType = new GraphQLObjectType({
    name: "Owner",
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
        places:{
            type:buildingType,
            resolve(parent,args){

            }
        }
        
    
    })
})


