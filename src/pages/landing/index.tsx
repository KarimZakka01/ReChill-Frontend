import * as React from "react";
import "./landing.styles.css";
import landingFace from "@assets/images/landingFace.png";
import landingBirds from "@assets/images/landingBirds.png";
import landingClouds from "@assets/images/landingCloud.png";
import landingLeaves from "@assets/images/landingLeaves.png";
import landingSea from "@assets/images/landingSea.png";
import DirectionalContainer from "@components/directional-container";
import { useNavigate } from "react-router-dom";
export interface ILandingProps {}

export function Landing(props: ILandingProps) {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <DirectionalContainer
        action={() => {
          navigate("/services");
        }}
        imageSource={landingFace}
        title="Unwind Your Mind"
        buttonText="Read More"
      >
        Find tranquility and peace as we guide you on a journey towards a
        calmer, more balanced state of mind. It's time to quiet your mind and
        embark on the path to inner harmony. Join us on this transformative
        adventure at Rechill.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {
          navigate("/services");
        }}
        imageSource={landingClouds}
        title="Therapy Sessions"
        reverse
        buttonText="Discover Now"
      >
        Take control of overthinking and embark on a journey towards inner peace
        and a balanced mind. Book your confidential session today at Therapy
        Sessions, nd discover the transformative power of professional guidance.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {
          navigate("/services");
        }}
        imageSource={landingBirds}
        title="Personality Test"
        buttonText="Discover Now"
      >
        Unlock self-awareness for a mindful life. Gain profound insights into
        your unique traits and tendencies. Explore the depths of your
        personality and understand why overthinking may affect you. Take our
        comprehensive test and uncover the keys to a more balanced existence.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {
          navigate("/services");
        }}
        imageSource={landingSea}
        title="Daily Videos"
        reverse
        buttonText="Discover Now"
      >
        Inspiring moments to uplift your day. Start each morning with
        motivational videos that ignite your spirit and fuel positivity.
        Discover wisdom, embrace new perspectives, and embark on a journey of
        personal growth.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => {
          navigate("/services");
        }}
        imageSource={landingLeaves}
        title="Endless Game"
        buttonText="Discover Now"
      >
        Escape overthinking with endless fun. Challenge yourself, and enjoy
        immersive gameplay. Indulge in our game designed to provide a delightful
        break from the chaos. Dive into the world of entertainment and
        relaxation at Rechill, where excitement awaits your every move.
      </DirectionalContainer>
    </div>
  );
}
