const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test-select', (req, res) =>{
  res.send('Vamos tentar dar um select na base')
  console.log('Trying to conect to', config.server)

})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:%s', port)
})
