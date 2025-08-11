import React from 'react';
import Mycontact from '../components/Myaccount/Mycontact';
import Login from '../components/Myaccount/Login';
import ForgotPassword from '../components/Myaccount/Forgotpasword';

const Myaccount = () => {
  return (
    <div>
      <Mycontact />
      <Login />
      <ForgotPassword/>
    </div>
  );
};

export default Myaccount;
