import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import MainAndShop from './pages/MainAndShop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <MainAndShop /> },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
