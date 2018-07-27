import {GraphQLID,GraphQLNonNull} from "graphql"
import projectionFields from "../util/mongoProjections";
import EventType from "../type/event" ;
import normalModel from "../models/normalModel";

export default query({
    type: EventType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: async (root, { id }, _, argsProjection) => {
        try{
            const projection = projectionFields(argsProjection)
            return await normalModel.findById(id).select(projection)
        }catch(error){
            return null
        }
    }
})