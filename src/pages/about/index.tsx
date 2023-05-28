// import * as React from 'react';

// export interface IAboutProps {}

// export function About(props: IAboutProps) {
//   return <div>About</div>;
// }


import * as React from 'react'; //imports the React library
import './about.styles.css';
//defines an interface for the props that can be passed to the About component.
//In this case, there are no props defined, so the interface is empty.
import DirectionalContainer from '@components/directional-container';
import { Button } from '@components/button';

export interface IAboutProps {}

export function About(props: IAboutProps) {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company and our mission.</p>
      </div>
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          hendrerit enim. Aliquam sed lobortis leo, in egestas lorem. Sed at
          malesuada augue. Nam nec justo sem. Duis consequat, velit vel
          hendrerit bibendum, mi dolor consectetur quam, non semper ipsum lacus
          vitae turpis.
        </p>
        <p>
          Nulla sodales, magna vel vestibulum viverra, dui tortor ullamcorper
          leo, eu efficitur libero ex a est. Integer et lorem euismod,
          consectetur purus sit amet, feugiat mi. Praesent feugiat felis vel
          faucibus bibendum. Curabitur imperdiet ipsum at metus faucibus
          malesuada.
        </p>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          hendrerit enim. Aliquam sed lobortis leo, in egestas lorem. Sed at
          malesuada augue. Nam nec justo sem. Duis consequat, velit vel
          hendrerit bibendum, mi dolor consectetur quam, non semper ipsum lacus
          vitae turpis.
        </p>
        <p>
          Nulla sodales, magna vel vestibulum viverra, dui tortor ullamcorper
          leo, eu efficitur libero ex a est. Integer et lorem euismod,
          consectetur purus sit amet, feugiat mi. Praesent feugiat felis vel
          faucibus bibendum. Curabitur imperdiet ipsum at metus faucibus
          malesuada.
        </p>
        <Button size="xl" className='as'>
            Get Started
          </Button>
      </div>
    </div>
  );
}

export default About;
