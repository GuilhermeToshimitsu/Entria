import {GraphQLSchema} from 'graphql'
import {queries} from './type/query'
import {mutation} from './type/mutation'
// import {input} from './mutations'


export const Schema = new GraphQLSchema({
    query: queries,
    mutation:mutation,
})
