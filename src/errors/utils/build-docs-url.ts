import { DOCS } from '../../constants'

const buildDocumentationUrl = (page: string): string => (
  `${DOCS}/${page}`
)

export default buildDocumentationUrl
