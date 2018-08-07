import { GraphQLObjectType, GraphQLNonNull ,GraphQLInt} from 'graphql';
import {insertionOwner,updatingOwner,insertionPlace,deletionOwner,deletionPlace,updatingPlace} from '../../mutations'
import { ownerType } from '../ownerType';

export const mutations = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        insertOwner:insertionOwner,
        deleteOwner:deletionOwner,
        updateOwner:updatingOwner,
        insertPlace:insertionPlace,
        deletePlace:deletionPlace,
        updatePlace:updatingPlace,
    }
})