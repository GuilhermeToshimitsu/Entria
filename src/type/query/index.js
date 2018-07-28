import { GraphQLInputObjectType } from 'graphql';
import { simpleQuery } from '../../queries'

export const queries = new GraphQLInputObjectType({
    name:"Query",
    fields: () =>({
        simpleQuery,
    })
})