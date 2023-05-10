import { defineSchema } from 'tinacms';
import type { Template, TinaField } from 'tinacms';

export const iconSchema: TinaField = {
  type: 'object',
  label: 'Icon',
  name: 'icon',
  fields: [
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        {
          label: 'Primary',
          value: 'primary'
        },
        {
          label: 'Blue',
          value: 'blue'
        },
        {
          label: 'Teal',
          value: 'teal'
        },
        {
          label: 'Green',
          value: 'green'
        },
        {
          label: 'Red',
          value: 'red'
        },
        {
          label: 'Pink',
          value: 'pink'
        },
        {
          label: 'Purple',
          value: 'purple'
        },
        {
          label: 'Orange',
          value: 'orange'
        },
        {
          label: 'Yellow',
          value: 'yellow'
        }
      ]
    },
    {
      name: 'style',
      label: 'Style',
      type: 'string',
      options: [
        {
          label: 'Circle',
          value: 'circle'
        },
        {
          label: 'Float',
          value: 'float'
        }
      ]
    },
    {
      type: 'string',
      label: 'Icon',
      name: 'name',
      options: [
        {
          label: 'Random',
          value: ''
        },
        {
          label: 'Aperture',
          value: 'aperture'
        },
        {
          label: 'Code Block',
          value: 'code'
        },
        {
          label: 'Like',
          value: 'like'
        },
        {
          label: 'Map',
          value: 'map'
        },
        {
          label: 'Palette',
          value: 'palette'
        },
        {
          label: 'Pie Chart',
          value: 'chart'
        },
        {
          label: 'Pin',
          value: 'pin'
        },
        {
          label: 'Shield',
          value: 'shield'
        },
        {
          label: 'Setting Sliders',
          value: 'settings'
        },
        {
          label: 'Store',
          value: 'store'
        },
        {
          label: 'Tennis Ball',
          value: 'ball'
        },
        {
          label: 'Test Tube',
          value: 'tube'
        },
        {
          label: 'Trophy',
          value: 'trophy'
        },
        {
          label: 'User',
          value: 'user'
        },
        {
          label: 'Beer',
          value: 'beer'
        },
        {
          label: 'Chat',
          value: 'chat'
        },
        {
          label: 'Cloud',
          value: 'cloud'
        },
        {
          label: 'Coffee',
          value: 'coffee'
        },
        {
          label: 'World',
          value: 'world'
        },
        {
          label: 'Tina',
          value: 'tina'
        }
      ]
    }
  ]
};

export const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: '',
    style: 'float',
    name: ''
  }
};

