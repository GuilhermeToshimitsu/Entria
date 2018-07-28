import { GraphQLObjectType, GraphQLNonNull ,GraphQLInt} from 'graphql';
import {insertion} from '../../mutations'

export const mutations = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        NormalInsert:insertion
    }
})