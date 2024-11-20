import {defineField, defineType} from 'sanity'

export const blogPostType = defineType({
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    }),
    defineField({
      name: 'previewText',
      type: 'string',
      title: 'Preview Text',
      validation: (Rule) => Rule.max(155).warning('Should not exceed 155 characters'),
    }),
    defineField({
      name: 'body',
      type: 'portableText',
      title: 'Body',
    }),
    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      options: {
        list: [
          {title: 'Deutsch', value: 'de'},
          {title: 'Español', value: 'es'},
          {title: 'English', value: 'en'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, language, media} = selection
      const flag = language === 'de' ? '🇩🇪' : language === 'es' ? '🇳🇮' : '🇬🇧'
      return {
        title: `${title} ${flag}`,
        media,
      }
    },
  },
})
