import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import {ArchiveIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Blog Categories')
    .icon(ArchiveIcon)
    .schemaType('category')
    .child(S.documentTypeList('category')),
)
