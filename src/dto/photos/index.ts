export type PhotosDto = {
  id: string
  alt_description: string
  alternative_slugs: Record<"de" | "en" | "es" | "fr" | "it" | "ja" | "ko" | "pt", string>[]
  asset_type: string
  blur_hash: string
  breadcrumbs: unknown[]
  color: string
  created_at: string
  current_user_collections: unknown[]
  description: null | string
  height: number
  width: number
  liked_by_user: boolean
  likes: number
  links: Record<"download" | "download_location" | "html" | "self", string>
  promoted_at: null | string
  slug: string
  sponsorship: null | string
  topic_submissions: unknown
  updated_at: string
  urls: Record<"full" | "raw" | "regular" | "small" | "small_s3" | "thumb", string>
}
