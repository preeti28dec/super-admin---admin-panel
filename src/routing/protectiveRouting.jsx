
import { Route, Routes } from 'react-router-dom';
import AllRoutes from '../routing/authenticationRouting'; // Route list

const ProtectedRoutes = () => (
  <Routes>
      {AllRoutes.map(({ component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
  </Routes>
);

export default ProtectedRoutes;