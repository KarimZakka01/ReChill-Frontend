import { Button } from '@components/button';
import './directional-container.styles.css';

export interface IDirectionalContainerProps extends React.PropsWithChildren {
  title: string;
  imageSource: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
  reverse?: boolean;
}

export default function DirectionalContainer({
  title,
  imageSource,
  action,
  children,
  reverse = false,
}: IDirectionalContainerProps) {
  return (
    <div
      className={`directional-container ${
        reverse ? 'directional-container-reversed' : ''
      }`}
    >
      <div className="directional-container-text">
        <div>
          <h1 className="directional-container-title">{title}</h1>
          <p className="directional-container-description">{children}</p>
        </div>
        <div>
          <Button size="xl" onClick={action}>
            Get Started
          </Button>
        </div>
      </div>
      <img className="directional-container-image" src={imageSource} alt="" />
    </div>
  );
}
