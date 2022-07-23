import React, { useState } from "react";

export const Button = ({ type, onIncrement, onDecrement }) => {
    
    const action = () => {
        return type === 'increment'
        ? onIncrement()
        : onDecrement()
    }

    return (
        <button onClick={action}>
            { type === 'increment' ? 'Agregar' : 'Quitar' }
        </button>
    )
}

export const Title = ({ clicks, children }) => {
    return typeof children === 'function'
    ? children(clicks)
    : <span>{ clicks }</span>

}

export const Counter = ({ children }) => {
    const [ clicks, setClicks ] = useState(0)

    const increment = () => setClicks(clicks + 1)
    const decrement = () => setClicks(clicks - 1)

    if (!children) { // se lee: en caso de que (en el componente Counter que esta en App) no se este pasando ningun hijo, entonces que retorne:
        const styles = {
            background: 'tomato',
            borderRadius: '0.2em',
            padding: '0.3em 1em',
            color: '#FFF'
        }

        return (
            <div style={styles}>
                Wops! Debes agregar componentes como {'<Button />'}
            </div>
        )
    }

    const _children = React.Children.map(children, (child) => {
        console.log(child)

        let props = {}

        if (child.type === Title) {
            props.clicks = clicks
        }

        if (child.type === Button) {
            props.onIncrement = increment
            props.onDecrement = decrement
        }

        return React.cloneElement(child, props)
    })

    return _children
}