import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    media: collection({
      label: 'Media',
      slugField: 'title',
      path: './src/content/media/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        
        link: fields.text({ label: 'Link' }),
        linkLabel: fields.text({ label: 'Link label' }),
        image: fields.image({ label: 'Thumbnail', directory: 'public/images' }),
        excerpt: fields.text({ label: 'Link label' }),
        side: fields.select(
          { label: 'Side', 
            defaultValue: "left",
            options: [
              { label: 'Left', value: 'left' }, 
              { label: 'Right', value: 'right' }
            ] 
          }
        ),
        body: fields.markdoc({
          label: 'Content',
        }),
      },
    }),

    services: collection({
      label: 'Services',
      slugField: 'title',
      path: './src/content/services/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        url: fields.text({ label: 'URL (volitelné)', description: 'Adresa původního umístění článku v novinách', }),
        date: fields.date({
                            label: 'Datum publikace',
                            description: 'Vyber datum a čas publikace',
                          }),
        papers: fields.text({ label: 'Noviny' }),
        body: fields.markdoc({
          label: 'Content',
        }),
      },
    }),

    
  },
});

/*


        order: fields.integer({ label: 'Sort Order' }),
        
fields.text({ label: 'Title' });
fields.slug({ name: 'title', label: 'Slug' });
fields.select({ label: 'Category', options: ['News', 'Blog', 'Docs'] });
fields.boolean({ label: 'Published' });
fields.url({ label: 'Link' });
fields.integer({ label: 'Sort Order' });

fields.text({ label: 'Title', description: 'Main headline', validation: { length: { min: 3 } } });
fields.textarea({ label: 'Intro', validation: { length: { max: 300 } } });

fields.image({ label: 'Thumbnail', directory: 'public/images' });
*/