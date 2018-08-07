import { GraphQLObjectType} from 'graphql';
import {OwnerAll,OwnerQuery,BuildingAll,BuildingQuery} from "../../queries"

// import {normalType} from '../type/normalType'

export const queries = new GraphQLObjectType({
    name:"Query",
    fields: {
        findOwner:OwnerQuery,
        findAllOwners:OwnerAll,
        findBuilding: BuildingQuery,
        findAllBuildings:BuildingAll,
    }
});
