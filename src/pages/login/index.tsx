import { TextField } from "@components/textfield";
import * as React from "react";
import "./login.styles.css";
import { Button } from "@components/button";
import { Link } from "react-router-dom";
import { login } from "@services/apiService";
import { useState } from "react";
import { User, useUserContext } from "@services/userContext/UserContext";
import { useNavigate } from "react-router-dom";

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  const { setUserAndLoginStatus } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await login(email, password);
      if (response.ok) {
        const data = await response.json();
        const user: User = data.userInfo;
        setUserAndLoginStatus(user, true);
        navigate("/");
      } else if (response.status === 401) {
        setError("Wrong email or password!");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <div className="login-signup-button-group">
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
          <Button>Login</Button>
        </div>
        <div className="login-signup-form">
          <TextField
            type="text"
            label="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button size="lg">Login</Button>
          {error && <div className="error">{error}</div>}{" "}
          {/* Display error if it exists */}
        </div>
      </div>
    </form>
  );
}
