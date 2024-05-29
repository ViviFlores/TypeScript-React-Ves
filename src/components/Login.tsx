import { useReducer, useEffect } from "react";

//Interface - estado inicial (objeto) useReducer
interface AuthState {
    validando: boolean;
    token: null | string;
    nombre: string;
    correo: string;
}

//Type - login action payload
type LoginActionPayload = {
    nombre: string;
    correo: string;
}

//Type - parámetro de action - función reducer
type AuthAction =
    { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload };

export const Login = () => {

    //Valor - estado inicial useReduce
    const initialState: AuthState = {
        validando: true,
        token: null,
        nombre: '',
        correo: '',
    }

    //Función de retorno - reducer
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    nombre: '',
                    correo: ''
                }
            case 'login':
                //desestructurar el objeto
                const { nombre, correo } = action.payload;
                return {
                    validando: false,
                    token: 'DSFDSewrewrew324324sdfSDFDSfsd345435',
                    nombre: nombre,
                    correo: correo
                }
            default:
                return state;
        }
    }

    //Funión action login
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Viviana',
                correo: 'vflores@itsqmet.edu.ec'
            }
        })
    }

    //Función action logout
    const logout = () => {
        dispatch({type:'logout'})
    }

    //Hook useReducer
    //Desestructurando el objeto state
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    //Hook useEffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)

    }, [])

    //Validando carga inicial de página
    if (validando) { // true
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <div>
            <h3>Login</h3>
            {
                (token == null)
                    ? <div className="alert alert-danger">No autenticado...</div>
                    : <div className="alert alert-success">Autenticado como {nombre}...</div>
            }
            {
                (token == null)
                    ? <button
                        className="btn btn-primary"
                        onClick={login}>Login</button>
                    : <button 
                        className="btn btn-danger"
                        onClick={logout}>Logout</button>
            }
        </div>
    )
}
