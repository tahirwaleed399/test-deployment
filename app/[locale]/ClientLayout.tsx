'use client';

import { Navigation } from '@/components/Navigation';
import SectionContainer from '@/components/SectionContainer';
import siteMetadata from '@/data/siteMetadata';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import React, { useState } from 'react'

const ClientLayout = ({
  cookiesData,
    children,
    
  }: {
    cookiesData : any ,
    children: React.ReactNode;
    
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [navOpen , setNavOpen] =  useState<boolean>(false);
    const [isLangBtnHovered , setIsLangBtnHovered] = useState(false);
    const [langOpen , setLangOpen] =  useState<boolean>(false);
    const langToggle = ()=>setLangOpen(!navOpen);
  return (
<>

<Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
        
            <div className="flex  flex-col justify-between font-sans">
            

              <Navigation section={'dark'} navOpen={navOpen} langOpen={langOpen} setLangOpen={setLangOpen} setNavOpen={setNavOpen} isHovered={isHovered} setIsHovered={setIsHovered} isLangBtnHovered={isLangBtnHovered} setIsLangBtnHovered={setIsLangBtnHovered} cookiesData={cookiesData} />

                <main className="mb-auto">{children}</main>
          
            </div>
         

</>
  )
}

export default ClientLayout