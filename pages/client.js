import sanityClient from '@sanity/client'
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'

export const client= sanityClient({
    projectId: "mq0068f5",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
    token:process.env.NEXT_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
