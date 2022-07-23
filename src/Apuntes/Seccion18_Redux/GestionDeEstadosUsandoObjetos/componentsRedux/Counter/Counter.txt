import React from "react";
import { connect } from 'react-redux' // metodo-hook connect para poder conectar este componente (Counter) con el store
import { increment, decrement } from '../../redux/actions/counterActions' // estas son las funciones creadoras de aaciones definidas en store.js

const Counter = ({ increment, decrement, counter, name }) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h1>{ counter }</h1> 
            <p>
                { name }
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()), // estas funciones las disparamos directamente desdenuestro componente ver linea 8 (dentro onclick)
        decrement: () => dispatch(decrement()) // estas funciones las disparamos directamente desdenuestro componente ver linea 9 (dentro onclick)
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter)

// Nota: otra forma de exportar es:
// se puede exportar asi: const CounterConneted = connect()(Counter) o ver linea 16

// Nota2: Cuando se hace uso dle hook connect, por primer parametro se debe pasar una funcion que puede ser una funcion anonima o a traves de una constante
// Se recomienda por convencion, si de hace a traves de una constante, utilidad el nombre de la funcion de mapStateToProps
// Dentro de eta funcion lo que nos llega como primer paramtero es el estado (que se define en el store)
// Esta funcion debe retornar un objeto y dentro de este objeto se pasan las distintas propiedades que se tienen en este caso el state (este se puede renombrar y poner count: state por ejempo)
// EL SEGUNDO parametro que recibe el metodo connect es la funcion mapDispatchToProps. Esta funcion recibe como primer parametro el metodo dispatch.
// esta funcion mapdispatchToProps(), debe retornar un objeto y dentro de este objeto podemos tener los diferentes metodos o acciones que queremos disparar