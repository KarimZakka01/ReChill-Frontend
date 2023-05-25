import { Button } from '@components/button';
import { TextField } from '@components/textfield';
import { useNavigate } from 'react-router-dom';
import './profile.styles.css';
import { useState } from 'react';
import { updateProfile } from "@services/apiService";
import { User, useUserContext } from '@services/userContext/UserContext';
export interface IProfileProps {}
export interface ProfileForm {
  phoneNumber: string,
  location: string,
  email: string,
  password: string,
  newPassword: string,
  confirmNewPassword: string,
}

export function Profile(props: IProfileProps) {
    let navigate = useNavigate();
    const {setUserAndLoginStatus} = useUserContext();
    const { user} = useUserContext();
    const [formValues, setFormValues] = useState<ProfileForm>({phoneNumber: user?.phoneNumber ?? "", location: user?.location ?? "",email: user?.email ?? "", password: "", newPassword: "", confirmNewPassword: ""});
    const [errMessage, setErrMessage] = useState("");
    async function handleSubmit(event: any) {
      
      event.preventDefault();
  
      try {
        const data = await updateProfile(formValues);  
        console.log(data);
              
        data.body?.getReader().read().then(resp => {
          const chunk = new TextDecoder().decode(resp.value);
          let formattedResp = JSON.parse(chunk);
          const user : User =  formattedResp.userInfo
          setUserAndLoginStatus(user,true)
          navigate('/');
        });
      } catch (error) {
        console.error(error);
      }
    }

  return (
      <div className="profile">
        <label>{errMessage}</label>
        <div className="profile-profile-form">
          <TextField type="text" label="Phone number" value={formValues.phoneNumber} onChange={(event) => setFormValues({...formValues, phoneNumber: event.target.value})}/>
          <TextField type="text" label="Location" value={formValues.location} onChange={(event) => setFormValues({...formValues, location: event.target.value})}/>
          <TextField type="text" label="Email" value={formValues.email} onChange={(event) => setFormValues({...formValues, email: event.target.value})}/>
          <TextField type="password" label="Password" value={formValues.password} onChange={(event) => setFormValues({...formValues, password: event.target.value})}/>
          <TextField type="password" label="New Password" value={formValues.newPassword} onChange={(event) => setFormValues({...formValues, newPassword: event.target.value})}/>
          <TextField type="password" label="Confirm New Password" value={formValues.confirmNewPassword} onChange={(event) => setFormValues({...formValues, confirmNewPassword: event.target.value})}/>
          <Button onClick= {(event)=> {handleSubmit(event)}} size="lg">Update</Button>
        </div>
      </div>
  );
}
