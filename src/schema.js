import {GraphQLSchema} from 'graphql'
import {queries} from './type/query'
import {mutations} from './type/mutation'
import {subscriptions} from './type/subscription'


export const Schema = new GraphQLSchema({
    query: queries,
    mutation: mutations,
    subscription: subscriptions
})
