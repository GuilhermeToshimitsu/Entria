import {GraphQLID,GraphQLNonNull,GraphQLSchema} from "graphql"
import projectionFields from "../util/mongoProjections";
import normalType from "../type/normalType" ;
import normalModel from "../models/normalModel";

export const simpleQuery=  new GraphQLSchema({
    type: normalType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: async (root, { id }, _, argsProjection) => {
        try{
            const projection = projectionFields(argsProjection)
            return await normalModel.findById(id).select(projection)
        }catch(error){
            return null
        }
    }
})