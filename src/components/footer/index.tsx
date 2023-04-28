import ReChillLogoAlt from '@assets/logos/Rechill colored logo (1).svg';
import * as React from 'react';
import { Logo } from '@components/logo';
import './footer.styles.css';
import { Link } from 'react-router-dom';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div className="footer">
      <div className="centered-container">
        <Logo size="md" src={ReChillLogoAlt} alt="Rechill colored Logo" />
        <div>
          <span className="purple-span">Unwind your</span>
          <span className="blue-span"> mind</span>
        </div>
      </div>
      <div className="centered-container">
        <Link to="/terms-of-use">
          <span className="blue-span">Terms of Use</span>
        </Link>
        <Link to="/privacy-policy">
          <span className="purple-span">Privacy Policy</span>
        </Link>
      </div>
      <span className="blue-span">Call us</span>
      <span className="blue-span">Follow us</span>
    </div>
  );
}
