//rafc
import React from 'react'

// interface - objetos
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNumero: number;
}

// no se puede instanciar una interface 
//const persona = Persona();

export const ObjetosLiterales = () => {

    //objetos - tipado estricto
    const persona: Persona = {
        nombreCompleto: 'Viviana Flores',
        edad: 31,
        direccion: {
            pais: 'Ecuador',
            casaNumero: 365
        }
    }

    //acceder a propiedades
    persona.nombreCompleto = 'Viviana Flores';

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
