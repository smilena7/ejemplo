import React from "react";
import { connect } from 'react-redux' 
import { addFruit } from '../../redux/actions/fruitsAction' // creador de accion (ver lina 43)

const Fruits = ({ fruits, addFruit }) => {

    const handlerSubmit = (e) => {
        e.preventDefault()

        const fruit = e.target[0].value

        e.target[0].value = '' // esto es para que al momento de hacer el submit (se da click en el boton agregar), este automaticamente se limpie

        addFruit(fruit)
    }

    return (
        <div>
            <h1>Fruits</h1>
            <form onSubmit={handlerSubmit}>
                <input 
                    type='text' 
                    placeholder='Agrega tu fruta' 
                />
                <button>
                    Agregar
                </button>
            </form>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={fruit + index}>
                        { fruit }
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        fruits: state.fruits // aqui se utiliza los reducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFruit: (fruit) => dispatch(addFruit(fruit))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Fruits)