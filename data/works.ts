import { WorkItem } from './types'

export const works: WorkItem[] = [
  // =====================================================
  // 视频 — 导演
  // =====================================================
  {
    id: 'dir-01', title: '山城夜行', category: 'video', subcategory: '导演',
    coverImage: 'https://picsum.photos/seed/dir01/800/600',
    description: '重庆城市夜景纪录片，穿梭于立体交通与老巷之间，用镜头捕捉山城独有的空间叙事。',
    year: 2024, client: '城市探索频道', bilibiliId: 'BV1xx411c7mD', duration: '12:30',
  },
  {
    id: 'dir-02', title: '匠人·木', category: 'video', subcategory: '导演',
    coverImage: 'https://picsum.photos/seed/dir02/800/600',
    description: '跟随一位老木匠，记录传统榫卯工艺从选材到成器的完整过程。',
    year: 2024, client: '非遗记录计划', bilibiliId: 'BV1xx411c7mE', duration: '18:45',
  },
  {
    id: 'dir-03', title: '味觉迁徙', category: 'video', subcategory: '导演',
    coverImage: 'https://picsum.photos/seed/dir03/800/600',
    description: '美食人文短片，从一个异乡厨师的视角讲述味道与故乡的关系。',
    year: 2023, client: '风味实验室', bilibiliId: 'BV1xx411c7mF', duration: '8:20',
  },
  {
    id: 'dir-04', title: '无声的律动', category: 'video', subcategory: '导演',
    coverImage: 'https://picsum.photos/seed/dir04/800/600',
    description: '听障舞者的故事。没有音乐，但他们的身体就是节拍。',
    year: 2023, bilibiliId: 'BV1xx411c7mG', duration: '15:00',
  },
  {
    id: 'dir-05', title: '最后一班渡轮', category: 'video', subcategory: '导演',
    coverImage: 'https://picsum.photos/seed/dir05/800/600',
    description: '即将停运的跨江渡轮上，乘客们的最后记忆与城市变迁交织。',
    year: 2022, client: '城市记忆计划', bilibiliId: 'BV1xx411c7mH', duration: '22:10',
  },
  {
    id: 'dir-06', title: '边缘书店', category: 'video', subcategory: '导演',
    coverImage: 'https://picsum.photos/seed/dir06/800/600',
    description: '探访五家藏在城市角落的独立书店，纸质书最后的坚守者们。',
    year: 2024, bilibiliId: 'BV1xx411c7mI', duration: '16:35',
  },

  // =====================================================
  // 视频 — 后期
  // =====================================================
  {
    id: 'post-01', title: '科技未来大会主视觉', category: 'video', subcategory: '后期',
    coverImage: 'https://picsum.photos/seed/post01/800/600',
    description: '大会开场动画与主视觉制作，全流程后期合成与特效。',
    year: 2024, client: '未来科技峰会', bilibiliId: 'BV1xx411c7mJ', duration: '3:00',
  },
  {
    id: 'post-02', title: '城市脉搏 — 品牌片', category: 'video', subcategory: '后期',
    coverImage: 'https://picsum.photos/seed/post02/800/600',
    description: '商业地产品牌形象片，负责调色、合成与音效设计。',
    year: 2024, client: '万象地产', bilibiliId: 'BV1xx411c7mK', duration: '2:30',
  },
  {
    id: 'post-03', title: '燃·运动品牌合集', category: 'video', subcategory: '后期',
    coverImage: 'https://picsum.photos/seed/post03/800/600',
    description: '运动品牌年度广告混剪，节奏剪辑与色彩分级。',
    year: 2023, client: '动感体育', bilibiliId: 'BV1xx411c7mL', duration: '1:45',
  },
  {
    id: 'post-04', title: '草木人间', category: 'video', subcategory: '后期',
    coverImage: 'https://picsum.photos/seed/post04/800/600',
    description: '纪录片调色与精剪，草木染工艺的视觉质感重塑。',
    year: 2023, client: '非遗记录计划', bilibiliId: 'BV1xx411c7mM', duration: '25:00',
  },
  {
    id: 'post-05', title: '引力——产品发布', category: 'video', subcategory: '后期',
    coverImage: 'https://picsum.photos/seed/post05/800/600',
    description: '手机产品发布会开场视频，动态图形与实拍结合。',
    year: 2024, client: '极光科技', bilibiliId: 'BV1xx411c7mN', duration: '4:15',
  },
  {
    id: 'post-06', title: '盛夏光年 MV', category: 'video', subcategory: '后期',
    coverImage: 'https://picsum.photos/seed/post06/800/600',
    description: '独立音乐人 MV 后期剪辑与特效合成。',
    year: 2022, bilibiliId: 'BV1xx411c7mO', duration: '5:20',
  },

  // =====================================================
  // 视频 — 拍摄
  // =====================================================
  {
    id: 'cam-01', title: '光影·建筑', category: 'video', subcategory: '拍摄',
    coverImage: 'https://picsum.photos/seed/cam01/800/600',
    description: '建筑事务所作品集视频，用光线与几何展现空间美学。',
    year: 2024, client: '间筑设计', bilibiliId: 'BV1xx411c7mP', duration: '3:30',
  },
  {
    id: 'cam-02', title: '海风与浪', category: 'video', subcategory: '拍摄',
    coverImage: 'https://picsum.photos/seed/cam02/800/600',
    description: '冲浪品牌宣传片，全程水下与高速摄影。',
    year: 2024, client: '浪人俱乐部', bilibiliId: 'BV1xx411c7mQ', duration: '2:00',
  },
  {
    id: 'cam-03', title: '暗夜星河', category: 'video', subcategory: '拍摄',
    coverImage: 'https://picsum.photos/seed/cam03/800/600',
    description: '星空延时摄影短片，拍摄于川西高原无人区。',
    year: 2023, bilibiliId: 'BV1xx411c7mR', duration: '6:00',
  },
  {
    id: 'cam-04', title: '日常的质', category: 'video', subcategory: '拍摄',
    coverImage: 'https://picsum.photos/seed/cam04/800/600',
    description: '日用品品牌视觉短片，用微距镜头捕捉材质细节。',
    year: 2023, client: '素履生活', bilibiliId: 'BV1xx411c7mS', duration: '1:30',
  },
  {
    id: 'cam-05', title: '街角叙事', category: 'video', subcategory: '拍摄',
    coverImage: 'https://picsum.photos/seed/cam05/800/600',
    description: '街头摄影风格短片，游走于城市街角的即兴记录。',
    year: 2024, bilibiliId: 'BV1xx411c7mT', duration: '4:45',
  },
  {
    id: 'cam-06', title: '婚礼·晨', category: 'video', subcategory: '拍摄',
    coverImage: 'https://picsum.photos/seed/cam06/800/600',
    description: '清晨婚礼纪实，自然光拍摄，全程无干预。',
    year: 2023, client: '婚礼定制', bilibiliId: 'BV1xx411c7mU', duration: '8:10',
  },

  // =====================================================
  // 照片 — 人像
  // =====================================================
  {
    id: 'portrait-01', title: '光与影之间', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt01/800/600',
    description: '自然光环境人像，窗光勾勒轮廓。',
    year: 2024, location: '上海',
  },
  {
    id: 'portrait-02', title: '街头肖像', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt02/800/600',
    description: '街拍肖像系列，捕捉陌生人最真实的瞬间。',
    year: 2024, location: '东京',
  },
  {
    id: 'portrait-03', title: '黑白·舞者', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt03/800/600',
    description: '舞蹈演员的肢体语言，高对比黑白胶片感。',
    year: 2023, location: '北京',
  },
  {
    id: 'portrait-04', title: '花与少女', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt04/800/600',
    description: '春日花田人像，柔和色调与自然光。',
    year: 2024,
  },
  {
    id: 'portrait-05', title: '劳动者', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt05/800/600',
    description: '各行各业劳动者的肖像合集。',
    year: 2023, location: '广州',
  },
  {
    id: 'portrait-06', title: '雨夜', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt06/800/600',
    description: '雨天街头的霓虹灯下人像。',
    year: 2024, location: '重庆',
  },
  {
    id: 'portrait-07', title: '逆光', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt07/800/600',
    description: '黄昏逆光人像，强调轮廓与氛围。',
    year: 2023,
  },
  {
    id: 'portrait-08', title: '老人与海', category: 'photo', subcategory: '人像',
    coverImage: 'https://picsum.photos/seed/pt08/800/600',
    description: '渔港老人的肖像系列，岁月的痕迹。',
    year: 2022, location: '舟山',
  },

  // =====================================================
  // 照片 — 产品
  // =====================================================
  {
    id: 'product-01', title: '陶瓷器', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr01/800/600',
    description: '手工陶瓷产品摄影，突出材质与质感。',
    year: 2024, client: '素陶工作室',
  },
  {
    id: 'product-02', title: '腕表细节', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr02/800/600',
    description: '微距产品摄影，金属与玻璃的光泽表现。',
    year: 2024, client: '时间工坊',
  },
  {
    id: 'product-03', title: '香水静物', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr03/800/600',
    description: '香水产品静物摄影，光影与液体质感。',
    year: 2023, client: '馥郁品牌',
  },
  {
    id: 'product-04', title: '鞋履视觉', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr04/800/600',
    description: '运动鞋产品棚拍与场景图。',
    year: 2024, client: 'Urban Walker',
  },
  {
    id: 'product-05', title: '茶具组', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr05/800/600',
    description: '茶具产品摄影，中国风的静物构图。',
    year: 2023, client: '云水间茶社',
  },
  {
    id: 'product-06', title: '耳机产品图', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr06/800/600',
    description: '耳机产品渲染级棚拍，材质细节表现。',
    year: 2024, client: '声学实验室',
  },
  {
    id: 'product-07', title: '食品摄影', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr07/800/600',
    description: '美食产品摄影，商业菜单与包装视觉。',
    year: 2023, client: '拾味餐饮',
  },
  {
    id: 'product-08', title: '珠宝微距', category: 'photo', subcategory: '产品',
    coverImage: 'https://picsum.photos/seed/pr08/800/600',
    description: '珠宝首饰微距摄影，宝石切面的光学表现。',
    year: 2023, client: '臻品珠宝',
  },

  // =====================================================
  // 照片 — 手机摄影
  // =====================================================
  {
    id: 'mobile-01', title: '地铁众生', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb01/800/600',
    description: '手机抓拍地铁车厢里的众生相。',
    year: 2024, location: '上海地铁',
  },
  {
    id: 'mobile-02', title: '建筑线条', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb02/800/600',
    description: '手机拍摄城市建筑抽象线条与几何。',
    year: 2024, location: '北京',
  },
  {
    id: 'mobile-03', title: '日常切片', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb03/800/600',
    description: '日常生活中的色彩与构图练习。',
    year: 2024, location: '杭州',
  },
  {
    id: 'mobile-04', title: '倒影', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb04/800/600',
    description: '雨后积水中的城市倒影。',
    year: 2023, location: '苏州',
  },
  {
    id: 'mobile-05', title: '夜的城市', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb05/800/600',
    description: '手机夜景模式下的城市光影。',
    year: 2024, location: '成都',
  },
  {
    id: 'mobile-06', title: '街角咖啡', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb06/800/600',
    description: '手机拍摄咖啡馆里的氛围细节。',
    year: 2024,
  },
  {
    id: 'mobile-07', title: '天空之下', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb07/800/600',
    description: '天空与建筑物的极简构图手机摄影。',
    year: 2023, location: '深圳',
  },
  {
    id: 'mobile-08', title: '市集', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb08/800/600',
    description: '菜市场的色彩与烟火气手机记录。',
    year: 2024, location: '昆明',
  },
  {
    id: 'mobile-09', title: '清晨的光', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb09/800/600',
    description: '清晨第一缕光线穿过窗帘的手机捕捉。',
    year: 2024,
  },
  {
    id: 'mobile-10', title: '窗外', category: 'photo', subcategory: '手机摄影',
    coverImage: 'https://picsum.photos/seed/mb10/800/600',
    description: '不同城市、不同窗外的手机摄影合集。',
    year: 2023,
  },

  // =====================================================
  // AI — 视频
  // =====================================================
  {
    id: 'ai-v-01', title: '异世界城市', category: 'ai', subcategory: '视频',
    coverImage: 'https://picsum.photos/seed/ai01/800/600',
    description: 'AI 生成与实拍结合的概念短片，探索未来城市的视觉可能。',
    year: 2024, bilibiliId: 'BV1xx411c7mV', duration: '2:15',
  },
  {
    id: 'ai-v-02', title: '梦境生成器', category: 'ai', subcategory: '视频',
    coverImage: 'https://picsum.photos/seed/ai02/800/600',
    description: '基于 Stable Diffusion + 动态插帧的纯 AI 实验短片。',
    year: 2024, bilibiliId: 'BV1xx411c7mW', duration: '3:00',
  },
  {
    id: 'ai-v-03', title: '文本到影像', category: 'ai', subcategory: '视频',
    coverImage: 'https://picsum.photos/seed/ai03/800/600',
    description: '用 AI 视频工具（Runway/Pika）创作的视觉诗歌。',
    year: 2024, bilibiliId: 'BV1xx411c7mX', duration: '1:50',
  },
  {
    id: 'ai-v-04', title: 'AI 导演实验', category: 'ai', subcategory: '视频',
    coverImage: 'https://picsum.photos/seed/ai04/800/600',
    description: '完全由 AI 生成脚本、分镜与成片的实验项目。',
    year: 2025, bilibiliId: 'BV1xx411c7mY', duration: '4:30',
  },
  {
    id: 'ai-v-05', title: '像素重构', category: 'ai', subcategory: '视频',
    coverImage: 'https://picsum.photos/seed/ai05/800/600',
    description: 'AI 超分辨率与风格迁移在历史胶片修复中的应用。',
    year: 2024, client: '历史影像档案馆', bilibiliId: 'BV1xx411c7mZ', duration: '5:00',
  },
  {
    id: 'ai-v-06', title: '无限客厅', category: 'ai', subcategory: '视频',
    coverImage: 'https://picsum.photos/seed/ai06/800/600',
    description: 'AI 生成的无限循环室内场景，探索生成式影像的边界。',
    year: 2025, bilibiliId: 'BV1xx411c7nA', duration: '1:20',
  },

  // =====================================================
  // AI — 图片
  // =====================================================
  {
    id: 'ai-p-01', title: '赛博园林', category: 'ai', subcategory: '图片',
    coverImage: 'https://picsum.photos/seed/aip01/800/600',
    description: '用 Midjourney 生成的中式园林与赛博元素融合系列。',
    year: 2025,
  },
  {
    id: 'ai-p-02', title: '未来肖像', category: 'ai', subcategory: '图片',
    coverImage: 'https://picsum.photos/seed/aip02/800/600',
    description: 'AI 生成的未来人类肖像，探讨技术与人性的边界。',
    year: 2024,
  },
  {
    id: 'ai-p-03', title: '物质重组', category: 'ai', subcategory: '图片',
    coverImage: 'https://picsum.photos/seed/aip03/800/600',
    description: 'Stable Diffusion 实验：日常物品的物质转换与重组。',
    year: 2025,
  },
  {
    id: 'ai-p-04', title: '方舟', category: 'ai', subcategory: '图片',
    coverImage: 'https://picsum.photos/seed/aip04/800/600',
    description: 'AI 概念艺术：末日方舟上的生态重建。',
    year: 2024,
  },
  {
    id: 'ai-p-05', title: '微观宇宙', category: 'ai', subcategory: '图片',
    coverImage: 'https://picsum.photos/seed/aip05/800/600',
    description: 'AI 生成微观世界，细胞级别的抽象视觉。',
    year: 2025,
  },
  {
    id: 'ai-p-06', title: '失落文字', category: 'ai', subcategory: '图片',
    coverImage: 'https://picsum.photos/seed/aip06/800/600',
    description: 'AI 将失传古文字转化为视觉符号的实验系列。',
    year: 2024,
  },
]

// 分类定义
export const categories = {
  video: { label: '视频', subcategories: ['导演', '后期', '拍摄'] as const },
  photo: { label: '照片', subcategories: ['人像', '产品', '手机摄影'] as const },
  ai:    { label: 'AI',   subcategories: ['视频', '图片'] as const },
}
