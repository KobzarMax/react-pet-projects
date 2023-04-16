import Home from '../view/Home';
import Layout from '../view/Layout';
import TodoWrapper from '../view/TodoWrapper';
import ErrorPage from '../view/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "todo",
          element: <TodoWrapper />,
        },
      ],
    },
]);