import { useEffect, useState } from "react";

// import Link from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client"

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
            .then(({data}) => {
                setLoading(false)
                console.log(data);
            })
            .catch(() => {
                setLoading(false)
            })
    }


    return (
        <div>
            <div>
                Users
            
            </div>
        </div>
        )

}