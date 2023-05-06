import { TextField } from '@components/textfield';
import * as React from 'react';
import './login.styles.css';
import { Button } from '@components/button';
import { Link } from 'react-router-dom';
import { login } from "@services/apiService";
import { useState } from 'react';
export interface ILoginProps {}



export function Login(props: ILoginProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log(1);
    
    event.preventDefault();

    try {
      const data = await login(email, password);
      console.log(data);
    } catch (error) {
      console.error(error);
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
      <TextField type="text" label="Email" onChange={(event) => setEmail(event.target.value)}/>
      <TextField type="password" label="Password" onChange={(event) => setPassword(event.target.value)}/>
      <Button size="lg">Login</Button>
      </div>
    </div>
    </form>
  );
}
