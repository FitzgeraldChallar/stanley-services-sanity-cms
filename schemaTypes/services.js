export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },

    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' }
    },

    { name: 'excerpt', type: 'text' },

    { name: 'content', type: 'text' },

    // ✅ ICON IMAGE
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    },

    // ✅ MAIN IMAGE
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}