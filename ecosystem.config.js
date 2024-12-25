module.exports = {
    apps: [{
      name: "notebook-runner",
      script: "/usr/bin/python3",
      args: "/path/to/your/notebook_runner.py",
      cron_restart: "*/5 * * * *",  // Runs every 5 minutes
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production"
      }
    }]
  };