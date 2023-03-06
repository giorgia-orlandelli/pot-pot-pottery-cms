export default {
    name: 'archive',
    type: 'document',
    title: 'Archive',
    fields: [
      {
          name: 'pageTitle',
          title: 'Title',
          type: 'string', 
          initialValue: 'Archive',
          hidden: true
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string'
      },
      {
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [
            {
              type: 'reference', 
              to: [{ type: 'product'}]
            }
          ]     
      }
  ]
}