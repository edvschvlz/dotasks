import React from 'react';

import OtherRoutes from './OtherRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuth } from '../contexts/Auth';

const Routes = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <AuthRoutes />;
};

export default Routes;
