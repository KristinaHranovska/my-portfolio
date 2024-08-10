import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '..';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
