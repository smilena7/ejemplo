import { ADD_FRUIT } from '../actions/fruitsAction'

const initialState = [
    'Fresa',
    'Manzana'
]

function fruits (state = initialState, action) {
    switch (action.type) { // aqui se evalua el objeto de la accion
        case ADD_FRUIT: // ADD_FRUIT es la accion
            //return state.concat(action.payload.fruit)
            return [
                ...state, // con esto agregamos los elemneto del array (linea 3) a este nuevo array que retornarmos en esta linea
                action.payload.fruit // y con esto accedemos a la nueva fruta o elemento que agrega el usuario en el input
            ]

        default: // se retorna el estado por defecto
            return state
    }
}

export default fruits

// NOTA LINEA  13: Recordemos que con este operador sprint, podemos invertir las lineas, es decir, el operador puede ir debajo de actio.payload.fruit, y con esto
// los nuevos elmentos o frutas que el usuario agregue, se van colonado de primeros en la lista