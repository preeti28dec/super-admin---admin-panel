import { lazy } from 'react';

const AllRoutes = [
  {
    path: 'dashbord',
    component: lazy(() => import('../components/pages/dashboard')),
    exact: true
  },
  {
    path: 'login',
    component: lazy(() => import('../components/login-signup/login')),
    exact: true
  }
];

export default AllRoutes;