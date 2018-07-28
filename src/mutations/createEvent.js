import { GraphQLNonNull, GraphQLSchema , GraphQLObjectType} from "graphql";
import normalType from "../type/normalType";
import {normalModel} from '../models/normalModel'
import {normalInputType} from '../type/mutation/normalInputType'




export const inputNormalN = ({
    user:{   
         type: normalType,
        args: {
            data: {
                id: 'data',
                type: new GraphQLNonNull(normalInputType)
            }
        }
    },



    // resolve: async (root, { data }) => {
    //     try {
    //         // const newEvent = new normalModel(data)
    //         // const data = await newEvent.save()
    //         // console.log(data)
    //         return new Promise((resolve,reject)=>{
    //             const newEvent = new normalModel(data)
    //             newEvent.save().then(res=>{
    //                 resolve(res)
    //             }).catch(errors=>{reject(errors)})
    //         })
    //         // return data
    //     } catch (err) {
    //         return null
    //     }
    // }
    resolve:(root,{data})=>{
        return new Promise((resolve,reject)=>{
            const newEvent = new normalModel(data)
            newEvent.save().then(data=>{resolve(data)}).catch(error=>reject(error))
        })
    }
})



