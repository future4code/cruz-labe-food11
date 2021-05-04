import React from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignUpPage';

const  App =() =>  {
  return (
    <div className="App">
      <SignUpPage/>
      <LoginPage/>
    </div>
  );
}

export default App;
