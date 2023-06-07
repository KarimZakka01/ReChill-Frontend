import DirectionalContainer from "@components/directional-container";
import ReChillLogo from "@assets/images/chicken.png";
import servicesTherapy from "@assets/images/servicesTherapy.png";
import servicesTest from "@assets/images/servicesTest.png";
import servicesVideo from "@assets/images/servicesVideo.png";
import servicesGame from "@assets/images/servicesGame.png";
import servicesChatbot from "@assets/images/servicesChatbot.png";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@services/userContext/UserContext";

import "./services.styles.css";
export interface IServicesProps {}

export function Services(props: IServicesProps) {
  const { isLoggedIn, user } = useUserContext();
  const navigate = useNavigate();

  // function navigateToBooking() {
  //   if (isLoggedIn && user?.userType === "Admin") {
  //     navigate("/therapy");
  //     console.log(isLoggedIn);
  //     console.log(user.userType);
  //   } else {
  //     alert("You must be signed in to access our therapists list");
  //   }
  // }

  function openChatbot() {
    if (isLoggedIn && user) {
      if ((window as any).kommunicate) {
        (window as any).kommunicate.launchConversation();
      } else {
        alert("Chatbot is not available at the moment.");
      }
    } else {
      alert("You must be signed in to access the chatbot!");
    }
  }

  function navigateToPage(path: string) {
    if (isLoggedIn) {
      navigate(path);
    } else {
      alert("You must be signed in to access this page");
    }
  }

  return (
    <div className="services">
      <DirectionalContainer
        action={() => navigateToPage("/therapy")}
        imageSource={servicesTherapy}
        title="Book a Session"
        buttonText="Book Now"
      >
        Our experienced and empathetic licensed therapists provide a safe and
        confidential space to explore your thoughts and emotions. Embrace the
        support you deserve. Book your therapy session now and embark on a
        transformative journey of self-discovery and personal growth.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => navigateToPage("/personalitytest")}
        imageSource={servicesTest}
        title="Take a Test"
        reverse
        buttonText="Start Now"
      >
        Discover the depths of your true self. Gain profound insights into your
        personality traits and tendencies. Uncover the driving forces behind
        your thoughts and behaviors. Take our comprehensive personality test
        today and embark on a transformative journey of self-discovery.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => navigateToPage("/video")}
        imageSource={servicesVideo}
        title="Watch a Video"
        buttonText="Watch Now"
      >
        Immerse yourself in a world of captivating videos that awaken your inner
        potential. Explore thought-provoking content that ignites curiosity,
        sparks creativity, and nurtures personal growth. Let our handpicked
        selection of daily videos be your source of motivation, empowerment, and
        self-discovery.
      </DirectionalContainer>
      <DirectionalContainer
        action={() => navigateToPage("/game")}
        imageSource={servicesGame}
        title="Play a game"
        reverse
        buttonText="Play Now"
      >
        Take your mind off things and embark on an endless quest of excitement
        and challenge. Lose yourself in the captivating realm of our addictive
        game, where time fades away and pure enjoyment takes center stage. Get
        ready to immerse yourself in an addictive gaming experience like no
        other.
      </DirectionalContainer>
      <DirectionalContainer
        action={openChatbot}
        imageSource={servicesChatbot}
        title="Talk to Chatbot"
        buttonText="Chat Now"
      >
        Meet our knowledgeable chatbot, ready to provide instant support and
        guidance whenever you need it. Engage in meaningful conversations, ask
        questions, and receive personalized insights. Embrace the power of AI
        assistance and embark on a transformative journey towards a calmer, more
        balanced mind.
      </DirectionalContainer>
    </div>
  );
}
