export default {
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [
      {
        name: 'pagetitle',
        title: 'Title',
        type: 'string', 
        initialValue: 'Home',
        hidden: true
      },
      {
        name: 'image',
        type: 'image',
        title: 'Main image'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle'
      }
    ]
  }