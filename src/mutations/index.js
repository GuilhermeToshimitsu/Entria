import {addPlace,deletePlace,updatePlace} from './buildingMutations'
import {addOwner,deleteOwner,updateOwner} from './ownerMutations'
export const insertionPlace = addPlace;
export const deletionPlace = deletePlace;
export const deletionOwner = deleteOwner;
export const insertionOwner = addOwner;
export const updatingPlace = updatePlace;
export const updatingOwner = updateOwner;