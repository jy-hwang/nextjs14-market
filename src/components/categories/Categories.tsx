import React from 'react'
import { FaCar, FaMobileAlt } from 'react-icons/fa'
import { GiLargeDress, GiLipstick, GiTie, GiWashingMachine } from 'react-icons/gi'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { TbSofa } from 'react-icons/tb'

export const categories = [
    {
        label: '디지털기기',
        path: 'digital',
        icon: FaMobileAlt,
        description: '디지털 카테고리입니다.'
    },
    {
        label: '생활가전',
        path: 'appliances',
        icon: GiWashingMachine,
        description: '생활가전 카테고리입니다.'
    },
    {
        label: '가구/인테리어',
        path: 'interior',
        icon: TbSofa,
        description: '가구/인테리어 카테고리입니다.'
    },
    {
        label: '여성의류',
        path: 'women-clothing',
        icon: GiLargeDress,
        description: '여성의류 카테고리입니다.'
    },
    {
        label: '남성패션/잡화',
        path: 'men-fashion',
        icon: GiTie,
        description: '남성패션/잡화 카테고리입니다.'
    },
    {
        label: '뷰티/미용',
        path: 'beauty',
        icon: GiLipstick,
        description: '뷰티/미용 카테고리입니다.'
    },
    {
        label: '스포츠/레저',
        path: 'sports',
        icon: MdOutlineSportsSoccer,
        description: '스포츠/레저 카테고리입니다.'
    },
    {
        label: '중고차',
        path: 'used-car',
        icon: FaCar,
        description: '디지털 카테고리입니다.'
    },


]


const Categories = () => {
    return (
        <div>Categories</div>
    )
}

export default Categories
