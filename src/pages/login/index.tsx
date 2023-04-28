import { TextField } from '@components/textfield';
import * as React from 'react';
import './login.styles.css';
import { Button } from '@components/button';
import { Link } from 'react-router-dom';
export interface ILoginProps {}

export function Login(props: ILoginProps) {
  return (
    <div className="login">
      <div className="login-signup-button-group">
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
        <Button>Login</Button>
      </div>
      <div className="login-signup-form">
        <TextField type="text" label="Email" />
        <TextField type="password" label="Password" />
        <Button size="lg">Login</Button>
      </div>
    </div>
  );
}
