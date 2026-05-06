export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'excerpt',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}