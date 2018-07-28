import {GraphQLNonNull,GraphQLInt} from "graphql"
import {projectionFields} from "../util/mongoProjections";
import {normalType} from "../type/normalType" ;
import {normalModel} from '../models/normalModel'

export const simpleQueryN = {
    type: normalType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (root, { _id }, _, argsProjection) => {
        try{
            // const projection = projectionFields(argsProjection)
            // console.log(_id)
            return await normalModel.findById(_id).lean().exec()
        }catch(error){
            return null
        }
    }
    // resolve: (root, { id }, _, argsProjection) => {
    //     return new Promise((resolve, reject) => {
    //         // const projection = projectionFields(argsProjection)
    //             normalModel.findById(id).exec().then(data =>{ resolve(data)
    //             console.log(data)
    //             })
    //         .catch(errors => reject(errors))
    //     })
    //   }
}