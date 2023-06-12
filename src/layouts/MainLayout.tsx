import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div id="sub-app">
      <Outlet />
    </div>
  );
};

export default MainLayout;
