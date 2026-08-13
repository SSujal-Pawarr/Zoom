import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: `${server}/api/v1/users`
})

export const AuthProvider = ({ children }) => {

    const authContext = useContext(AuthContext);

    const [userData, setUserData] = useState(authContext);

    const router = useNavigate();

    const handleRegister = async (name, username, password) => {
      
        try {

            let request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            })

            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }

        } catch (err) {
            throw err;
        }
    }

    

}
