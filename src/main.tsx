import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import {
  QiankunProps,
  qiankunWindow,
  renderWithQiankun,
} from 'vite-plugin-qiankun/dist/helper';
import router from './config/routes';
import { store } from './config/store';
import { setToken } from './utils/token';
import './index.css';

function renderApp(props: any): void {
  const { container, token } = props;
  if (token) {
    setToken(token);
    localStorage.setItem('is_sub_app', 'true');
  }

  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router} />
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
}
