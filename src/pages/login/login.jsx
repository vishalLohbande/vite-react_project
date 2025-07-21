import React, { useState } from 'react'
import loginStyle from './login.module.css'
import Core2webLogo from '../../assets/login/Core2webLogo.png'
import { loginService } from '../../services/services';
import { useNavigate } from 'react-router';
import { SUPERADMIN } from '../../routeFile'


function C2wDashboardLogin() {

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [passToggle, setPassToggle] = useState(true)
  const [loginLoader, setLoginLoader] = useState(false)
  const [errorFlag, setErrorFlag] = useState(0)

  const navigate = useNavigate()

  const handleUserName = (e) => setUserName(e.target.value);
  const handleUserPassword = (e) => setUserPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await loginService(userName, userPassword);
    if (response.status === 200) {
      setErrorFlag(0)
      setUserName('')
      setUserPassword('')
      navigate(SUPERADMIN)
    } else {
      if (response.status === 400) {
        if (parseInt(response.msg) === 401) {
          setErrorFlag(1)
        } else {
          setErrorFlag(2)
        }
      }
    }
  };

  return (
    <div className={loginStyle.C2wDashboardLogin_ctn}>
      <div className={loginStyle.C2wDashboardLogin_card}>
        <div className={loginStyle.logoHolder}>
          <img src={Core2webLogo} alt='c2w-logo' />
        </div>
        <form>
          <div className={loginStyle.input_holder}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Enter username'
              value={userName}
              onChange={handleUserName}
              required
              style={{ border: errorFlag !== 0 && errorFlag === 1 ? '1px solid red' : null }}
            />
            {<p>{ errorFlag !== 0 && errorFlag === 1  ? 'Invalid username' : null}</p>}
          </div>
          <div className={loginStyle.input_holder}>
            <label htmlFor="password">Password</label>
            <div className={loginStyle.absolute_input}>
              <input
                type={!passToggle ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={handleUserPassword}
                value={userPassword}
                style={{ border: errorFlag !== 0 && errorFlag === 2 ? '1px solid red' : null }}
                required
              />
              
              {passToggle ?
                <svg onClick={() => setPassToggle(!passToggle)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2333_47666" maskUnits="userSpaceOnUse" x="0" y="2" width="18" height="14"><path d="M9 6.54901C8.34901 6.54901 7.72469 6.80761 7.26437 7.26793C6.80406 7.72824 6.54545 8.35257 6.54545 9.00355C6.54545 9.65454 6.80406 10.2789 7.26437 10.7392C7.72469 11.1995 8.34901 11.4581 9 11.4581C9.65099 11.4581 10.2753 11.1995 10.7356 10.7392C11.1959 10.2789 11.4545 9.65454 11.4545 9.00355C11.4545 8.35257 11.1959 7.72824 10.7356 7.26793C10.2753 6.80761 9.65099 6.54901 9 6.54901ZM9 13.0945C7.91502 13.0945 6.87448 12.6635 6.10729 11.8963C5.3401 11.1291 4.90909 10.0885 4.90909 9.00355C4.90909 7.91857 5.3401 6.87804 6.10729 6.11084C6.87448 5.34365 7.91502 4.91264 9 4.91264C10.085 4.91264 11.1255 5.34365 11.8927 6.11084C12.6599 6.87804 13.0909 7.91857 13.0909 9.00355C13.0909 10.0885 12.6599 11.1291 11.8927 11.8963C11.1255 12.6635 10.085 13.0945 9 13.0945ZM9 2.86719C5.02364 2.86719 1.45636 5.32173 0 9.00355C1.95545 13.9781 7.56818 16.4163 12.5427 14.4608C15.0382 13.479 17.0182 11.5072 18 9.00355C16.5436 5.32173 12.9764 2.86719 9 2.86719Z" fill="#006FFD"></path></mask><g mask="url(#mask0_2333_47666)"><rect width="18" height="18" fill="#000000"></rect></g></svg>
                : <svg onClick={() => setPassToggle(!passToggle)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2333_47650" maskUnits="userSpaceOnUse" x="0" y="1" width="18" height="16"><path d="M17.0394 2.91291C17.4055 2.54678 17.4055 1.95319 17.0394 1.58708C16.6733 1.22097 16.0797 1.22097 15.7135 1.58709L2.21385 15.0871C1.84774 15.4532 1.84774 16.0468 2.21386 16.4129C2.57999 16.779 3.17358 16.779 3.53969 16.4129L5.48496 14.4676C7.67488 15.3214 10.1807 15.3834 12.5427 14.455C15.0382 13.4731 17.0182 11.5013 18 8.99769C17.3593 7.37786 16.31 5.99559 14.997 4.95537L17.0394 2.91291ZM12.7 7.25244L11.4117 8.54077C11.44 8.69035 11.4545 8.84327 11.4545 8.99769C11.4545 9.64868 11.1959 10.273 10.7356 10.7333C10.2753 11.1936 9.65099 11.4522 9 11.4522C8.8456 11.4522 8.6927 11.4377 8.54313 11.4094L7.25483 12.6977C7.79552 12.9527 8.39076 13.0886 9 13.0886C10.085 13.0886 11.1255 12.6576 11.8927 11.8904C12.6599 11.1232 13.0909 10.0827 13.0909 8.99769C13.0909 8.38842 12.955 7.79315 12.7 7.25244ZM9 2.86133C10.0428 2.86133 11.0575 3.03015 12.0134 3.34566L10.255 5.10405C9.85319 4.97451 9.43008 4.90678 9 4.90678C7.91502 4.90678 6.87448 5.33779 6.10729 6.10498C5.3401 6.87218 4.90909 7.91271 4.90909 8.99769C4.90909 9.42781 4.97683 9.85094 5.10639 10.2528L2.62502 12.7342C1.49898 11.7494 0.585532 10.4872 0 8.99769C1.45636 5.31587 5.02364 2.86133 9 2.86133ZM7.26437 7.26207C7.67934 6.8471 8.2276 6.59606 8.80851 6.55062L6.55293 8.80626C6.59835 8.22532 6.84939 7.67705 7.26437 7.26207Z" fill="#006FFD" fill-rule="evenodd" clip-rule="evenodd"></path></mask><g mask="url(#mask0_2333_47650)"><rect width="18" height="18" fill="#232323"></rect></g><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_2333_47650" maskUnits="userSpaceOnUse" x="0" y="1" width="18" height="16"><path d="M17.0394 2.91291C17.4055 2.54678 17.4055 1.95319 17.0394 1.58708C16.6733 1.22097 16.0797 1.22097 15.7135 1.58709L2.21385 15.0871C1.84774 15.4532 1.84774 16.0468 2.21386 16.4129C2.57999 16.779 3.17358 16.779 3.53969 16.4129L5.48496 14.4676C7.67488 15.3214 10.1807 15.3834 12.5427 14.455C15.0382 13.4731 17.0182 11.5013 18 8.99769C17.3593 7.37786 16.31 5.99559 14.997 4.95537L17.0394 2.91291ZM12.7 7.25244L11.4117 8.54077C11.44 8.69035 11.4545 8.84327 11.4545 8.99769C11.4545 9.64868 11.1959 10.273 10.7356 10.7333C10.2753 11.1936 9.65099 11.4522 9 11.4522C8.8456 11.4522 8.6927 11.4377 8.54313 11.4094L7.25483 12.6977C7.79552 12.9527 8.39076 13.0886 9 13.0886C10.085 13.0886 11.1255 12.6576 11.8927 11.8904C12.6599 11.1232 13.0909 10.0827 13.0909 8.99769C13.0909 8.38842 12.955 7.79315 12.7 7.25244ZM9 2.86133C10.0428 2.86133 11.0575 3.03015 12.0134 3.34566L10.255 5.10405C9.85319 4.97451 9.43008 4.90678 9 4.90678C7.91502 4.90678 6.87448 5.33779 6.10729 6.10498C5.3401 6.87218 4.90909 7.91271 4.90909 8.99769C4.90909 9.42781 4.97683 9.85094 5.10639 10.2528L2.62502 12.7342C1.49898 11.7494 0.585532 10.4872 0 8.99769C1.45636 5.31587 5.02364 2.86133 9 2.86133ZM7.26437 7.26207C7.67934 6.8471 8.2276 6.59606 8.80851 6.55062L6.55293 8.80626C6.59835 8.22532 6.84939 7.67705 7.26437 7.26207Z" fill="#006FFD" fill-rule="evenodd" clip-rule="evenodd"></path></mask><g mask="url(#mask0_2333_47650)"><rect width="18" height="18" fill="#232323"></rect></g></svg></svg>
              }
            </div>            
            <div className={loginStyle.forgot_pass}>
              {<p>{ errorFlag !== 0 && errorFlag === 2 ? 'Invalid password' : null}</p>}
              {'Forgot password?'}
              
            </div>          
          </div>
          <button onClick={(e) => handleSubmit(e)}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default C2wDashboardLogin
