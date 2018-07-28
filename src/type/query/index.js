import { GraphQLObjectType} from 'graphql';
import {querie,queryAll} from '../../queries'

// import {normalType} from '../type/normalType'

export const queries = new GraphQLObjectType({
    name:"Query",
    fields: {
        NormalByID:querie,
        NormalAll:queryAll
    }
});
