import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
const Header = () => {
  const [loginUser, setLoginUser] = useState('');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoginUser(user)
    }
  }, []);
  const nagivate = useNavigate()
  // logout Handler
  const logoutHandler = () => {
    localStorage.removeItem('user')
    message.success('Logout Successfully')
    nagivate('/login')
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <Link className='navbar-brand' to='/'>
              ExpensifyPro
            </Link>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item mx-2 p-2 fw-medium'>{loginUser && loginUser.name}</li>
            <li><button className='nav-item btn btn-primary mx-2' onClick={logoutHandler}>Logout</button></li>
            </ul> 
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
