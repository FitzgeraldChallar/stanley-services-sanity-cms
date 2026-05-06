export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'price', type: 'number' },
    { name: 'description', type: 'text' },

    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
