import {socket} from '../socket';
import {normalType} from '../type/normalType'

export const normalSub = {
    type:normalType,
    subscribe:()=>socket.asyncIterator("EVENT_CREATED")
}