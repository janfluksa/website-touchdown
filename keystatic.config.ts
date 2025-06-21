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
        date: fields.date({label: 'Datum publikace', description: 'Vyber datum a čas publikace',  }),
        papersLogo: fields.image({label:"Image logo"}),
        papers: fields.text({ label: 'Noviny', description: 'Ve kterých novinách článek vyšel'}),
        logo: fields.select({
          label: 'Logo novin',
          options: [
            { label: 'Deník', value: 'denik' },
            { label: 'Dnes', value: 'dnes' },
            { label: 'E15 Ekonom', value: 'e15-ekonom' },
            { label: 'E15', value: 'e15' },
            { label: 'Euro', value: 'euro' },
            { label: 'Feedit', value: 'feedit' },
            { label: 'Hospodářské Noviny', value: 'hn' },
            { label: 'HR Forum', value: 'hr-forum' },
            { label: 'HR Magazin', value: 'hr-magazin' },
            { label: 'HR Management', value: 'hr-management' },
            { label: 'iDnes / Ekonomika', value: 'idnes-ekonomika' },
            { label: 'iDnes / Finance', value: 'idnes-finance' },
            { label: 'KarieraWeb', value: 'karieraweb' },
            { label: 'Probusiness Info', value: 'probussiness-info' },
            { label: 'Profit', value: 'profit' },
            { label: 'Retail News', value: 'retail-news' },
          ],
          defaultValue: 'dnes'
        }) ,
        url: fields.text({ label: 'URL (volitelné)', description: 'Internetová adresa umístění článku' }),
        body: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },

      columns: ["title", "logo", "date","papers"],
    }),

    services: collection({
      label: 'Services',
      slugField: 'title',
      path: './src/content/services/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        order: fields.integer({ label: "Pořadí"}),
        link: fields.text({ label: 'Link' }),
        linkLabel: fields.text({ label: 'Link label' }),
        image: fields.image({ 
          label: 'Image', 
          directory: 'public/images/services',
          publicPath: '/images/services/' 
        }),
        excerpt: fields.text({ label: 'Krátký popis' }),
        side: fields.select(
          { label: 'Umístění textu', 
            defaultValue: "left",
            options: [
              { label: 'L - Vlevo', value: 'left' }, 
              { label: 'R - Vpravo', value: 'right' }
            ] 
          }
        ),
        body: fields.markdoc({
          label: 'Content',
          extension: 'md'
        }),
      },
    }),



  },
});

/** 
  label: 'Posts',
  path: 'content/posts',
  format: 'mdx',
 */