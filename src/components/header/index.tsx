import ReChillLogoAlt from '@assets/logos/Rechill colored logo (1).svg';
import * as React from 'react';
import './header.styles.css';
import { Logo } from '@components/logo';
import { Link } from 'react-router-dom';
import { Button } from '@components/button';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="header">
      <Logo size="sm" src={ReChillLogoAlt} alt="ReChill colored logo" />
      <nav className="header-navigation-container">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="header-action-buttons">
        <Link to="/login">
          <Button variant="text">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up for free</Button>
        </Link>
      </div>
    </div>
  );
}
