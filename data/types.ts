export type VideoSubcategory = '导演' | '后期' | '拍摄'
export type PhotoSubcategory = '人像' | '产品' | '手机摄影'
export type AISubcategory = '视频' | '图片'

export interface VideoWork {
  id: string
  title: string
  category: 'video'
  subcategory: VideoSubcategory
  coverImage: string
  description: string
  year: number
  client?: string
  bilibiliId?: string
  xinpianchangUrl?: string
  duration?: string
  images?: string[]
}

export interface PhotoWork {
  id: string
  title: string
  category: 'photo'
  subcategory: PhotoSubcategory
  coverImage: string
  description: string
  year: number
  client?: string
  location?: string
  images?: string[]
  xinpianchangUrl?: string
}

export interface AIWork {
  id: string
  title: string
  category: 'ai'
  subcategory: AISubcategory
  coverImage: string
  description: string
  year: number
  client?: string
  bilibiliId?: string
  xinpianchangUrl?: string
  duration?: string
  images?: string[]
}

export type WorkItem = VideoWork | PhotoWork | AIWork
