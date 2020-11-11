export const REACT_APP_GITHUB_CLIENT_ID =
  window.env && window.env.REACT_APP_GITHUB_CLIENT_ID
    ? window.env.REACT_APP_GITHUB_CLIENT_ID
    : process.env.REACT_APP_GITHUB_CLIENT_ID;

export const REACT_APP_GITHUB_CLIENT_SECRET = 
  window.env && window.env.REACT_APP_GITHUB_CLIENT_SECRET
    ? window.env.REACT_APP_GITHUB_CLIENT_SECRET
    : process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export const API_BASE = 'https://api.github.com';
