import React, { useState, useEffect } from 'react';
import '../css/Juego.css';

const imagenes = [
    '/media/black-troopers.jpg',
    '/media/darth_Vader.jpg',
    '/media/maquina-guerra.jpg',
    '/media/piloto.jpg',
    '/media/R2-D2.jpg',
    '/media/spider.jpg',
    '/media/star-wars.jpg',
    '/media/stormtrooper.jpg',
    '/media/Tie.jpg',
    '/media/ciudad.jpg'
];

const Juego = () => {
    const [imagenesJuego, setImagenesJuego] = useState([]);
    const [seleccionadas, setSeleccionadas] = useState([]);
    const [giradas, setGiradas] = useState([]);
    const [acertadas, setAcertadas] = useState(0); // Permite llevar el conteo de aciertos.
    const [segundos, setSegundos] = useState(180); // 180 segundos = 3 minutos.
    const [gameOver, setGameOver] = useState(false); // Estado para determinar si el tiempo terminó.
    const [hasWon, setHasWon] = useState(false); // Estado para determinar si el jugador ganó.

    useEffect(() => {
        // Inicializa el cronómetro.
        if (segundos > 0 && !hasWon) {
            const intervalo = setInterval(() => {
                setSegundos((prevSegundos) => prevSegundos - 1); // Decrementar cada segundo.
            }, 1000);

            return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonta.
        } else if (segundos === 0) {
            setGameOver(true); // Se activa Game Over si el tiempo llega a 0.
        }
    }, [segundos, hasWon]);

    useEffect(() => {
        // Inicializa las imágenes.
        const imagenesIniciales = [];
        imagenes.forEach((imagen) => {
            imagenesIniciales.push(imagen, imagen); // Cada imagen aparece exactamente 2 veces.
        });

        // Mezclamos las imágenes aleatoriamente.
        const imagenesMezcladas = imagenesIniciales.sort(() => Math.random() - 0.5);
        setImagenesJuego(imagenesMezcladas);
    }, []);

    useEffect(() => {
        // Verificar si se ha ganado el juego.
        if (imagenesJuego.length > 0 && acertadas === imagenesJuego.length / 2) {
            setHasWon(true); // Marca como victoria.
        }
    }, [acertadas, imagenesJuego]);

    const handleClick = (index) => {
        if (gameOver || hasWon || giradas.includes(index) || seleccionadas.length === 2) return;

        // Agregamos la imagen seleccionada al array de imágenes giradas.
        setGiradas([...giradas, index]);

        // Agregamos la imagen a las seleccionadas.
        setSeleccionadas([...seleccionadas, index]);

        if (seleccionadas.length === 1) {
            const [primerSeleccionado] = seleccionadas;
            const segundaSeleccionada = index;

            // Comprobamos si las dos imágenes seleccionadas coinciden.
            if (imagenesJuego[primerSeleccionado] === imagenesJuego[segundaSeleccionada]) {
                setAcertadas((prevAcertadas) => prevAcertadas + 1); // Usamos el valor previo para evitar problemas.
            } else {
                // Si no coinciden, giramos las imágenes de nuevo después de un retraso.
                setTimeout(() => {
                    setGiradas((prevGiradas) =>
                        prevGiradas.filter((i) => i !== primerSeleccionado && i !== segundaSeleccionada)
                    );
                }, 1000);
            }

            // Limpiamos las seleccionadas.
            setSeleccionadas([]);
        }
    };

    return (
        <div className="juego-container">
            {/* Título */}
            <div className="header">
                <h1>STAR WARS</h1>
            </div>

            {/* Cronómetro */}
            <div className="timer">
                <h2>Tiempo restante: {segundos} segundos</h2>
            </div>

            {/* Mostrar mensaje si se acaba el tiempo */}
            {gameOver && !hasWon && (
                <div className="message game-over">
                    <h2>Game Over</h2>
                    <p>El tiempo se ha agotado. ¡Intenta de nuevo!</p>
                </div>
            )}

            {/* Mostrar mensaje si se gana */}
            {hasWon && (
                <div className="message has-won">
                    <h2>¡Has Ganado!</h2>
                    <p>¡Felicidades! Has acertado todas las imágenes.</p>
                </div>
            )}

            {/* Grid de imágenes */}
            {!gameOver && !hasWon && (
                <div className="grid-container">
                    {imagenesJuego.map((imagen, index) => (
                        <div
                            key={index}
                            className={`grid-item ${giradas.includes(index) ? 'flipped' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            {/* Mostramos la imagen girada o la imagen de fondo */}
                            <img
                                src={giradas.includes(index) ? imagen : '/media/pagina_juego.jpg'}
                                alt={`imagen-${index}`}
                                className="imagen"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Juego;
