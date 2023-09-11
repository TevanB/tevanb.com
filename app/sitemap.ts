import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const routes = ['', '/resume'].map(
    (route) => ({
      url: `https://tevanb.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
