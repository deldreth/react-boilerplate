// See https://jsonplaceholder.typicode.com/
const DEVELOPMENT = {
  api_url: 'https://jsonplaceholder.typicode.com'
};

const PRODUCTION = {
  api_url: 'https://jsonplaceholder.typicode.com'
};

export default (process.env.NODE_ENV === 'production') ? PRODUCTION : DEVELOPMENT;
