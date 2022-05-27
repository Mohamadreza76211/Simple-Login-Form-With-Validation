import React, { useState } from 'react';

import Login from './components/Login';
import MainHeader from './components/Header';
import WelcomePage from './components/WelcomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const localStorageValue=localStorage.getItem("loggedIn");
  if(localStorageValue==='yes' && isLoggedIn===false){
    setIsLoggedIn(true)
  }


  const loginHandler = (email, password) => {
    if(email==='ali' && password==='123'){
    localStorage.setItem("loggedIn","yes")
    setIsLoggedIn(true);
    }
    else
    alert('نام کاربری یا رمز عبور اشتباه است')
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("loggedIn","no")
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <WelcomePage onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
