export const site = {
  title: `David Huson's Portfolio`,
  description: `A Portfolio and blog where I can share my projects and ideas with the world.`,
  url: `https://davidhuson.dev`, // No trailing slash!
  // JSON LD
  name: `David Huson`,
  // Twitter URL
  twitterURL: `https://twitter.com/David_Huson_`,
  linkedInURL: `https://www.linkedin.com/in/david-huson-`,
  // Facebook URL
  facebookURL: `https://facebook.com`,
  // Instagram URL
  instagramURL: `https://instagram.com`,
}

export interface ArticleSchemaTypes {
  title: string
  permalink: URL
  publishDate: Date
  ogImageUrl: URL
  description: string
}
