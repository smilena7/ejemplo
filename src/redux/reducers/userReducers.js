import { UPDATE_NAME } from '../actions/userActions'

const initialState = {
    name: 'Gerardo',
    country: 'Mexico',
    coord: ''
}

function user (state = initialState, action) { // segundo reducer
    
    //console.log(action)

    switch (action.type) { 
        case UPDATE_NAME: // este es el nombre de la accion
            return {
                ...state,
                name: action.payload.name
            }

        default: 
            return state
    }
}

export default user