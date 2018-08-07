import { GraphQLInt,GraphQLNonNull, GraphQLSchema, GraphQLObjectType } from "graphql";
import {ownerType} from "../type/ownerType"
import {ownerModel} from '../models/ownerModel'
import {ownerInputType} from "../type/mutation/ownerInputType"
import {ownerMutationType} from "../type/mutation/ownerMutationType"
import {socket} from '../socket'
export const addOwner = {
    type: ownerType,
    args: {
        data: {
            id: 'data',
            type: new GraphQLNonNull(ownerInputType)
        }
    },
    description: "insertion on Mongo for the owner Models",
    resolve: async (root, { data }) => {
        const newOwner = new ownerModel(data)        
        try {
            return await newOwner.save()
        } catch (err) {
            return err
        }
    }
}

export const deleteOwner = {
    type:ownerType,
    args:{
        _id:{
            id: '_id',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    description: "deletion by ID on Mongo for the owner Models",
    resolve: async(root,{_id}) =>{
        try{
            return await ownerModel.findByIdAndRemove(_id).exec()
        } catch(err){
            return err
        }

    }
}

export const updateOwner = {
    type:ownerType,
    args:{
        _id:{
            id: '_id',
            type: new GraphQLNonNull(GraphQLInt)
        },
        data:{
            id:'data',
            type: new  GraphQLNonNull(ownerMutationType)
        }
    },
    description: "update by ID on Mongo for the owner Models",
    resolve: async(root,{_id,data}) =>{
        try{
            return await placeModel.findOneAndUpdate({_id:_id},data,{"new":true}).exec()
        } catch(err){
            return err
        }

    }

}
