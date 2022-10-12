const express = require('express')
const app = express()
app.use(express.json())
const config = require('./config')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const productsRoutes = require('./products/products.routes')


db.authenticate()
    .then(()=> console.log('DB autentication succesfully'))
    .catch((err)=> console.log(err))

db.sync()
    .then(()=> console.log('DB synced'))
    .catch((err)=> console.log(err))

initModels()




app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
})

app.use('/products', productsRoutes)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})