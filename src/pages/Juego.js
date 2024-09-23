/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';

const Juego = () => {
{/**Vamos a generar un cronómetro que mida el tiempo que transcurre desde que se carga la página de juego hasta que se detenga el juego.
    Para ello usamos useState, para crear un estado que guarde el tiempo transcurrido. También usaremos useEffect para iniciar el 
    cronómetro cuando la página se cargue.También usaremos setInterval para actualizar el estado del tiempo transcurrido por segundos. */}

    const [segundos, setSegundos] = useState(0); 

    useEffect(() =>{
        {/**Configura un intervalo que se ejecuta cada segundo */}
        const intervalo = setInterval(() => {

     setSegundos((segundosPrevios) => segundosPrevios + 1);
    },1000);

    {/**Limpiamos el intervalo cuando el componente se desmonte */}

    return () => clearInterval(intervalo);
    }, []);

    return (
        <div>
            <div className='header'>
                <h1>STAR-WARS</h1>
            </div>

            <div>
                <h1>Tiempo Transcurrido: {segundos} segundos</h1>
            </div>
            
        </div>
    )
}

export default Juego
