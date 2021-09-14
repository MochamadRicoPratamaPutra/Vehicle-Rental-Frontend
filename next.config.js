module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  },
  images: {
    domains: [`${process.env.REACT_APP_API_URL}`, `${process.env.REACT_APP_BASE_URL}`],
  },
}