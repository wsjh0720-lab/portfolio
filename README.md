# Portfolio — 视频/摄影作品集网站

基于 Next.js 构建的静态作品展示网站，部署无需服务器。

## 目录结构

```
portfolio/
├── app/                    # 页面
│   ├── page.tsx            # 首页（作品网格）
│   ├── about/page.tsx      # 关于我
│   ├── contact/page.tsx    # 联系方式
│   ├── work/[id]/page.tsx  # 作品详情（视频/照片）
│   ├── not-found.tsx       # 404 页面
│   ├── layout.tsx          # 全局布局
│   └── globals.css         # 全局样式
├── components/             # 组件
│   ├── Header.tsx          # 顶栏导航
│   ├── Footer.tsx          # 页脚
│   ├── WorkGrid.tsx        # 作品网格容器
│   ├── WorkCard.tsx        # 作品卡片
│   ├── CategoryFilter.tsx  # 分类筛选
│   └── VideoEmbed.tsx      # B站嵌入播放器
├── data/
│   ├── types.ts            # 数据类型定义
│   └── works.ts            # 作品数据
├── lib/
│   └── fonts.ts            # 字体配置
├── next.config.js          # 构建配置
├── tailwind.config.ts      # 样式配置
└── package.json
```

## 本地开发

```bash
cd portfolio
npm install        # 已安装则跳过
npm run dev        # 打开 http://localhost:3000
```

## 构建静态文件

```bash
npm run build      # 生成 out/ 目录，即为完整静态网站
```

## 替换为你的内容

### 1. 作品数据 → `data/works.ts`

每条作品是一个对象，结构如下：

**视频作品：**
```typescript
{
  id: 'dir-01',                    // 唯一 ID
  title: '山城夜行',               // 作品标题
  category: 'video',               // 固定 'video'
  subcategory: '导演',             // 导演/后期/拍摄/AI
  coverImage: '/images/xxx.jpg',   // 封面图路径
  description: '...',              // 作品描述
  year: 2024,                      // 年份
  client: '某品牌',                // 可选
  bilibiliId: 'BV1xx411c7mD',     // B站 BV 号
  duration: '12:30',               // 时长
}
```

**照片作品：**
```typescript
{
  id: 'portrait-01',
  title: '光与影之间',
  category: 'photo',               // 固定 'photo'
  subcategory: '人像',             // 人像/产品/手机摄影
  coverImage: '/images/xxx.jpg',
  description: '...',
  year: 2024,
  client: '某客户',                // 可选
  location: '上海',                // 可选
}
```

替换封面图：将图片放入 `public/images/` 目录，`coverImage` 改为 `/images/xxx.jpg`。
首次使用本地图片前，编辑 `next.config.js`，将 `output: 'export'` 临时注释掉。

### 2. 个人信息

- 站名/标题 → `app/layout.tsx` 中的 `metadata.title`
- 关于页文案 → `app/about/page.tsx`
- 联系方式 → `app/contact/page.tsx`
- 社交媒体链接 → `components/Footer.tsx` 和 `app/contact/page.tsx`

### 3. 网站图标

将图标文件放入 `public/` 目录（favicon.ico）。

## 部署

### 方案 A：Vercel（推荐，国内访问好）

1. 将项目推送到 GitHub
2. 登录 [vercel.com](https://vercel.com)，导入该仓库
3. 框架选 Next.js，其他默认
4. 部署完成即获得 HTTPS 链接

### 方案 B：GitHub Pages

```bash
# 安装 gh-pages 工具
npm install -g gh-pages

# 构建并推送到 gh-pages 分支
npm run build
gh-pages -d out
```

然后在仓库 Settings → Pages 中选择 gh-pages 分支。

### 方案 C：任意静态托管

将 `out/` 目录上传到任意静态托管平台（Netlify、七牛云、又拍云、阿里云 OSS 等）。

## 设计风格参考

基于 Cori Corinne 编辑风格：
- 暖米色画布底（#f6f5f0）
- 深灰文字（#292a2c）
- 极简无圆角
- 大号衬线展示字体 + 无衬线正文
- 大量留白
- 全页面高对比黑白灰
