'use client'

import { PRODUCT_PER_PAGE } from '@/types/constants';
import { useSearchParams } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import qs from 'query-string'
import Link from 'next/link';
// interface PaginationLinkProps{
//     children: React.ReactNode
// }

type PaginationLinkProps ={
    page?: number | string;
    active?: boolean;
    disabled?: boolean;
} & PropsWithChildren;

const PaginationLink = ({ page, children, ...props } : PaginationLinkProps) => {

    const params = useSearchParams();
    
    const limit = PRODUCT_PER_PAGE;

    const skip = page ? (Number(page) - 1) * limit : 0;

    let currentQuery = {};

    if(params){
        currentQuery = qs.parse(params.toString());
    }

    // we use existing data from router query, we just modify the page
    const updatedQuery: any ={
        ...currentQuery,
        page,
        skip,
    }

  return (
    <Link
    href={{ query:updatedQuery }}
    className={`
    p-2
    text-2xl
    ${props.active ? 'font-bold text-blue-500' : 'text-gray-500'}
    ${props.disabled ? 'pointer-events-none text-gray-200' : ''}
    `}
    >{children}</Link>
  )
}

export default PaginationLink
