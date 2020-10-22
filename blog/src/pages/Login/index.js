import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="background" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push('/')} />
        <Gap height={100} />
        <Link
          title="Dont Have Account? Register Now"
          onClick={() => history.push('/register')}
        />
      </div>
    </div>
  );
};

export default Login;
