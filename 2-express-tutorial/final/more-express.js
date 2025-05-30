const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./2-express-tutorial/public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './2-express-tutorial/navbar-app/index.html'))
//   adding to static assets
//   SSR(server side rendering) template
// })

app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})