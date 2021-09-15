import React from 'react';

import { routes } from '../../utils/constants';
import { Link } from 'react-router-dom';

const {events} = routes;

const Courses = () => {
    return (
        <div>
           <div className="course__item">
                <h2>Angular</h2>
                <p>Angular es el framework para JavaScript estándar para crear webs SPA.
                Es uno de los frameworks más populares para desarrollar aplicaciones modernas y 
                escalables en el lado del cliente.
                </p>
            </div>
            <div className="course__item">
                <h2>ReactJs</h2>
                <p>ReactJS es una biblioteca desarrollada por Facebook cuya principal ventaja es su alta         performance. 
                    Con react js haremos principal foco en la creación de interfaces de usuario utilizando el patrón de 
                    diseño MVC (modelo-vista-controlador).
                </p>
            </div>
            <div className="course__item">
                <h2>Vue.js</h2>
                <p>Vue.js es uno de los frameworks JavaScript más populares del momento por su sencillez, potencia, elegancia y minimalismo.En el curso de Vue.js desde cero encontrarás una serie de vídeo-lecciones profesionales que cubren todos los aspectos principales de Vue, tales como:
                </p>
                <ul>
                    <li>Reactividad</li>
                    <li>Eventos</li>
                    <li>Directivas</li>
                    <li>Listas</li>
                    <li>Componentes</li>
                </ul>
            </div>
            <h3>Mira los eventos actuales: <Link to={events}>aquí</Link></h3> 
        </div>
    )
}

export default Courses
