import { GraphQLNonNull, GraphQLSchema } from "graphql";
import normalType from "../type/normalType";
import {normalModel} from '../models/normalModel'
import {normalInputType} from '../type/mutation/normalInputType'




export const inputNormal = new GraphQLSchema({
    type: normalType,
    args: {
        data: {
            id: 'data',
            type: new GraphQLNonNull(normalInputType)
        }
    },
    resolve: async (root, { data }) => {
        try {
            const newEvent = new normalModel(data)
            return await newEvent.save()
            
        } catch (err) {
            return null
        }
    }
})



