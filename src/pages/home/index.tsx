import { Tabs } from 'antd';
import reactLogo from '../../assets/react.svg';
import { useAppSelector } from '../../config/hooks';
import { selectCurrentUser } from '../../features/userSlice';
import './index.scss';
import viteLogo from '/vite.svg';

function Home() {
  const currentUser = useAppSelector(selectCurrentUser);
  // console.log('🚀  ~ currentUser:', currentUser);

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

          {currentUser ? <h2>Hello, {currentUser?.legalName}</h2> : null}
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
