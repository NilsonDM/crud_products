const Products = require('../models/products.models')
const uuid = require('uuid')


const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}

const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
    return newProduct
}

const getProductByID = async (id) => {
    const data = await Products.findOne(
        {
            where:{
                id
            }
        }
    )
    return data
}

const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where:{
            id: id
        }
    })
    return response
}

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where:{
            id: id
        }
    })
    return deleteProduct
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductByID,
    editProduct,
    deleteProduct
}