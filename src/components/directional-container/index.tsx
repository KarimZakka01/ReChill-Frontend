import { Button } from '@components/button'; //imports button component from a module located at '@components/button' 
import './directional-container.styles.css'; //imports the CSS file './directional-container.styles.css'

export interface IDirectionalContainerProps extends React.PropsWithChildren { 
  // defines the IDirectionalContainerProps interface which specifies the expected props for the DirectionalContainer component
  title: string; //title of the container
  imageSource: string; //path of the image to be displayed
  action: React.MouseEventHandler<HTMLButtonElement>; //event handler function for the button click event
  reverse?: boolean; // (? -> optional) Specifies whether to reverse the layout of the container. Defaults to false.
  buttonText?: string // text to display on the button. Defaults to "get started".
}

export default function DirectionalContainer({
  title,
  imageSource,
  action,
  children,
  reverse = false,
  buttonText = "get started"
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
            {buttonText}
          </Button>
        </div>
      </div>
      <img className="directional-container-image" src={imageSource} alt="" />
    </div>
  );
}
