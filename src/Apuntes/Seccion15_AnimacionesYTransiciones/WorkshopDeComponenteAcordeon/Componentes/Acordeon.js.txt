import React, { useState, useRef } from "react";
import propTypes from 'prop-types'; // esto es para poder limitar el tipo de datos que le pasamos a las props - ver linea 64
import arrowImg from '../Acordeon/img/arrow.svg';

const Arcordeon = ({ title, content, bgColor }) => {
    const [ isExpanded, setExpanded ] = useState(false) // isExpanded, quiere decir que si esta expandido o no

    const contentRef = useRef()

    const toggle = () => setExpanded(!isExpanded)

    const panelStyles = {
        background: bgColor,
        color: '#FFF',
        padding: '0.5em 1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none' // con esto evitamos que si damos varias veces click en el span o title, se nos seleccione el texto
    }

    const contentStyle = {
        height: isExpanded ? contentRef.current.scrollHeight : '0px', // Esto se lee: si el contenido esta expandido (es true), entonces el alto es 100%, en caso contratio (si es false) el alto es 0% - De esta manera y con el overflow: 'hidden', lo que hacemos es esoconder el contenido para cuando tengamos el icono, hacerlo mostrar
        overflow: 'hidden',
        transition: 'all 350ms ease-out',
        border: '1px solid ' + bgColor, // con esta concatenacion, hacemos que el border sea del mismo color del content
        padding: isExpanded ? '1em 0.5em' : '0 0.5em' // Se lee: en caso de que el contenido este expandido, aplicar los valores de padding, en caso contratio, a plicar los otros otros valores de padding - De esta manera podemos tener totalmente expandido y totalmente cerrado el acrodeion sin ningun problema
    }

    const imageStyle = {
        width: '18px',
        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'transform 250ms ease'
    }

    return (
        <div>
            <div 
                style={panelStyles}
                onClick={toggle}
            >
                <span>{ title }</span>
                <img 
                    src={arrowImg}
                    alt='Flecha' 
                    style={imageStyle}
                />
            </div>
            <div 
                style={contentStyle} 
                ref={contentRef}
            >
                { content }
            </div>
        </div>
    )
}

Arcordeon.defaultProps = { // con esto definimos unos props por defecto. Ya en el componente que esta en App, se hace los cambios necesarios
    title: '',
    content: '',
    bgColor: '#523da5'
}

Arcordeon.propTypes = {
    title: propTypes.string,
    content: propTypes.string,
    bgColor: propTypes.string,
} // Con esto, limitamos o garantizamos que la informacion que pasamos por props (en el componente Acordeon que llamamos en App), sea de tipo string unicamente. Si en algun momento por ejemplo a la prop title, content o bgColor en lugar de string (''), le pasamos numeros por ejemplo ={}, este va a funcionar pero en la consola nos mostrara un error

export default Arcordeon


// NOTA IMPORTANTEEE:
// Si por ejemplo queremos saber el alto natural de un elemento que no se esta mostrando completo, lo que podemos hacer es ir a la consola
// y utilizar el siguiente truco: ponemos $0 y este nos va a seleccionar el elemento (pero primero debemos hacer la seleccion del elemento que nos interesa, en este caso por ejemplo el segundo parrafo que es el mas grande)
// con este truco de $0, es como hacer un document.getElementById
// dentro de este elemento ya que lo tenemos seleccionado (div), podemos revisar las difeentes propiedades y escogemos:
// $0.scrollHeight - con este podemos ver el alto total que tiene naturalmente el elemento
// y este es la que vamos a utilizar de forma dinamica par cada contenido del acordion

// Para hcer esto podriamos utilizarlo con document.getElementById, PERO no es lo mas nativa para hacerlo con React
// para ello, utilizamos lo que son las ref (debe importar el useRef)
// Ya que React recomienda hacer uso de ref o referencia CUANDO NECESITEMOS ACCEDER AL ELEMENTO DENTRO DEL DOM (en este caso el elementById) - ver linea 6 y 29 y luego ver linea 17