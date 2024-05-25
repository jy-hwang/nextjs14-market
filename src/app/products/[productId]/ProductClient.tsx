'use client'

import { Product, User } from '@prisma/client';
import React from 'react'

interface ProductClientProps{
    product: Product & { user: User} | null;
    currentUser?: User | null;
}

const ProductClient = ({ product,currentUser }: ProductClientProps) => {
    return (
        <div>ProductClient</div>
    )
}

export default ProductClient
