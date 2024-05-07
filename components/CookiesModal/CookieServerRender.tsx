import SimpleLayout from '@/layouts/SimpleLayout'
import React from 'react'
import ScrollTopAndComment from '../ScrollTopAndComment'
import { Cookies, allCookies } from 'contentlayer/generated'

const CookieServerRender = ({locale}) => {
  
   
  return (
    <>

{/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      
        <SimpleLayout  >
      <ScrollTopAndComment></ScrollTopAndComment>
    
        {/* <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} /> */}
        </SimpleLayout>
      
    </>
  )
}

export default CookieServerRender