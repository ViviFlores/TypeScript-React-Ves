import { useEffect, useState } from "react";

//rafc
export const ComponenteUseEffect = () => {

    //hook useState
    const [valor, setValor] = useState<boolean>(false);

    //función cambiar valor useState
    const cambiarValor = () => {
        setValor(!valor);
    }

    //hook - useEffect
    useEffect(() => {
        // Código a ejecutar
        console.log('Desde el useEffect');
        // Dependencia
    }, [valor]);

    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button onClick={cambiarValor}>Cambiar Valor</button>
        </div>
    )
}
