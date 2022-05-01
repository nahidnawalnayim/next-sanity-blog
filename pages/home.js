import React, { useState, useEffect } from 'react'
import sanityClient from './client';
import Image from 'next/image'


function Homes() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post" ]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
          ,description  
      
        }`)
      .then((data) => setPosts(data))
      .catch(Error)
  }, []);


  return (
    <div style={{ display: 'flex', justifyItems: 'flex-start' }}>
      {posts && posts.map((post, index) => (
        <div key={post.slug.current}>
          <h1>{post.title}</h1>
          <img src={post.mainImage.asset.url} alt={post.mainImage.alt} width="300px" height="300px" />
        </div>
      ))

      }
    </div>
  )
}
export default Homes