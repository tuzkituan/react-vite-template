import request from '../utils/request';

export async function getMeService(data: any) {
  return request('https://devhrms.paxanimi.ai/api/usermap/get-current-user', {
    data,
    method: 'POST',
  });
}

export async function loginService(data: any) {
  return request('https://devhrms.paxanimi.ai/api/m-sign-in', {
    data,
    method: 'POST',
  });
}
