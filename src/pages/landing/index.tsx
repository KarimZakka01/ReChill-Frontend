import * as React from 'react';
import './landing.styles.css';
import ReChillLogo from '@assets/images/chicken.png';
import DirectionalContainer from '@components/directional-container';
export interface ILandingProps {}

export function Landing(props: ILandingProps) {
  return (
    <div className="landing">
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Unwind Your Mind"
        buttonText="Read More"
      >
        Find tranquility and peace as we guide you on a journey towards a calmer, more balanced state of mind. 
        It's time to quiet your mind and embark on the path to inner harmony. 
        Join us on this transformative adventure at Rechill.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Therapy Sessions"
        reverse
        buttonText="Discover Now"
      >
       Take control of overthinking and embark on a journey towards inner peace and a balanced mind.
       Book your confidential session today at Therapy Sessions, nd discover the transformative power of professional guidance.

      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Personality Test"
        buttonText="Discover Now"
      >
        Unlock self-awareness for a mindful life. Gain profound insights into your unique traits and tendencies. 
        Explore the depths of your personality and understand why overthinking may affect you. 
        Take our comprehensive test and uncover the keys to a more balanced existence.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Daily Videos"
        reverse
        buttonText="Discover Now"
      >
        Inspiring moments to uplift your day. Start each morning with motivational videos that ignite your spirit and fuel positivity. 
        Discover wisdom, embrace new perspectives, and embark on a journey of personal growth. 
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Endless Game"
        buttonText="Discover Now"
      >
        Escape overthinking with endless fun. Challenge yourself, and enjoy immersive gameplay. 
        Indulge in our game designed to provide a delightful break from the chaos. 
        Dive into the world of entertainment and relaxation at Rechill, where excitement awaits your every move.  
      </DirectionalContainer>
    </div>
  );
}
