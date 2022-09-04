const express = require('express')
const app = express()
const port = 3000
const { exec } = require('child_process')
const path = require('path')

const serverAddress = path.join(__dirname, 'minecraft_server.1.16.1.jar')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  const child = exec(
    `java -Xmx1024M -Xms1024M -jar ${serverAddress} nogui`,
    (error, stdout, stderr) => {
      console.log('load.')

      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)

      if (error !== null) {
        console.log('exec error: ' + error)
      }
    }
  )
})
