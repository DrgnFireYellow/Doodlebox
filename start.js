const { exec } = require("child_process")
exec('npx http-server -p 80', (stdout) => {
  console.log(stdout)
  console.log("doodlebox is running on port 80")
})
