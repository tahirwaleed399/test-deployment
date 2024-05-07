'use client'
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useLocale, useTranslations } from "next-intl";

import 'css/prism.css'
import 'katex/dist/katex.css'
import ImageAnimation from "../canvas/ImageAnimation"
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import {  coreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allCookies } from 'contentlayer/generated'
import type {  Cookies, PrivacyPolicy } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout' 
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import BackArrow from '@/components/BackArrow'
import SimpleLayout from '@/layouts/SimpleLayout'
import CookieServerRender from "./CookieServerRender";
import Image from "next/image";


// Make sure to set the app element for accessibility reasons
Modal.setAppElement("body");

const CookiesModal = ({modalIsOpen , setModalIsOpen , cookiesData }:any) => {
 
   const locale = useLocale();


  const closeModal = () => {
    // Close the modal
    setModalIsOpen(false);
  };



 

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Welcome Modal"
      className="CookieModal relative"
      overlayClassName="CookieOverlay" 
    >
         <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiesData.jsonLd) }}
  />
  <div className="fixed top-14 right-14 cursor-pointer close-cookie-modal z-50" onClick={()=>setModalIsOpen(false)}>
   
<Image src={'/assets/images/play-game-green.svg'} alt='game' height={70} width={100} className="h-[70px] w-[100px] object-contain image-green"></Image>
<Image src={'/assets/images/play-game-yellow.svg'} alt='game' height={70} width={100} className="h-[70px] w-[100px] object-contain image-yellow"></Image>

  </div>
  
    <SimpleLayout  >
  <ScrollTopAndComment></ScrollTopAndComment>
<div className="px-10 mt-28 md:mt-0">
  
<MDXLayoutRenderer code={cookiesData.cookies.body.code} components={components} toc={cookiesData.cookies.toc} />
</div>
    </SimpleLayout>
    </Modal>
  );
};

export default  CookiesModal;




