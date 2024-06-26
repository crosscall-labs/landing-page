import React, { useEffect } from 'react';
import './Footer.css';
// import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import github from '../../assets/svg/github-icon.svg';
// import telegram from '../../assets/svg/gitbook-icon.svg';
// import discord from '../../assets/svg/discord-logo.svg';
import xtwitter from '../../assets/svg/xtwitter-icon.svg';
import gitbook from '../../assets/svg/gitbook-icon.svg';

export const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-socials">
        <div className="footer-socials-inner">
          <a href={'https://github.com/crosscall-protocol'} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github"/>
          </a>
          <a href={'https://docs.crosscall.pro'} target="_blank" rel="noopener noreferrer">
            <img src={gitbook} alt="Gitbook"/>
          </a>
          <a href={'https://x.com/crosscall_labs'} target="_blank" rel="noopener noreferrer">
            <img src={xtwitter} alt="X"/>
          </a>
        </div>
      </div>
      <div className="footer-copyright">© 2024 CrossCall Labs Inc.</div>
    </div>
  );
};
