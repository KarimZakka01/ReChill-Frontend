import { About } from '@pages/about';
import Error from '@pages/error';
import { Landing } from '@pages/landing';
import { Login } from '@pages/login';
import Root from '@pages/root';
import { Services } from '@pages/services';
import { Signup } from '@pages/signup';
import { Contact } from '@pages/contact';
import { PersonalityTestPage } from '@pages/personalitytest';
import { TherapySessionPage } from '@pages/therapy';
import { GamePage } from '@pages/services/game/game';
import {  RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import {  useUserContext } from '@services/userContext/UserContext';
import { Profile } from '@pages/profile';

export interface IRouterProps {}

const routes : RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/therapy/book',
        element: <TherapySessionPage />,
      },
      {
        path: '/personalitytest',
        element: <PersonalityTestPage />,
      },
      {
        path: '/game',
        element: <GamePage />,
      },
    ],
  },
];

export default function Router() {

  const { user } = useUserContext();
  const restrictedPaths: string[] = ['/about']; 

  const filterRoutes = (routes: RouteObject[]): RouteObject[] => {
    
    if (!user) {
      return routes.filter(route => route.path && !restrictedPaths.includes(route.path)); // Exclude restricted paths when no user is logged in
    }
    if (user.userType === 'Therapist') {
      return routes; // Allow all routes for Therapists
    }
    return routes;
  };

  const filteredRoutes = filterRoutes(routes);

  return (
    <>
      <RouterProvider router={createBrowserRouter(filteredRoutes)} />
    </>
  );
}
