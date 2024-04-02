import { createHashRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../layout/Layout';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Layout />,
      },
    ],
  },
]);

export default router;
