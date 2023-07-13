import * as types from './types'

export const setFilter = (general,vehicleType,vehicleProperty,equipment) => {
    return {
        type:types.SET_FILTER,
        general,
        vehicleType,
        vehicleProperty,
        equipment,
    }
}