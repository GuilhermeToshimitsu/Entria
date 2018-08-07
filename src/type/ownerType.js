import { GraphQLList,GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString ,GraphQLFloat} from "graphql";
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
            type:new GraphQLList(buildingType),
            resolve: async (parent,args)=>{
                return await placeModel.find({ownerid:parent._id}).exec()
                
            }
        }
    })
})


