import React, {useState} from 'react'
import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
const Register = () => {
    const uri = 'https://amused-snaps-hen.cyclic.app'
    const nagivate = useNavigate()
    const [loading, setLoading] = useState(false)
    const submitHandler = async (values) => {
        try {
            setLoading(true)
            await axios.post(uri +'/users/register', values)
            message.success('Registration Successfull')
            setLoading(false)
            nagivate('/login')
        } catch (error) {
            setLoading(false)
            message.error('something went wrong')
        }
    }
  return (
    <>
        <div className="register">
            {loading && <Spinner/>}
            <Form layout='vertical' onFinish={submitHandler}>
                <h1 className='text-center'>Register</h1>
                <Form.Item label='Name' name='name'>
                    <Input type='text'/>
                </Form.Item>
                <Form.Item label='Email' name='email'>
                    <Input type='email'/>
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <Input type='password'/>
                </Form.Item>
                <div className="d-block ">
                    <button className='btn btn-primary d-block mx-auto'>Register</button> <br />
                   <div className='d-block'>Already Register ? <Link to='/login' className=''>Click Here to Login</Link></div>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Register