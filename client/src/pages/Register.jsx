import React from 'react'
import {Form, Input} from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {
    const submitHandler = (values) => {
        console.log(values)
    }
  return (
    <>
        <div className="register">
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