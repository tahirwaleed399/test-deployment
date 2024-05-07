'use client';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react'
import { IoArrowBack } from 'react-icons/io5';

const BackArrow = ({link}:any) => {

    const locale= useLocale();

  return (
    <div>
        <Link href={`/${locale}/${link}`} className=' inline-block'>
      <IoArrowBack fontSize={30}   />
      </Link>
    </div>
  )
}

export default BackArrow