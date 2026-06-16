'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { WorkItem } from '@/data/types'

type FormData = {
  title: string
  category: 'video' | 'photo' | 'ai'
  subcategory: string
  description: string
  year: number
  client: string
  location: string
  bilibiliId: string
  xinpianchangUrl: string
  duration: string
  coverImage: string
  images: string[]
}

const subcategoryMap: Record<string, string[]> = {
  video: ['导演', '后期', '拍摄'],
  photo: ['人像', '产品', '手机摄影'],
  ai: ['视频', '图片'],
}

const emptyForm: FormData = {
  title: '', category: 'video', subcategory: '导演',
  description: '', year: new Date().getFullYear(),
  client: '', location: '', bilibiliId: '', xinpianchangUrl: '', duration: '',
  coverImage: '', images: [],
}

interface WorkEditorProps {
  initial?: WorkItem
}

export default function WorkEditor({ initial }: WorkEditorProps) {
  const router = useRouter()
  const [form, setForm] = useState<FormData>(initial ? {
    title: initial.title,
    category: initial.category,
    subcategory: initial.subcategory,
    description: initial.description,
    year: initial.year,
    client: 'client' in initial && initial.client ? initial.client : '',
    location: 'location' in initial && initial.location ? initial.location : '',
    bilibiliId: 'bilibiliId' in initial && initial.bilibiliId ? initial.bilibiliId : '',
    xinpianchangUrl: 'xinpianchangUrl' in initial && initial.xinpianchangUrl ? initial.xinpianchangUrl : '',
    duration: 'duration' in initial && initial.duration ? initial.duration : '',
    coverImage: initial.coverImage || '',
    images: 'images' in initial && initial.images ? initial.images : [],
  } : emptyForm)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)

  const set = (key: keyof FormData, value: string | number | string[]) => {
    const next: FormData = { ...form, [key]: value }
    if (key === 'category' && form.category !== value) {
      next.subcategory = subcategoryMap[value as string]?.[0] || ''
    }
    setForm(next)
  }

  // 单张上传(封面)
  const handleUploadCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (data.url) setForm({ ...form, coverImage: data.url })
    setUploading(false)
  }

  // 批量上传(作品图片)
  const handleBatchUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    setUploading(true)
    const fd = new FormData()
    for (let i = 0; i < files.length; i++) {
      fd.append('files', files[i])
    }
    const res = await fetch('/api/upload', { method: 'POST', body: fd })
    const data = await res.json()
    if (data.urls) {
      setForm({ ...form, images: [...form.images, ...data.urls] })
    }
    setUploading(false)
  }

  const removeImage = (idx: number) => {
    setForm({ ...form, images: form.images.filter((_, i) => i !== idx) })
  }

  const handleSubmit = async () => {
    setSaving(true)
    const body: Record<string, unknown> = {
      id: initial?.id || `${form.category}-${Date.now()}`,
      title: form.title,
      category: form.category,
      subcategory: form.subcategory,
      description: form.description,
      year: form.year,
      coverImage: form.coverImage,
    }
    if (form.client) body.client = form.client
    if (form.bilibiliId) body.bilibiliId = form.bilibiliId
    if (form.xinpianchangUrl) body.xinpianchangUrl = form.xinpianchangUrl
    if (form.duration) body.duration = form.duration
    if (form.location) body.location = form.location
    if (form.images.length > 0) body.images = form.images

    const method = initial ? 'PUT' : 'POST'
    const url = initial ? `/api/works/${initial.id}` : '/api/works'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    setSaving(false)
    if (res.ok) {
      router.push('/admin/dashboard')
      router.refresh()
    } else {
      alert('保存失败')
    }
  }

  const showVideo = form.category === 'video' || (form.category === 'ai' && form.subcategory === '视频')
  const showImages = form.category === 'photo' || (form.category === 'ai' && form.subcategory === '图片')

  return (
    <div className="min-h-screen bg-canvas-parchment px-[30px] py-section">
      <div className="mx-auto max-w-[640px]">
        <h1 className="font-display text-display-xl text-ink-obsidian mb-section">
          {initial ? '编辑作品' : '新增作品'}
        </h1>

        <div className="flex flex-col gap-[30px]">
          {/* Category */}
          <div>
            <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">分类</label>
            <select value={form.category} onChange={(e) => set('category', e.target.value)}
              className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian">
              <option value="video">视频</option>
              <option value="photo">照片</option>
              <option value="ai">AI</option>
            </select>
          </div>

          {/* Subcategory */}
          <div>
            <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">子分类</label>
            <select value={form.subcategory} onChange={(e) => set('subcategory', e.target.value)}
              className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian">
              {subcategoryMap[form.category]?.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">标题</label>
            <input value={form.title} onChange={(e) => set('title', e.target.value)}
              className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian"
              placeholder="作品标题" />
          </div>

          {/* Description */}
          <div>
            <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">简介</label>
            <textarea value={form.description} onChange={(e) => set('description', e.target.value)} rows={3}
              className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian resize-none"
              placeholder="作品简介" />
          </div>

          {/* Year & Client */}
          <div className="flex gap-[16px]">
            <div className="flex-1">
              <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">年份</label>
              <input type="number" value={form.year} onChange={(e) => set('year', parseInt(e.target.value))}
                className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian" />
            </div>
            <div className="flex-1">
              <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">客户 (可选)</label>
              <input value={form.client} onChange={(e) => set('client', e.target.value)}
                className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian"
                placeholder="品牌/客户名称" />
            </div>
          </div>

          {/* Video fields (conditional) */}
          {showVideo && (
            <>
              <div>
                <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">B站 BV号</label>
                <input value={form.bilibiliId} onChange={(e) => set('bilibiliId', e.target.value)}
                  className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian"
                  placeholder="BV开头的视频ID" />
              </div>
              <div>
                <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">新片场链接</label>
                <input value={form.xinpianchangUrl} onChange={(e) => set('xinpianchangUrl', e.target.value)}
                  className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian"
                  placeholder="https://www.xinpianchang.com/a..." />
              </div>
              <div>
                <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">时长</label>
                <input value={form.duration} onChange={(e) => set('duration', e.target.value)}
                  className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian"
                  placeholder="如 12:30" />
              </div>
            </>
          )}

          {/* Location (photos) */}
          {form.category === 'photo' && (
            <div>
              <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">拍摄地 (可选)</label>
              <input value={form.location} onChange={(e) => set('location', e.target.value)}
                className="w-full font-sans text-lg bg-transparent border border-ink-obsidian/20 px-[20px] py-[12px] outline-none focus:border-ink-obsidian text-ink-obsidian"
                placeholder="如 上海" />
            </div>
          )}

          {/* Cover Image */}
          <div>
            <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">封面图</label>
            <input type="file" accept="image/*" onChange={handleUploadCover}
              className="w-full font-sans text-lg text-ink-obsidian/50 mb-[8px]" />
            {uploading && <p className="font-sans text-[15px] text-ink-obsidian/50">上传中…</p>}
            {form.coverImage && (
              <div className="mt-[8px]">
                <img src={form.coverImage} alt="封面预览" className="w-full max-w-[200px] aspect-[4/3] object-cover" />
                <input value={form.coverImage} onChange={(e) => set('coverImage', e.target.value)}
                  className="w-full font-sans text-[15px] bg-transparent border-b border-ink-obsidian/10 py-[4px] outline-none text-ink-obsidian/50 mt-[8px]"
                  placeholder="或手动输入URL" />
              </div>
            )}
          </div>

          {/* Batch image upload (photo / AI图片) */}
          {showImages && (
            <div>
              <label className="block font-sans text-[13px] text-ink-obsidian/40 mb-[8px]">
                作品图片 (可多选批量上传)
              </label>
              <input type="file" accept="image/*" multiple onChange={handleBatchUpload}
                className="w-full font-sans text-lg text-ink-obsidian/50 mb-[12px]" />
              {form.images.length > 0 && (
                <div className="grid grid-cols-3 gap-[8px] mt-[8px]">
                  {form.images.map((img, i) => (
                    <div key={i} className="relative group">
                      <img src={img} alt={`作品图${i + 1}`} className="w-full aspect-[4/3] object-cover" />
                      <button
                        onClick={() => removeImage(i)}
                        className="absolute top-[4px] right-[4px] w-[24px] h-[24px] bg-deep-midnight/70 text-pure-white text-[14px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Submit */}
          <button onClick={handleSubmit} disabled={saving}
            className="font-sans text-lg bg-deep-midnight text-pure-white py-[16px] hover:bg-ink-obsidian transition-colors disabled:opacity-50">
            {saving ? '保存中…' : (initial ? '保存修改' : '创建作品')}
          </button>
        </div>
      </div>
    </div>
  )
}
