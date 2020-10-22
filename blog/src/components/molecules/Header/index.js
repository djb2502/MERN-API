import React from 'react';
import { useHistory } from 'react-router-dom';
//style
import './header.scss';

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <p className="logo-app">My Blog</p>
      <p className="menu-item" onClick={() => history.push('/login')}>
        Logout
      </p>
    </div>
  );
};

export default Header;
