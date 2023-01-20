import axios from 'axios'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../../constants/env'
import { setToken } from '../../helpers/auth'
import LoginTemplate from '../templates/LoginTemplate'

const login = () => {
    const nav = useNavigate()

    const [error, setError] = useState()

    const handlerSubmit = (e) => {
        e.preventDefault()
        setError()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios.post(`${API_URL}/public/login`, data)
            .then(resp => {
                setToken(resp.data.data.token)
                nav("/")
            })
            .catch(e => {
                setError(e)
            })
    }

  return (
    <LoginTemplate>
        <form onSubmit={handlerSubmit}>
            <div className='mb-4'>
                <input className='w-full border border-gray-300 rounded-md p-1' type="email" name="email" id="email" placeholder="Correo" required/>
            </div>
            <div className='mb-4'>
                <input className='w-full border border-gray-300 rounded-md p-1' type="password" name="password" id="password" placeholder="Contraseña" required/>
            </div>
            <div className='text-center pt-1 mb-12 pb-1'>
                <button className='bg-blue-500 text-white mb-4 w-full rounded-md p-1' type="submit">Ingresar</button>
                <Link className='text-gray-500' to="/registro">¿Deseas registrarte?</Link>
            </div>
            {error && (
                <p className='text-center p-2 bg-red-100 text-redr-800'>
                    {error?.response?.data?.data}
                </p>
            )}
        </form>
    </LoginTemplate>
  )
}

export default login
