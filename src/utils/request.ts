import axios from 'axios';
import { API_KEYS, PROXY } from '../config/proxy';
import { getToken } from './token';

const codeMessage = {
  200: 'The server successfully returned the requested data.',
  201: 'New or modified data is successful.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'Delete data successfully.',
  400: 'The request was sent with an error.The server did not perform any operations to create or modify data.',
  401: 'The user does not have permission (token, username, password is incorrect).',
  403: 'User is authorized, but access is forbidden.',
  404: 'The request made is for a record that does not exist and the server is not operating.',
  406: 'The format of the request is not available.',
  410: 'The requested resource is permanently deleted and will not be obtained again.',
  422: 'When creating an object, a validation error occurred.',
  500: 'The server has an error, please check the server.',
  502: 'Gateway error.',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained.',
  504: 'The gateway timed out.',
};

const errorHandler = (error: any) => {
  const { response } = error;
  const { status, statusText, config: { url } = {} } = response || {};

  if (status) {
    const errorText = codeMessage[status] || statusText;
    // notification.error({
    //   message: `Request error ${status}: ${url}`,
    //   description: errorText,
    // });
  } else if (!response) {
    // notification.error({
    //   description: 'Your network is abnormal and cannot connect to the server',
    //   message: 'Network anomaly',
    // });
  }

  return { statusCode: response?.status, message: response?.statusText };
};

const request = async (
  url: string,
  options: any,
  apiKey = API_KEYS.BASE_API,
) => {
  const {
    method = 'POST',
    data = {},
    params = {},
    responseType = '',
  } = options;

  const token = data.token || getToken();
  const { cancelToken = null } = data;

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
  };

  const paramsTemp = { ...params };
  delete paramsTemp.cancelToken;

  const instance = axios.create({
    baseURL: PROXY[apiKey],
    headers,
    params: paramsTemp,
    cancelToken,
  });

  instance.interceptors.request.use(
    (config) => {
      if (responseType) {
        config.responseType = responseType;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      return Promise.reject(error);
    },
  );
  try {
    delete data.cancelToken;
    let res: any;
    switch (method) {
      case 'GET':
        res = await instance.get(url, data);
        break;

      case 'POST':
        res = await instance.post(url, data);
        break;

      case 'PUT':
        res = await instance.put(url, data);
        break;

      case 'PATCH':
        res = await instance.patch(url, data);
        break;

      case 'DELETE':
        res = await instance.delete(url, data);
        break;

      default:
        break;
    }

    return res.data;
  } catch (e) {
    const isCancel = axios.isCancel(e);
    return isCancel ? null : errorHandler(e);
  }
};

export default request;
