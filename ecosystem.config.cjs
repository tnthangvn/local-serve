module.exports = {
  apps: [
    {
      name: '9router',
      script: '9router',
      args: '-p 9999',
      interpreter: 'none',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
