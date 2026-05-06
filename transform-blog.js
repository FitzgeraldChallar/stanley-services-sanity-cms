const fs = require('fs')

// load your original JSON
const blogs = JSON.parse(fs.readFileSync('blogs.json', 'utf-8'))

function htmlToBlocks(html) {
  const text = html
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text
        }
      ]
    }
  ]
}

const output = blogs.map((blog, index) => ({
  _id: `blog-${index + 1}`,
  _type: 'blog',

  title: blog.Title,

  slug: {
    _type: 'slug',
    current: blog.Slug
  },

  excerpt: blog.Excerpt,

  publishedAt: new Date(blog["Published On"]).toISOString(),

  // ✅ ONLY keep this (same pattern as products)
  imageUrl: blog.Image,

  content: htmlToBlocks(blog.Content)
}))

fs.writeFileSync(
  'blogs.ndjson',
  output.map(doc => JSON.stringify(doc)).join('\n')
)

console.log('✅ blogs.ndjson created')