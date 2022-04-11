import { useState, useEffect } from 'react'
import Products from 'api/products.json'
import ProductItem from './ui/ProductItem';
export default function Favorites() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(Products);
    }, [])
    return (
        <div className="container mx-auto">
            <h3 className="text-sm font-semibold mb-3 px-4 md:px-0">Favoriler</h3>
            <div className='grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4  gap-0.1 rounded-lg overflow-hidden'>
                {products.length && products.map((product, index) => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    )
}
