// const BASE_API = 'https://stghrms.paxanimi.ai';
const BASE_API = 'https://devhrms.paxanimi.ai';

export const API_KEYS = {
  BASE_API: 'BASE_API',
  TIMESHEET_API: 'TIMESHEET_API',
  PROJECT_API: 'PROJECT_API',
  TICKET_API: 'TICKET_API',
  CUSTOMER_API: 'CUSTOMER_API',
  PAYROLL_API: 'PAYROLL_API',
  BIOMETRIC_API: 'BIOMETRIC_API',
  EXPENSO_API: 'EXPENSO_API',
  ASSET_API: 'ASSET_API',
};

export const PROXY = {
  [API_KEYS.BASE_API]: BASE_API,
  // [API_KEYS.BASE_API]: 'http://localhost:3005',
  // eslint-disable-next-line prefer-template
  [API_KEYS.TIMESHEET_API]: BASE_API + '/timesheet',
  [API_KEYS.PROJECT_API]: BASE_API,
  [API_KEYS.TICKET_API]: BASE_API,
  [API_KEYS.CUSTOMER_API]: BASE_API,
  [API_KEYS.PAYROLL_API]: BASE_API,
  [API_KEYS.BIOMETRIC_API]: BASE_API,
  [API_KEYS.EXPENSO_API]: BASE_API,
  [API_KEYS.ASSET_API]: BASE_API,
};

export const SOCKET_URL = BASE_API;
// export const SOCKET_URL = 'http://localhost:8900';
