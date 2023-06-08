import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {
  QiankunProps,
  qiankunWindow,
  renderWithQiankun,
} from 'vite-plugin-qiankun/dist/helper';
import router from './config/routes';
import { setAuth } from './features/authentication/authSlice';
import './index.css';
import store, { persistor } from './store/configureStore';
import { ConfigProvider } from 'antd';

function renderApp(props: any): void {
  const { container, token } = props;
  if (token) {
    store.dispatch(setAuth({ token, expiresIn: 0, user: null }));
  }

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            hashed: false,
            token: {
              fontFamily:
                'Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif',
              colorPrimary: '#2d6cf9',
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </PersistGate>
    </Provider>,
    container
      ? container.querySelector('#root-2')
      : document.querySelector('#root-2'),
  );
}

renderWithQiankun({
  mount(props: any) {
    console.log('mount');
    renderApp(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('unmount');
    const { container } = props;
    const mountRoot = container?.querySelector('#root-2');
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector('#root-2'),
    );
  },
  update: function (props: QiankunProps): void | Promise<void> {
    throw new Error('Function not implemented.');
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  renderApp({});
  // ReactDOM.render(
  //   <span>This is a sub-app of HR-OS. Please run in the main app.</span>,
  //   document.querySelector('#root-2'),
  // );
}
