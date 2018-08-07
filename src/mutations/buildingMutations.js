import {GraphQLInt, GraphQLNonNull, GraphQLSchema, GraphQLObjectType } from "graphql";
import {buildingType} from "../type/buildingType"
import {placeModel} from '../models/buildingModel'
import {buildingInputType} from "../type/mutation/buildingInputType"
import {socket} from '../socket'
import {buildingMutationType} from '../type/mutation/buildingMutationType'
export const addPlace = {
    type: buildingType,
    args: {
        data: {
            id: 'data',
            type: new GraphQLNonNull(buildingInputType)
        }
    },
    description: "insertion on Mongo for the place Models, aka buldings",
    resolve: async (root, { data }) => {
        const newPlace = new placeModel(data)
        try {
           return await newPlace.save()
        } catch (err) {
            return err
        }
    }
}

export const deletePlace = {
    type:buildingType,
    args:{
        _id:{
            id: '_id',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    description: "deletion by ID on Mongo for the place Models, aka buldings",
    resolve: async(root,{_id}) =>{
        try{
            return await placeModel.findByIdAndRemove(_id).exec()
        } catch(err){
            return err
        }

    }
}

export const updatePlace = {
    type:buildingType,
    args:{
        _id:{
            id: '_id',
            type: new GraphQLNonNull(GraphQLInt)
        },
        data:{
            id:'data',
            type: new  GraphQLNonNull(buildingMutationType)
        }
    },
    description: "deletion by ID on Mongo for the place Models, aka buldings",
    resolve: async(root,{_id,data}) =>{
        try{
            return await placeModel.findOneAndUpdate({_id:_id},data,{"new":true}).exec()
        } catch(err){
            return err
        }

    }

}
