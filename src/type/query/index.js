import { GraphQLObjectType } from 'graphql';
import { simpleQueryN } from '../../queries/queryEvent'


export const queries = new GraphQLObjectType({
    name:"Query",
    description: "simleQuery",
    fields: simpleQueryN
})