import {GraphQLID,GraphQLNonNull,GraphQLSchema,GraphQLObjectType} from "graphql"
import projectionFields from "../util/mongoProjections";
import normalType from "../type/normalType" ;
import normalModel from "../models/normalModel";

export const simpleQueryN = ({
    type: normalType,
    args: {
        id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },

    // resolve: async (root, { id }, _, argsProjection) => {
    //     try{
    //         const projection = projectionFields(argsProjection)
    //         const dados = await normalModel.findById(id).select(projection)
    //         return dados
    //     }catch(error){
    //         return null
    //     }
    // }
    resolve: (root,{id},_,argsProjection) => {
        return new Promise((resolve,reject)=>{
            const projection = projectionFields(argsProjection)
            normalModel.findById(id).select(projection).exec().then(data=>{resolve(data)}).catch(error=>reject(error))
        })
    }
})