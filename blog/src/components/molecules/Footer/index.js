import React from 'react';
import './footer.scss';
import {
  ICFacebook,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  MyLogo,
} from '../../../assets';

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-socmed" src={img} alt="icon" />
    </div>
  );
};

function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={MyLogo} alt="our logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICInstagram} />
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICTelegram} />
        </div>
      </div>
      <div className="copywright">
        <p>Copywright</p>
      </div>
    </div>
  );
}

export default Footer;
