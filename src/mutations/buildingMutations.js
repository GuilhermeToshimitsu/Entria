import { GraphQLNonNull, GraphQLSchema, GraphQLObjectType } from "graphql";
import {buildingType} from "../type/buildingType"
import { place} from '../models/buildingModel'
import {buildingInputType} from "../type/mutation/buildingInputType"
import {socket} from '../socket'

export const addPlace = {
    type: buildingType,
    args: {
        data: {
            id: 'data',
            type: new GraphQLNonNull(buildingInputType)
        }
    },

    resolve: async (root, { data }) => {
        try {
            // const newEvent = new normalModel(data)
            // const data = await newEvent.save()
            // console.log(data)
            return new Promise((resolve,reject)=>{
                const newEvent = new place(data)
                newEvent.save().then(res=>{
                    socket.publish('EVENT_CREATED',{eventCreated:data})
                    resolve(res)
                }).catch(errors=>{reject(errors)})
            })
            // return data
        } catch (err) {
            return null
        }
    }
    // resolve: (root, { data }) => {
    //     return new Promise((resolve, reject) => {
    //         const newEvent = new normalModel(data)
    //         newEvent.save().then(data => { resolve(data) }).catch(error => reject(error))
    //     })
    // }


}

