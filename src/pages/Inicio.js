import React from 'react'
import '../css/Inicio.css';

const Inicio = () => {
    return (
        <body>
            <div className='container1'>
                {/**Aqui va el header con el título*/}
                <div className='header'>
                    <h1>STAR WARS</h1>
                </div>

                {/**Texto introductorio del Juego */}

                <div className='texto'>
                    <p>El camino de la fuerza has de seguir si al lado Oscuro quieres derrotar.</p>
                </div>

                {/**Aqui va el botón para iniciar el juego */}
                <div className='button'>
                    <button id='botonInicio'>Start</button>
                </div>
            </div>
        </body>

    )
}

export default Inicio
