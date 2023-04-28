import { About } from '@pages/about';
import Error from '@pages/error';
import { Landing } from '@pages/landing';
import { Login } from '@pages/login';
import Root from '@pages/root';
import { Services } from '@pages/services';
import { Signup } from '@pages/signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export interface IRouterProps {}

const router = createBrowserRouter([
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
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
