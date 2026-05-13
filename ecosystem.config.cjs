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
      out_file: './logs/9router-out.log',
      error_file: './logs/9router-error.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
