import { GraphQLObjectType } from 'graphql';
import {inputNormalN} from '../../mutations/createEvent'

export const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:inputNormalN
})