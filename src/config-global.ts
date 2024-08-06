// routes
import { PATH_DASHBOARD } from "./routes/paths";

// API
// ----------------------------------------------------------------------

// export const HOST_API_KEY = process.env.REACT_APP_HOST_API_KEY || "";
// export const HOST_API_KEY = "http://localhost:8080";
export const HOST_API_KEY = "http://192.168.0.29:8080";

export const URL = process.env.REACT_APP_CONTEXTPATH;
export const MAIN_PAGE_URL = process.env.MAIN_PAGE_URL;

// export const FIREBASE_API = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// export const COGNITO_API = {
//   userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
//   clientId: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
// };

// export const AUTH0_API = {
//   clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
//   domain: process.env.REACT_APP_AUTH0_DOMAIN,
// };

export const MAP_API = process.env.REACT_APP_MAPBOX_API;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.general.app; // as '/dashboard/app'

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 240, // 260
  W_DASHBOARD: 210, // 280
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 26, // 48
  H_DASHBOARD_ITEM_SUB: 23, // 36
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 22, // 24
  NAV_ITEM_HORIZONTAL: 22, // 22
  NAV_ITEM_MINI: 22,
};
