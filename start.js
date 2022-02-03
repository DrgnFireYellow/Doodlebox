const { exec } = require("child_process")
exec('npx http-server -p 8080', (stdout) => {
  console.log(stdout)
  console.log("doodlebox is running on http://localhost:8080")
})
