import {GraphQLNonNull,GraphQLInt,GraphQLList} from "graphql"
import {projectionFields} from "../util/mongoProjections";
import {ownerType} from "../type/ownerType" ;
import {ownerModel} from '../models/ownerModel';

export const ownerAll = {
    type: new GraphQLList(ownerType),
    args:{
        first:{
            name:'first',
            type: GraphQLInt
        },
        skip:{
            name:'skip',
            type: GraphQLInt
        }
    },
    description: "query all documents in owner Model",
    resolve: async (root, {first = null, skip = null},_, argsProjection) => {
        try{
            return await ownerModel.find({}).skip(skip).limit(first).lean().exec()
            
        }catch(error){
            return null
        }
    }
}

export const ownerQuery = {
    type: ownerType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    description: "query by id in owner Model",
    resolve: async (root, { _id }, _, argsProjection) => {
        try{
            return await ownerModel.findById(_id).lean().exec()
        }catch(error){
            return null
        }
    }

}