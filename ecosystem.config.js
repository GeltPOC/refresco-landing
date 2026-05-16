module.exports = {
  apps: [{
    name: 'refresco-landing',
    script: 'npm',
    args: 'start -- -p 3715',
    cwd: '/home/gelt/apps/refresco-landing',
    env: {
      NODE_ENV: 'production',
      PORT: 3715,
    },
  }],
}
