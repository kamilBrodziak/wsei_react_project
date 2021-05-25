import { IPhoto, IUser } from "./IRestObjects";

const API = "https://jsonplaceholder.typicode.com";

class RestService {
    public static getPhoto(id: number) : Promise<IPhoto> {
        return fetch(`${API}/photos/${id}`).then(response => response.json());
    }

    public static getUser(id: number) : Promise<IUser> {
        return fetch(`${API}/users/${id}`).then(response => response.json());
    }
}

export default RestService;