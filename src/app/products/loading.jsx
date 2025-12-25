import ProductCardSkeleton from '@/components/ProductsSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
            {[...Array(10).map((_,i)=>(<ProductCardSkeleton key={i}></ProductCardSkeleton>))]}
        </div>
    );
};

export default loading;