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
import { GamePage } from '@pages/services/game';
import { VideoPage } from '@pages/youtube';
import { AdminPage } from '@pages/admin';
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
      {
        path: '/video',
        element: <VideoPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
];

export default function Router() {

  const { isLoggedIn, user } = useUserContext();
  const restrictedPaths: string[] = ['/about']; 

  const filterRoutes = (routes: RouteObject[]): RouteObject[] => {
    let children = routes[0].children ?? [];
    

    if (!isLoggedIn) {
      children =  children.filter(route => route.path && !restrictedPaths.includes(route.path)); // Exclude restricted paths when no user is logged in
    }
    
    if (isLoggedIn && user?.userType === 'Therapist') {
      return routes; // Allow all routes for Therapists
    }
    
  
    routes[0].children = children;
    return routes;
  };

  const filteredRoutes = filterRoutes(routes);

  return (
    <>
      <RouterProvider router={createBrowserRouter(filteredRoutes)} />
    </>
  );
}
