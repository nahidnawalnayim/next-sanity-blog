import React, { useState, useEffect } from 'react'
import sanityClient from './client';
import Image from 'next/image'
import { urlFor } from './client';
import Home from './index'
function Banner({heroBanner}) {
    const [banner,setBanner]=useState([]);

    // useEffect(() =>{
    //     // sanityClient.fetch(`*[_type=="banner"]{
    //     //     product,
    //     //     image{
    //     //         asset->{
    //     //             _id,
    //     //             url
    //     //           },
    //     //           alt

    //     //     }
    //     //     ,description 
    //     // }`)
    //     .then((data) => setBanner(data))
    //   .catch(Error)
    // },[])
  return (
    <div>
        {/* {
            banner && banner.map((ban,index)=>( */}
                <div key={i}>
                    <h1>{heroBanner.product}</h1>
                    <img src={urlFor(heroBanner.image)} alt={heroBanner.image.alt} width="100%" />
                </div>
            
        {/* } */}
    </div>
  // )
// }
       )  }
export default Banner