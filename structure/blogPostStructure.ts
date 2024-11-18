import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import {DocumentIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Blog Posts')
    .icon(DocumentIcon)
    .schemaType('blogPost')
    .child(S.documentTypeList('blogPost')),
)
