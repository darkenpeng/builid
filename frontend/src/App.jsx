import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
};

export default App;
