import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import axiosClient from '../axios-client';

export default function userForm() {

    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    if (id) {
        useEffect(() => {
            setLoading(true)
            axiosClient.get(`/users/${id}`)
                .then(({data}) =>{
                    setLoading(false)
                    setUser(data)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, [])
    }


    return (
        <>
        {used.id && <h1>Update User: {user.name}</h1>}
        {!user.id && <h1>New User</h1>}
        <div className='card animated fadeInDown'>
            {loading && (
                <div className='text-center'>Loading...</div>
            )}
        </div>
        </>
    )
}