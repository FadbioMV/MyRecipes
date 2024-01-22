import rss from 'astro:rss'
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("recipes")
  return rss({
    title: 'Alumno de Astro | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    item: posts.map(post=>({
      title:post.data.title,
      pudDate:post.data.pudDate,
    description:post.data.description,
    link:`/post/${post.slug}`})),
    customData: `<language>en-us</language>`,
  });
}