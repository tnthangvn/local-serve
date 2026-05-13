module.exports = {
  apps: [
    {
      name: 'open-design',
      script: '/home/thangtn/.nvm/versions/node/v24.15.0/bin/pnpm',
      // Lệnh thực thi: pnpm + tools-dev + các params
      args: 'tools-dev run web --daemon-port 17456 --web-port 17573',
      // Đứng ở thư mục gốc của project để pnpm quản lý được các workspace/tools
      cwd: '/var/www/free-time/design/open-design',
      interpreter: 'none',
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
        // Cực kỳ quan trọng: Ép môi trường dùng Node 24 và trỏ thẳng vào bin của tools/dev
        PATH: '/home/thangtn/.nvm/versions/node/v24.15.0/bin:/var/www/free-time/design/open-design/tools/dev/bin:' + process.env.PATH
      },
      out_file: './logs/open-design-pnpm-out.log',
      error_file: './logs/open-design-pnpm-error.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
