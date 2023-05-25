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
  title="Therapy sessions"
  buttonText='Book a session'
>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
  magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
  blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
  corporis sint.
</DirectionalContainer>
<DirectionalContainer
  action={() => {}}
  imageSource={ReChillLogo}
  title="Take your mind off"
  reverse
  buttonText='Show me the videos'
>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
  magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
  blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
  corporis sint.
</DirectionalContainer>
<DirectionalContainer
  action={() => {}}
  imageSource={ReChillLogo}
  title="Play some fun games"
  buttonText='Play game !'
>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
  magnam amet facere. Cumque nam cupiditate fugit eum sed nulla explicabo
  blanditiis, molestiae voluptatum eligendi nisi, numquam iusto omnis
  corporis sint.
</DirectionalContainer>
<DirectionalContainer
  action={() => {}}
  imageSource={ReChillLogo}
  title="Unwind your mind"
  reverse
  buttonText='Go to videos'
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
</DirectionalContainer></div>;
}
