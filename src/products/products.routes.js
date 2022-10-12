const routes = require('express').Router()
const productsServices = require('./products.services')

routes.get('/', productsServices.getAllProducts)
routes.get('/:id', productsServices.getProductByID)
routes.post('/', productsServices.postProduct)
routes.delete('/:id', productsServices.deleteProduct)
routes.patch('/:id', productsServices.patchProduct)



module.exports = routes