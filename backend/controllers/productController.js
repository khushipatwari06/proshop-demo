import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts =asyncHandler(async(req,res) =>{ 
    const products = await Product.find({});
    res.json(products);
});
//@desc Fetch a products
//@route GET /api/products/:id
//@access Public

const getProductById =asyncHandler(async(req,res) =>{ 
    const getProducts =asyncHandler(async(req,res) =>{ 
        const products = await Product.find({});
        res.json(products);
    });
});

export {getProducts,getProductById};