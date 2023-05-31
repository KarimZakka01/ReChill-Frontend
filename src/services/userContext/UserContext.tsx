import { createContext, useContext, useEffect, useState } from 'react';

export interface User {

    firstName: string,
    lastName: string,
    gender: "Male" | "Female",
    phoneNumber: string,
    location: string,
    email: string,
    password: string,
    dob: Date,
    userType: "Therapist" | "Standard" | "Admin"
}

interface UserContextValue {
  isLoggedIn: boolean,
  user: User | null;
  setUser: (user: User | null, isLoggedIn: boolean) => void;
  setUserAndLoginStatus: (user: User | null, loggedIn: boolean) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function useUserContext(): UserContextValue {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Load user information from local storage on component mount
    const storedUser = localStorage.getItem('user');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUser && storedIsLoggedIn) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
    }
  }, []);
  
  function setUserAndLoginStatus(user: User | null, loggedIn: boolean) {
    setUser(user);
    setIsLoggedIn(loggedIn);

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', JSON.stringify(loggedIn));
    
  }

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, setUserAndLoginStatus }}>
      {children}
    </UserContext.Provider>
  );
}
