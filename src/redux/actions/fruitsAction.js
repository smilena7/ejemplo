

export const ADD_FRUIT = 'ADD_FRUIT'

export const addFruit = (Fruit) => ({ // este es el creador de accion
    type: ADD_FRUIT,
    payload: {
        Fruit
    }
})