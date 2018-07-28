import { GraphQLObjectType} from 'graphql';
import { subscription } from '../../subscriptions'

export const subscriptions = new GraphQLObjectType({
    name:"Subscription",
    fields: {
        normalSub: subscription
    }
});