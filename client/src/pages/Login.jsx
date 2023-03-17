import React, {useState, useEffect} from 'react'
import {Form, Input, message} from 'antd'
import { Link, useFetcher, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
const Login = () => {
    const uri = 'https://amused-snaps-hen.cyclic.app'
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const submitHandler = async (values) => {
        try {
            setLoading(true)
            const {data} = await axios.post(uri + '/users/login', values)
            setLoading(false)
            message.success('Login Success')
            localStorage.setItem('user', JSON.stringify({...data.user, password: ''}))
            navigate('/')
        } catch (error) {
            setLoading(false)
            message.error('something went wrong')
        }
    }
      //prevent for login user
   useEffect(() => {
    if(localStorage.getItem('user')){
        navigate('/')
    }
   }, [navigate]);

  return (
    <>
        <div className="register">
            {loading && <Spinner/>}
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