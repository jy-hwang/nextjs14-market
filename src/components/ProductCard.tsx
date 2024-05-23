'use client';

import { Product, User } from '@prisma/client';
import React from 'react'

interface ProductCardProps {
    data: Product;
    currentUser: User | null;
}

const ProductCard = ({ data, currentUser }: ProductCardProps) => {
    return (
        <div>ProductCard</div>
    )
}

export default ProductCard
