import DirectionalContainer from '@components/directional-container';
import ReChillLogo from '@assets/images/chicken.png';
import { useNavigate } from 'react-router-dom';

import './services.styles.css';
export interface IServicesProps {}

export function Services(props: IServicesProps) {
  const navigate = useNavigate();

  return <div className="services"><DirectionalContainer
  action={() => { navigate('/therapy/book')}}
  imageSource={ReChillLogo}
  title="Book a Session"
  buttonText='Book Now'
>
Our experienced and empathetic licensed therapists provide a safe and confidential 
space to explore your thoughts and emotions. Embrace the support you deserve. 
Book your therapy session now and embark on a transformative journey of 
self-discovery and personal growth.
</DirectionalContainer>
<DirectionalContainer
  action={() => {navigate('/personalitytest')}}
  imageSource={ReChillLogo}
  title="Take a Test"
  reverse
  buttonText='Start Now'
>
Personality Test: Discover the depths of your true self. Gain profound 
insights into your personality traits and tendencies. Uncover the driving
 forces behind your thoughts and behaviors. Embrace self-awareness and unlock 
 the path to personal growth. Take our comprehensive personality test today 
 and embark on a transformative journey of self-discovery. 
</DirectionalContainer>
<DirectionalContainer
  action={() => {}}
  imageSource={ReChillLogo}
  title="Watch a Video"
  buttonText='Watch Now'
>
Fuel your soul with daily inspiration. Immerse yourself in a world of captivating videos 
that awaken your inner potential. Explore thought-provoking content that ignites curiosity,
 sparks creativity, and nurtures personal growth. Let our handpicked selection of daily 
 videos be your source of motivation, empowerment, and self-discovery.
</DirectionalContainer>
<DirectionalContainer
  action={() => {navigate('/game')}}
  imageSource={ReChillLogo}
  title="Play a game"
  reverse
  buttonText='Play Now'
>
Unleash your inner adventurer. Take your mind off things and embark on an endless quest of excitement and challenge. 
Lose yourself in the captivating realm of our addictive game, where time fades away 
and pure enjoyment takes center stage. Push your limits and 
experience the thrill of surpassing your own achievements. Get ready to immerse
 yourself in an addictive gaming experience like no other."
</DirectionalContainer>
<DirectionalContainer
  action={() => {}}
  imageSource={ReChillLogo}
  title="Talk to Chatbot"
  buttonText='Chat Now'
>
Your friendly guide on the path to clarity. Meet our knowledgeable chatbot, 
ready to provide instant support and guidance whenever you need it. 
Engage in meaningful conversations, ask questions, and receive personalized 
insights. Embrace the power of AI assistance and embark on a transformative journey towards
  a calmer, more balanced mind.
</DirectionalContainer></div>;
}
