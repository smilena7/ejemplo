import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';
import '../Slides/Slides.css';

const Slides = ({ images, interval }) => {
    const [ activeIndex, setActiveIndex ] = useState(0)

    useEffect(() => {
        const tick = setInterval(() => { // setInterval es un METODO nativo de los navegadores, que nos permite ejecuatr una funcion cada cierto tiempo (en este caso, cada segundo)
            if (activeIndex < images.length - 1) { // Se lee: en caso de que activeIndex sea menor a la longitud de las imagenes (o la longitud del array) y a este le restamos 1 (ya que el indice de los array comienzan en 0, por lo tanto si las imagenes tienen 3 elementos unicamente quiero que llegan al indice 2) entonces:
                setActiveIndex(activeIndex + 1)
            } else { // Y encaso contrario:
                setActiveIndex(0)
            }
        }, interval);

        return () => clearInterval(tick) // Esto porque Cada vez que usemos el useEffect, es que siempre debemos LIMIPAR los intervalos o los enetListener con cada ejecucion
      },   
      [ activeIndex, images.length, interval ]
    )

    return (
        <div className='Slide'>
            <div className="Slide_Container">
                { images.map((image, index) => (
                    <img 
                        src={image.src}
                        alt={image.title}
                        key={image.src}
                        className={
                            index === activeIndex
                            ? 'Slide_Container_Img animaShow'
                            : 'Slide_Container_Img animaHide'
                        }
                    />
                )) }
                <div className='Slide_Container_Title'> 
                    {images[activeIndex].title} 
                </div>
            </div> 
        </div>
    )
}

Slides.defaultProps = {
    interval: 5000,
    images: []
}

Slides.prototype = {
    interval: propTypes.number,
    images: propTypes.arrayOf( // esto para que las imagenes sean un array, en este caso particular utilizamos el metodo arrayOf(). Aqui adentro accedemos a propTypes y para poder definir objetos dentro de los propTypes, esto se hace a objetos a traves del metodo shape. Esta recibe un objeto y dentro podemos pasar las diferentes propiedades que tenemos que recibir dentro del objeto que se le pase a estas imagentes (en este caso solo son dos: src y el title)
        propTypes.shape({ // es decir, de esta manera con los propsTypes podemos limitar a que la prop images se le pase un array y que ademas esta tiene que ser un array de objeto y que a su vez estos tienen que contener dos propiedades, la propiedad src y la propiedad title, que ambas van a ser string
            src: propTypes.string.isRequired, // con esta prop isRequired, definismos que la prop src o title es requerida
            title: propTypes.string.isRequired
        })
    )
}

export default Slides