import sanityClient from '@sanity/client'
import React from 'react'


export default sanityClient({
    projectId: "mq0068f5",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true
})

