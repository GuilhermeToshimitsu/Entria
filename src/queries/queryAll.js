import {GraphQLNonNull,GraphQLInt,GraphQLList} from "graphql"
import {projectionFields} from "../util/mongoProjections";
import {normalType} from "../type/normalType" ;
import {normalModel} from '../models/normalModel'

export const simpleQueryAll = {
    type: new GraphQLList(normalType),
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
    resolve: async (root, {first = null, skip = null},_, argsProjection) => {
        try{
            // const projection = projectionFields(argsProjection)
            return await normalModel.find({}).skip(skip).limit(first).lean().exec()
            
        }catch(error){
            return null
        }
    }
}