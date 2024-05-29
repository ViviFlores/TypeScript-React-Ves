import { useState } from "react";

export const useCounter = (numeroInicial: number = 10) => {
    //hook useState
    const [valor, setValor] = useState<number>(numeroInicial);

    //función cambiar valor del contador
    const contador = (numero: number) => {
        setValor(valor + numero)
    }

    //return objeto
    return {
        //valor: valor,
        //contador: contador
        valor,
        contador
    }
}
