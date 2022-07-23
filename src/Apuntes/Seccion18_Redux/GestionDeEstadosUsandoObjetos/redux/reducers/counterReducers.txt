import { INCREMENT, DECREMENT } from '../actions/counterActions'

// Reducer
const initialState = 0


function counter (state = initialState, action) { // este es el reducer
    switch (action.type) { // se lee: en caso de que la ccion sea tipo 'INCREMENT', que retorne:
        case INCREMENT:
            return state + 1

        case DECREMENT:
            return state - 1

        default: // siempre en nuestra funcion reducer se debe retornar el estado
            return state
    }
}

export default counter