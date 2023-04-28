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
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
        blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
        corporis sint.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Therapy session header"
        reverse
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
        blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
        corporis sint.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Game Header"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
        blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
        corporis sint.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Daily Video Header"
        reverse
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
        blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
        corporis sint.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {}}
        imageSource={ReChillLogo}
        title="Maba3ref"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
        blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
        corporis sint.
      </DirectionalContainer>
    </div>
  );
}
