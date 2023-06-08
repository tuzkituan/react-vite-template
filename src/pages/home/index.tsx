import { logout } from '@/features/authentication/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import reactLogo from '@assets/react.svg';
import { Button, Tabs } from 'antd';
import './index.less';
import viteLogo from '/vite.svg';

function Home() {
  const currentUser: any = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const _renderHome = () => {
    return (
      <div className="home-container">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div>
          <h1>HR-OS SKELETON</h1>
          {currentUser ? (
            <>
              <h2>Hello, {currentUser?.legalName}</h2>
              <Button onClick={handleLogout} type="primary" danger>
                Logout
              </Button>
            </>
          ) : null}
          <p>Built by HR-OS Team</p>
        </div>
      </div>
    );
  };
  return (
    <Tabs
      activeKey="home"
      items={[
        {
          key: 'home',
          label: 'Home',
          children: _renderHome(),
        },
      ]}
      className="Home"
    ></Tabs>
  );
}

export default Home;
