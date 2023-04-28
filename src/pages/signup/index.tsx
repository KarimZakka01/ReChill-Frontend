import { Button } from '@components/button';
import { Dropdown, DropdownItem } from '@components/dropdown';
import { TextField } from '@components/textfield';
import { Link } from 'react-router-dom';
import './signup.styles.css';
export interface ISignupProps {}

export function Signup(props: ISignupProps) {
  return (
    <div className="signup">
      <div className="signup-signup-button-group">
        <Button>Sign up</Button>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div className="signup-signup-form">
        <TextField type="text" label="First name" />
        <TextField type="text" label="Last name" />
        <TextField type="text" label="Date of birth" />

        <TextField type="text" label="Phone number" />
        <TextField type="text" label="Location" />
        <TextField type="text" label="Email" />
        <TextField type="password" label="Password" />
        <div className="signup-dropdowns">
          <Dropdown
            label="Gender"
            onChange={(value) => {
              console.log(value);
            }}
          >
            <DropdownItem value="Male">Male</DropdownItem>
            <DropdownItem value="Female">Female</DropdownItem>
          </Dropdown>
          <Dropdown
            label="User Type"
            onChange={(value) => {
              console.log(value);
            }}
          >
            <DropdownItem value="Therapist">Therapist</DropdownItem>
            <DropdownItem value="Standard">Standard</DropdownItem>
          </Dropdown>
        </div>
        <Button size="lg">Signup</Button>
      </div>
    </div>
  );
}
