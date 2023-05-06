import { Button } from '@components/button';
import { Dropdown, DropdownItem } from '@components/dropdown';
import { TextField } from '@components/textfield';
import { Link } from 'react-router-dom';
import './signup.styles.css';
import { useState } from 'react';
import { signup } from "@services/apiService";


export interface ISignupProps {}
export interface signupForm {
  firstName: string,
  lastName: string,
  gender: "Male" | "Female",
  phoneNumber: string,
  location: string,
  email: string,
  password: string,
  dob: Date,
  userType: "Therapist" | "Standard"
}

export function Signup(props: ISignupProps) {

    const [formValues, setFormValues] = useState<signupForm>({firstName: "",lastName: "", gender: "Male",phoneNumber: "", location: "",email: "", password: "", dob: new Date(),userType:"Standard"});
  
    async function handleSubmit(event: any) {
      
      event.preventDefault();
  
      try {
        const data = await signup(formValues);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

  return (
      <div className="signup">
        <div className="signup-signup-button-group">
          <Button>Sign up</Button>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
        <div className="signup-signup-form">
          <TextField type="text" label="First name" value={formValues.firstName} onChange={(event) => setFormValues({...formValues, firstName: event.target.value})}/>
          <TextField type="text" label="Last name" value={formValues.lastName} onChange={(event) => setFormValues({...formValues, lastName: event.target.value})}/>
          <TextField type="Date" label="Date of birth" value={formValues.dob as unknown as string} onChange={(event) => setFormValues({...formValues, dob: event.target.value as unknown as Date})}/>

          <TextField type="text" label="Phone number" value={formValues.phoneNumber} onChange={(event) => setFormValues({...formValues, phoneNumber: event.target.value})}/>
          <TextField type="text" label="Location" value={formValues.location} onChange={(event) => setFormValues({...formValues, location: event.target.value})}/>
          <TextField type="text" label="Email" value={formValues.email} onChange={(event) => setFormValues({...formValues, email: event.target.value})}/>
          <TextField type="password" label="Password" value={formValues.password} onChange={(event) => setFormValues({...formValues, password: event.target.value})}/>
          <div className="signup-dropdowns">
            <Dropdown
              label="Gender"
              onChange={(value) => {
                setFormValues({...formValues, gender: value})
              }}
            >
              <DropdownItem value="Male">Male</DropdownItem>
              <DropdownItem value="Female">Female</DropdownItem>
            </Dropdown>
            <Dropdown
              label="User Type"
              onChange={(value) => {
                setFormValues({...formValues, userType: value})
              }}
            >
              <DropdownItem value="Therapist">Therapist</DropdownItem>
              <DropdownItem value="Standard">Standard</DropdownItem>
            </Dropdown>
          </div>
          <Button onClick= {(event)=> {handleSubmit(event)}} size="lg">Signup</Button>
        </div>
      </div>
  );
}
