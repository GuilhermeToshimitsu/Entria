import {GraphQLNonNull,GraphQLInt,GraphQLList} from "graphql"
import {projectionFields} from "../util/mongoProjections";
import {placeModel} from '../models/buildingModel';
import {buildingType} from '../type/buildingType';

export const buildingAll = {
    type: new GraphQLList(buildingType),
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
    description: "query all the documents in placeModel, aka buildings",
    resolve: async (root, {first = null, skip = null},_, argsProjection) => {
        try{
            return await placeModel.find({}).skip(skip).limit(first).lean().exec()
            
        }catch(error){
            return null
        }
    }
}

export const buildingQuery = {
    type: buildingType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    description: "query by id in placeModel, aka buildings",
    resolve: async (root, { _id }, _, argsProjection) => {
        try{
            return await placeModel.findById(_id).lean().exec()
        }catch(error){
            return null
        }
    }

}
