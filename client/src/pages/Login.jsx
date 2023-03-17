import React from 'react'
import {Form, Input} from 'antd'
import { Link } from 'react-router-dom'
const Login = () => {
    const submitHandler = (values) => {
        console.log(values)
    }
  return (
    <>
        <div className="register">
            <Form layout='vertical' onFinish={submitHandler}>
                    <h1 className='text-center'>Login</h1>
                    <Form.Item label='Email' name='email'>
                        <Input type='email'/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input type='password'/>
                    </Form.Item>
                    <div className="d-block ">
                        <button className='btn btn-primary d-block mx-auto'>Login</button> <br />
                         <div className='d-block'>Not a User ? <Link to='/register' className=''>Click Here to Register</Link></div>
                    </div>
            </Form>
        </div>
    </>
  )
}

export default Login