import {socket} from '../socket';
import {ownerType} from '../type/ownerType'

export const normalSub = {
    type:ownerType,
    subscribe:()=>socket.asyncIterator("EVENT_CREATED")
}