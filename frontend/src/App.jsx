import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import MainAndShop from './pages/MainAndShop';
import Board from './pages/Board';
import About from './pages/About';
import MyPage from './pages/MyPage';
import Cart from './pages/Cart';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <MainAndShop /> },
      { path: '/board', element: <Board /> },
      { path: '/about', element: <About /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/cart', element: <Cart /> },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
