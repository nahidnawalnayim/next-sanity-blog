import React, { useState, useEffect } from 'react'
import sanityClient from './client';
import Image from 'next/image'
import { urlFor } from './client';
import Home from './index'

function Homes({mypost}) {
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   sanityClient.fetch(`*[_type == "post" ]{
  //         title,
  //         slug,
  //         mainImage{
  //           asset->{
  //             _id,
  //             url
  //           },
  //           alt
  //         }
  //         ,description  
      
  //       }`)
  //     .then((data) => setPosts(data))
  //     .catch(Error)
  // }, []);


  return (
    <div style={{ }}>
 
    <div>
          <h1>{mypost.title}</h1>
         <img src={urlFor(mypost.mainImage)} />
        </div>

        
      
    </div>
  )
}
export default Homes