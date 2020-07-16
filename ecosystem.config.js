module.exports = {
  apps: [
    {
      script: 'dist/index.js',
      name: 'Chef-Bot',
      env: {
        NODE_ENV: 'development',
        watch: 'src/**',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
