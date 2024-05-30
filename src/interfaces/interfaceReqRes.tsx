//Definir la estructura y el tipado de nuestro JSON
//facilitar el acceso a las claves de el JSON

export interface ListaUsuariosReqRes {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuario[];
    support:     Support;
}

export interface Usuario {   //fn+f2
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