export const featureOnlyTextBlockSchema: Template = {
  name: 'featureOnlyTexts',
  label: 'Feature Only Text',
  ui: {},
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt'
    },
    {
      label: 'Feature Text',
      name: 'feature_text',
      type: 'object',
      list: true,
      //   ui: {},
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text'
        }
      ]
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const leaderBlockSchema: Template = {
  name: 'leadership',
  label: 'Leadership',
  ui: {},
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'title'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'avatar',
      label: 'avatar'
    },
    {
      type: 'string',
      name: 'name',
      label: 'name'
    },
    {
      type: 'rich-text',
      //   ui: {
      //     component: 'markdown'
      //   },
      name: 'gettrProfile',
      label: 'GETTR Profile Link',
      isBody: true
    },
    {
      type: 'rich-text',
      //   ui: {
      //     component: 'markdown'
      //   },
      label: 'Body',
      name: 'body',
      isBody: true
    },
    {
      type: 'rich-text',
      label: 'Quotation',
      name: 'quotation',
      isBody: true
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const partnerBlockSchema: Template = {
  name: 'partner',
  label: 'Partner',
  ui: {},
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'title'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'avatar',
      label: 'avatar'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'new_yorker',
      label: 'new_yorker'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'vox',
      label: 'vox'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'the_wall_street_journal_ny_post',
      label: 'the_wall_street_journal_ny_post'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'reuters',
      label: 'reuters'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'insider',
      label: 'insider'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'mashable',
      label: 'mashable'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'new_york_post',
      label: 'new_york_post'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'the_daily_beast',
      label: 'the_daily_beast'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'news_week',
      label: 'news_week'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'nbc_news',
      label: 'nbc_news'
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const contactBlockSchema: Template = {
  label: 'Media Contact',
  name: 'contact',
  ui: {},
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: 'body',
      isBody: true,
      templates: [
        {
          name: 'Callout',
          label: 'Callout',
          fields: [
            {
              name: 'message',
              label: 'Message',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const ImageBlockSchema: Template = {
  name: 'image',
  label: 'Image',
  ui: {},
  fields: [
    {
      type: 'image',
      //   clearable: true,
      name: 'image',
      label: 'Image'
    }
    // {
    //   type: 'string',
    //   label: 'Color',
    //   name: 'color',
    //   options: [
    //     { label: 'Default', value: 'default' },
    //     { label: 'Tiny', value: 'tiny' },
    //     { label: 'Primary', value: 'primary' }
    //   ]
    // }
  ]
};

export const CommonContentBlockSchema: Template = {
  name: 'common_content',
  label: 'Content',
  ui: {},
  fields: [
    {
      type: 'string',
      //   clearable: true,
      ui: {
        component: 'markdown'
      },
      name: 'content',
      label: 'Content'
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'avatar',
      label: 'avatar'
    }
    // {
    //   type: 'string',
    //   label: 'Color',
    //   name: 'color',
    //   options: [
    //     { label: 'Default', value: 'default' },
    //     { label: 'Tiny', value: 'tiny' },
    //     { label: 'Primary', value: 'primary' }
    //   ]
    // }
  ]
};

export const featureBlockSchema: Template = {
  name: 'features',
  label: 'Features',
  ui: {
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature]
    }
  },
  fields: [
    {
      type: 'object',
      label: 'Feature Items',
      name: 'items',
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature
        }
      },
      fields: [
        iconSchema,
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text'
        }
      ]
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const pageContentBlockSchema: Template = {
  name: 'page_content',
  label: 'Content',
  ui: {
    defaultItem: {
      title: 'title',
      body:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
      color: 'primary'
    }
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: 'body',
      isBody: true
    },
    {
      type: 'image',
      //   clearable: true,
      name: 'avatar',
      label: 'avatar'
    },
    // {
    //   type: 'boolean',
    //   label: 'Show logo',
    //   name: 'logo'
    // },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const testimonialBlockSchema: Template = {
  name: 'testimonial',
  label: 'Testimonial',
  ui: {
    defaultItem: {
      quote: 'There are only two hard things in Computer Science: cache invalidation and naming things.',
      author: 'Phil Karlton',
      color: 'primary'
    }
  },
  fields: [
    {
      type: 'string',
      ui: {
        component: 'textarea'
      },
      label: 'Quote',
      name: 'quote'
    },
    {
      type: 'string',
      label: 'Author',
      name: 'author'
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const heroBlockSchema: Template = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.'
    }
  },
  fields: [
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline'
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline'
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'markdown'
      }
    },
    {
      label: 'Actions',
      name: 'actions',
      type: 'object',
      list: true,
      ui: {
        defaultItem: {
          label: 'Action Label',
          type: 'button',
          icon: true,
          link: '/'
        }
      },
      fields: [
        {
          label: 'Label',
          name: 'label',
          type: 'string'
        },
        {
          label: 'Type',
          name: 'type',
          type: 'string',
          options: [
            { label: 'Button', value: 'button' },
            { label: 'Link', value: 'link' }
          ]
        },
        {
          label: 'Icon',
          name: 'icon',
          type: 'boolean'
        },
        {
          label: 'Link',
          name: 'link',
          type: 'string'
        }
      ]
    },
    {
      type: 'object',
      label: 'Image',
      name: 'image',
      fields: [
        {
          name: 'src',
          label: 'Image Source',
          type: 'image'
          //   clearable: true
        },
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'string'
        }
      ]
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export const timelineBlockSchema: Template = {
  name: 'timeline',
  label: 'Timeline',
  ui: {
    defaultItem: {
      items: [
        {
          created_at: '2020-06-04',
          name: 'name',
          excerpt: 'excerpt'
        }
      ]
    }
  },
  fields: [
    {
      type: 'object',
      label: 'Timline Items',
      name: 'items',
      list: true,
      ui: {
        defaultItem: {
          name: '',
          excerpt: '',
          created_at: '1970-01-01 00:00:00',
          timeline_Image: null
        }
      },
      fields: [
        {
          type: 'image',
          //   clearable: true,
          name: 'timeline_Image',
          label: 'Image'
        },
        {
          type: 'datetime',
          name: 'created_at',
          label: 'Created At',
          ui: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm'
          }
        },
        {
          type: 'string',
          label: 'Name',
          name: 'name'
        },
        {
          type: 'string',
          label: 'Excerpt',
          ui: {
            component: 'textarea'
          },
          name: 'excerpt'
        }
      ]
    },
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'White', value: 'white' },
        { label: 'Tiny', value: 'tiny' },
        { label: 'Primary', value: 'primary' }
      ]
    }
  ]
};

export default defineSchema({
  collections: [
    {
      label: 'Press',
      name: 'press',
      path: 'content/press',
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === 'home') {
            return '/';
          }
          if (document._sys.filename === 'about') {
            return `/about`;
          }
          return undefined;
        }
        // defaultItem: {
        //   title: 'title'
        //   //   // author: 'anonymous',
        //   //   date: '',
        //   //   // heroImg: '',
        //   //   excerpt: '',
        //   //   body: 'context',
        //   //   isPublish: false,
        //   //   socialImage: '',
        //   //   socialImageUrl: 'https://gettr.com/static/media/ceo.41d55b2a.png',
        //   //   socialTitle: '',
        //   //   socialDescription: ''
        // }
        // fields: []
      },
      format: 'md',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        // {
        //   type: 'reference',
        //   label: 'Author',
        //   name: 'author',
        //   collections: ['authors']
        // },
        {
          type: 'datetime',
          name: 'date',
          label: 'Posted Date',
          ui: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm'
          }
        },
        // {
        //   type: 'image',
        //   clearable: true,
        //   name: 'heroImg',
        //   label: 'Illustration'
        // },
        {
          type: 'string',
          name: 'excerpt',
          label: 'Excerpt',
          ui: {
            component: 'textarea'
          }
        },
        {
          type: 'string',
          name: 'body',
          label: 'Body',
          ui: {
            component: 'markdown'
          },
          isBody: true
        },
        {
          type: 'rich-text',
          name: 'body1',
          label: 'Body1',
          isBody: true
        },
        // {
        //   type: 'object',
        //   list: true,
        //   name: 'sections',
        //   label: 'Body',
        //   templates: [ImageBlockSchema, CommonContentBlockSchema],
        //   isBody: true
        // },
        {
          type: 'boolean',
          name: 'isPublish',
          label: 'Publish'
        },
        {
          type: 'image',
          name: 'socialImage',
          //   clearable: true,
          label: 'SEO Social Image'
        },
        // {
        //   type: 'string',
        //   name: 'socialImageUrl',
        //   label: 'Social Image URL'
        // },
        {
          type: 'string',
          //   component: 'text',
          name: 'socialTitle',
          label: 'SEO Social Title',
          ui: {
            component: 'text',
            description: 'Choose press title as social title if not provide'
          }
        },
        {
          type: 'string',
          name: 'socialDescription',
          ui: {
            component: 'textarea',
            description: 'Choose first paragraph of press as social description if not provide'
          },
          label: 'SEO Social Description'
        }
      ]
    },
    {
      label: 'Global',
      name: 'global',
      path: 'content/global',
      fields: [
        {
          type: 'object',
          label: 'Header',
          name: 'header',
          fields: [
            iconSchema,
            {
              type: 'string',
              label: 'Color',
              name: 'color',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Primary', value: 'primary' }
              ]
            },
            {
              type: 'object',
              label: 'Nav Links',
              name: 'nav',
              list: true,
              ui: {
                defaultItem: {
                  href: '',
                  label: 'Home'
                }
              },
              fields: [
                {
                  type: 'string',
                  label: 'Link',
                  name: 'href'
                },
                {
                  type: 'string',
                  label: 'Label',
                  name: 'label'
                }
              ]
            }
          ]
        },
        {
          type: 'object',
          label: 'Footer',
          name: 'footer',
          fields: [
            {
              type: 'string',
              label: 'Color',
              name: 'color',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Primary', value: 'primary' }
              ]
            },
            {
              type: 'object',
              label: 'Social Links',
              name: 'social',
              fields: [
                {
                  type: 'string',
                  label: 'Facebook',
                  name: 'facebook'
                },
                {
                  type: 'string',
                  label: 'Twitter',
                  name: 'twitter'
                },
                {
                  type: 'string',
                  label: 'Instagram',
                  name: 'instagram'
                },
                {
                  type: 'string',
                  label: 'Github',
                  name: 'github'
                }
              ]
            }
          ]
        },
        {
          type: 'object',
          label: 'Theme',
          name: 'theme',
          fields: [
            {
              type: 'string',
              label: 'Primary Color',
              name: 'color',
              options: [
                {
                  label: 'Blue',
                  value: 'blue'
                },
                {
                  label: 'Teal',
                  value: 'teal'
                },
                {
                  label: 'Green',
                  value: 'green'
                },
                {
                  label: 'Red',
                  value: 'red'
                },
                {
                  label: 'Pink',
                  value: 'pink'
                },
                {
                  label: 'Purple',
                  value: 'purple'
                },
                {
                  label: 'Orange',
                  value: 'orange'
                },
                {
                  label: 'Yellow',
                  value: 'yellow'
                }
              ]
            },
            {
              type: 'string',
              name: 'font',
              label: 'Font Family',
              options: [
                {
                  label: 'System Sans',
                  value: 'sans'
                },
                {
                  label: 'Nunito',
                  value: 'nunito'
                },
                {
                  label: 'Lato',
                  value: 'lato'
                }
              ]
            },
            {
              type: 'string',
              name: 'icon',
              label: 'Icon Set',
              options: [
                {
                  label: 'Boxicons',
                  value: 'boxicon'
                },
                {
                  label: 'Heroicons',
                  value: 'heroicon'
                }
              ]
            },
            {
              type: 'string',
              name: 'darkMode',
              label: 'Dark Mode',
              options: [
                {
                  label: 'System',
                  value: 'system'
                },
                {
                  label: 'Light',
                  value: 'light'
                },
                {
                  label: 'Dark',
                  value: 'dark'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Authors',
      name: 'authors',
      path: 'content/authors',
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name'
        },
        {
          type: 'string',
          label: 'Avatar',
          name: 'avatar'
        }
      ]
    },
    {
      label: 'Pages',
      name: 'pages',
      path: 'content/pages',
      fields: [
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Sections',
          ui: {
            visualSelector: true
          },
          templates: [
            featureOnlyTextBlockSchema,
            pageContentBlockSchema,
            contactBlockSchema,
            leaderBlockSchema,
            partnerBlockSchema
          ]
        },
        {
          type: 'image',
          name: 'socialImage',
          //   clearable: true,
          label: 'SEO Social Image'
        },
        {
          type: 'string',
          name: 'socialTitle',
          label: 'SEO Social Title'
        },
        {
          type: 'string',
          name: 'socialDescription',
          ui: {
            component: 'textarea'
          },
          label: 'SEO Social Description'
        }
      ]
    }
  ]
});
