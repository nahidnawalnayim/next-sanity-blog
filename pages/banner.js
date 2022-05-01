import React, { useState, useEffect } from 'react'
import sanityClient from './client';
import Image from 'next/image'


function Banner() {
    const [banner,setBanner]=useState([]);

    useEffect(() =>{
        sanityClient.fetch(`*[_type=="banner"]{
            product,
            image{
                asset->{
                    _id,
                    url
                  },
                  alt

            }
            ,description 
        }`)
        .then((data) => setBanner(data))
      .catch(Error)
    },[])
  return (
    <div>
        {
            banner && banner.map((ban,index)=>(
                <div>
                    <h1>{ban.product}</h1>
                    <img src={ban.image.asset.url} alt={ban.image.alt} width="100%" />
                </div>
            ))
        }
    </div>
  )
}

export default Banner