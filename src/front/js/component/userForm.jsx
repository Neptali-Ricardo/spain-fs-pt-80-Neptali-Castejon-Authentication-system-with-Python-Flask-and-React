import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const UserForm = ({type}) => {

    const {store, actions} = useContext(Context)
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        type === 'login'? actions.login(formData) : actions.register(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}