const productsControllers = require('./products.controller')


//Get all products from database
const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(400).json({message: err.message})
        })

}

//Create a new product
const postProduct = (req, res) => {
    const data = req.body
    if (data.name && data.category && data.price && data.isAvailable){
        productsControllers.createProduct(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } 
        
    
}

//Get a unique product by id
const getProductByID = (req, res) => {
    const id = req.params.id
    productsControllers.getProductByID(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({message: err.message})
        })
}

//Update a product
const patchProduct =(req, res) => {
    const id = req.params.id
    const {name, category, price, isAvailable} = req.body

    productsControllers.editProduct(id, {name, category, price, isAvailable})
        .then(response => {
            res.status(200).json({
                message: `Product with id ${id} edited succesfully`
            })
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
}

//Delete a product
const deleteProduct = (req, res) => {
    const id = req.params.id
    productsControllers.deleteProduct(id)
        .then((response) => {
            if (response) {
                res.status(200).json(response)
                
            }else{
                res.status(400).json({message: 'Invalid ID'})
            }
        })
}

module.exports = {
    getAllProducts,
    getProductByID,
    postProduct,
    patchProduct,
    deleteProduct
}