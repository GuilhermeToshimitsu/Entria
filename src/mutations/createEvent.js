import { GraphQLNonNull } from "graphql";
import EventType from "../type/event";
import EventInputType from "../type/input/event";
import Event from "../models/normalModel";

export default createEvent({
    type: EventType,
    args: {
        data: {
            id: 'data',
            type: new GraphQLNonNull(EventInputType)
        }
    },
    resolve: async (root, { data }) => {
        try {
            const newEvent = new Event(data)
            return await newEvent.save()
        } catch (err) {
            return null
        }
    }
})



