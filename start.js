const { exec } = require("child_process")
exec('npx http-server', (stdout) => {
  console.log(stdout)
  console.log("doodlebox is running on port 8080")
})