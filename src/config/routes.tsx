import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import ErrorPage from '../error-page';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/home';
import Login from '../pages/login';
import PrivateRoute from '../components/PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route
        index
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        errorElement={<ErrorPage />}
      />
      <Route path="/login/*" element={<Login />} />
    </Route>,
  ),
  {
    basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? '/react-sub-app' : '/',
  },
);

export default router;
