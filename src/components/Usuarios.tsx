//rafc
import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ListaUsuariosReqRes, Usuario } from "../interfaces/interfaceReqRes";

export const Usuarios = () => {

    //hook useRef
    const paginaRef = useRef(1);

    //hook useState
    const [users, setUsers] = useState<Usuario[]>([]);

    //hook useEffect
    useEffect(() => {
        // llamar función carga de usuarios
        return () => {
            cargarUsuarios();
        }
    }, [])

    //Función para cargar lista usuarios - api
    const cargarUsuarios = async () => {
        // llamado a la API
        const resp = await reqResApi.get<ListaUsuariosReqRes>('/users', {
            params: {
                page: paginaRef.current  // tomando el valor númerico del useRef
            }
        });

        //Validar el vector que tenga datos
        if (resp.data.data.length > 0) {
            setUsers(resp.data.data);
            paginaRef.current++;
        } else {
            alert('No existe más usuarios')
        }

    }

    //Función mostrar cada usuario en la tabla de manera dinámica
    const itemUsuario = ({ id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar}
                        alt={first_name}
                        style={{
                            width: 40,
                            borderRadius: 10
                        }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Lista usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usuario) => itemUsuario(usuario))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={cargarUsuarios}>Siguiente</button>
        </div>
    )
}
