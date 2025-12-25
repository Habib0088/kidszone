import React from 'react';
// import productsList from "@/data/toys.json"
// import ProductCard from './ProductCard';
import { getProducts } from '@/action/server/product';
import ProductCard from '@/components/ProductCard';
const Products = async() => {
    
    const productItems=await getProducts()
    // console.log(productItems);
    
    
    return (
        <div className='md:w-11/12 mx-auto'>
            
        <h1 className='text-center text-6xl font-bold mb-8'>Products</h1>
     <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
          {
        productItems.map(product=>(<ProductCard key={product._id} product={product}></ProductCard>))
       }
     </div>
        </div>
    );
};

export default Products;