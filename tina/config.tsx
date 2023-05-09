import { defineConfig } from 'tinacms';
import { contentBlockSchema } from '../components/blocks/content';
import { featureBlockSchema } from '../components/blocks/features';
import { heroBlockSchema } from '../components/blocks/hero';
import { testimonialBlockSchema } from '../components/blocks/testimonial';
import { ColorPickerInput } from '../components/fields/color';
import { iconSchema } from '../components/util/icon';
import {
  featureOnlyTextBlockSchema,
  leaderBlockSchema,
  partnerBlockSchema,
  contactBlockSchema,
  ImageBlockSchema,
  CommonContentBlockSchema,
  pageContentBlockSchema,
  timelineBlockSchema
} from './schema';

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || '';

const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch,
  token: process.env.TINA_TOKEN!,
  media: {
    // @ts-ignore
    loadCustomStore: async () => {
      const pack = await import('next-tinacms-cloudinary');
      return pack.TinaCloudCloudinaryMediaStore;
    }
  },
  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin' // within the public folder
  },
  schema: {
    collections: [
      {
        label: 'Press',
        name: 'press',
        path: 'content/press',
        format: 'md',
        ui: {
          router: ({ document }) => {
            return `/press/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title'
          },
          {
            type: 'reference',
            label: 'Author',
            name: 'author',
            collections: ['author']
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Posted Date',
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'hh:mm A'
            }
          },
          {
            type: 'image',
            // clearable: true,
            name: 'heroImg',
            label: 'Illustration'
          },
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
            type: 'object',
            list: true,
            name: 'sections',
            label: 'Body',
            templates: [ImageBlockSchema, CommonContentBlockSchema]
            // isBody: true
          },
          {
            type: 'boolean',
            name: 'isPublish',
            label: 'Publish'
          },
          {
            label: 'SEO Social Image',
            name: 'socialImage',
            type: 'image'
            // clearable: true
          },
          // {
          //   type: 'string',
          //   name: 'socialImageUrl',
          //   label: 'Social Image URL'
          // },
          {
            type: 'string',
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
        label: 'Blog Posts',
        name: 'post',
        path: 'content/posts',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true
          },
          {
            type: 'image',
            name: 'heroImg',
            label: 'Hero Image'
          },
          {
            type: 'rich-text',
            label: 'Excerpt',
            name: 'excerpt'
          },
          {
            type: 'reference',
            label: 'Author',
            name: 'author',
            collections: ['author']
          },
          {
            type: 'datetime',
            label: 'Posted Date',
            name: 'date',
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'hh:mm A'
            }
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: '_body',
            templates: [
              {
                name: 'DateTime',
                label: 'Date & Time',
                inline: true,
                fields: [
                  {
                    name: 'format',
                    label: 'Format',
                    type: 'string',
                    options: ['utc', 'iso', 'local']
                  }
                ]
              },
              {
                name: 'BlockQuote',
                label: 'Block Quote',
                fields: [
                  {
                    name: 'children',
                    label: 'Quote',
                    type: 'rich-text'
                  },
                  {
                    name: 'authorName',
                    label: 'Author',
                    type: 'string'
                  }
                ]
              },
              {
                name: 'NewsletterSignup',
                label: 'Newsletter Sign Up',
                fields: [
                  {
                    name: 'children',
                    label: 'CTA',
                    type: 'rich-text'
                  },
                  {
                    name: 'placeholder',
                    label: 'Placeholder',
                    type: 'string'
                  },
                  {
                    name: 'buttonText',
                    label: 'Button Text',
                    type: 'string'
                  },
                  {
                    name: 'disclaimer',
                    label: 'Disclaimer',
                    type: 'rich-text'
                  }
                ],
                ui: {
                  defaultItem: {
                    placeholder: 'Enter your email',
                    buttonText: 'Notify Me'
                  }
                }
              }
            ],
            isBody: true
          }
        ]
      },
      {
        label: 'Global',
        name: 'global',
        path: 'content/global',
        format: 'json',
        ui: {
          global: true
        },
        fields: [
          {
            type: 'object',
            label: 'Header',
            name: 'header',
            fields: [
              iconSchema as any,
              {
                type: 'string',
                label: 'Name',
                name: 'name'
              },
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
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: 'home',
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
                ui: {
                  component: ColorPickerInput
                }
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
        name: 'author',
        path: 'content/authors',
        format: 'md',
        fields: [
          {
            type: 'string',
            label: 'Name',
            name: 'name',
            isTitle: true,
            required: true
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
        name: 'page',
        path: 'content/pages',
        ui: {
        //   router: ({ document }) => {
        //     if (document._sys.filename === 'home') {
        //       return `/`;
        //     }
        //     if (document._sys.filename === 'about') {
        //       return `/about`;
        //     }
        //     return undefined;
        //   }
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            description: 'The title of the page. This is used to display the title in the CMS',
            isTitle: true,
            required: true
          },
          {
            type: 'object',
            list: true,
            name: 'blocks',
            label: 'Sections',
            ui: {
              visualSelector: true
            },
            templates: [
              heroBlockSchema,
              // @ts-ignore
              featureBlockSchema,
              contentBlockSchema,
              testimonialBlockSchema,
              featureOnlyTextBlockSchema,
              contactBlockSchema,
              leaderBlockSchema,
              partnerBlockSchema,
              pageContentBlockSchema
            ]
          },
          {
            type: 'image',
            name: 'socialImage',
            // clearable: true,
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
  }
});

export default config;
