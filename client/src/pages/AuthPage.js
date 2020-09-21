import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            console.log(data);
        } catch (error) {

        }
    }

    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1>Link-shorter</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Auth</span>
                        <div>

                            <div className="input-field">
                                <input
                                    placeholder='E-mail'
                                    id="email"
                                    type="email"
                                    name='email'
                                    className='yellow-input'
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">E-mail</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder='Password'
                                    id="password"
                                    type="password"
                                    name='password'
                                    className='yellow-input'
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className='btn yellow darken-4'
                            disabled={loading}
                        >Login</button>
                        <button
                            className='btn grey lightrn-1 black-text'
                            onClick={registerHandler}
                            disabled={loading}
                        >Registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}