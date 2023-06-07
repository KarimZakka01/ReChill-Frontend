import ReChillLogoAlt from "@assets/logos/Rechill colored logo (1).svg";
import profilLogoAlt from "@assets/logos/profile-icon.jpg";
import "./header.styles.css";
import { Logo } from "@components/logo";
import { Link } from "react-router-dom";
import { Button } from "@components/button";
import { useUserContext } from "@services/userContext/UserContext";
import { useNavigate } from "react-router-dom";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const navigate = useNavigate();
  const { isLoggedIn, user, setUserAndLoginStatus } = useUserContext();
  function logout() {
    setUserAndLoginStatus(null, false);
    navigate("/");
  }

  return (
    <div className="header">
      <Logo
        size="md"
        src={ReChillLogoAlt}
        alt="ReChill colored logo"
        onClick={() => navigate("/")}
      />
      <nav className="header-navigation-container">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        {isLoggedIn && user && user.userType === "Admin" && (
          <Link to="/admin">Admin Panel</Link>
        )}
      </nav>
      {!isLoggedIn && (
        <div className="header-action-buttons">
          <Link to="/login">
            <Button variant="text">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up for free</Button>
          </Link>
        </div>
      )}
      {isLoggedIn && user && (
        <div className="header-action-buttons">
          <Logo size="xsm" src={profilLogoAlt} alt="Profile icon" />
          <Link to="/profile">
            <Button variant="text">
              {user.firstName} {user.lastName}
            </Button>
          </Link>
          <Button variant="text" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}
