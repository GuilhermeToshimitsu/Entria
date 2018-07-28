import { GraphQLInputObjectType } from 'graphql';
import {inputNormal} from '../../mutations'

export const mutation = new GraphQLInputObjectType({
    name:"Mutation",
    fields: () =>({
        inputNormal,
    })
})