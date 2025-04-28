import React, { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setIsLoggedIn(false)
        console.log('Logged Out');
        
        navigate('/login')

    }
  return (
    <>
      {/* Import Material-style font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
        rel="stylesheet"
      />

      <nav className="navbar navbar-expand-lg bg-white shadow-sm border-bottom">
        <div className="container-fluid px-4">
          {/* Logo and Brand */}
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img
              src="https://img.icons8.com/fluency/48/stocks-growth.png"
              alt="Logo"
              style={{ height: '32px', width: '32px', borderRadius: '8px' }}
            />
          
              StockVision
            
          </Link>


          {/* Buttons */}
          <div>
            {isLoggedIn ? (
                <>
                <Button text='Dashboard' class='btn-primary' url='/dashboard'/>
                &nbsp;
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                <Button text='Login' class='btn-outline-primary' url='/login'/>
                &nbsp;
                <Button text='Register' class='btn-primary' url='/register'/>
                </>
            )}

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
