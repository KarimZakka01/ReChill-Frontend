// import * as React from 'react';

// export interface IAboutProps {}

// export function About(props: IAboutProps) {
//   return <div>About</div>;
// }

import DirectionalContainer from '@components/directional-container';
import { Button } from '@components/button';
import ReChillLogo from '@assets/images/chicken.png';
import { useNavigate } from 'react-router-dom';
import * as React from 'react'; //imports the React library
import './about.styles.css';
//defines an interface for the props that can be passed to the About component.
//In this case, there are no props defined, so the interface is empty.


export interface IAboutProps {}

export function About(props: IAboutProps) {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our website and our mission.</p>
      </div>
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
        As a former overthinker myself, I understand the challenges 
        that come with it. That's why I envisioned a website that 
        offers a variety of tools specifically designed to assist 
        fellow overthinkers. Having experienced the benefits firsthand,
         I strongly believe in the value of providing a platform that 
         supports individuals in managing their overthinking tendencies.
          By combining my personal journey with the desire to help others,
           I embarked on creating this website as a means to empower overthinkers
            and make their lives more fulfilling.
        </p>
       
        <h2>Our Mission</h2>
        <p>
        We're here to help overthinkers find peace in everyday chaos. Our website offers 
        features designed to support you on your journey to a calmer mind. Connect with 
        licensed therapists for confidential sessions, watch motivational videos, learn 
        new things with daily videos, and enjoy an endless game. Take a comprehensive 
        personality test for self-discovery and turn to our friendly chatbot for instant
         support. Conquer overthinking and live a fulfilling life with our empowering tools.
        </p>
        
        <DirectionalContainer
        action={() => { navigate('/services')}}
        imageSource={""}
        title=""
        buttonText="Discover"
      >  
      </DirectionalContainer>
      </div>
    </div>
  );
}

export default About;
