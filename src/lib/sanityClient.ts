import sanityClient from '@sanity/client'

const config = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'j6vs6osg',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  token: import.meta.env.PUBLIC_SANITY_READ_TOKEN || 'v2021-12-21',
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: true,
}

export const client = sanityClient(config)
