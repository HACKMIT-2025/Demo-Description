# 🌟 Community Playground Documentation

## 概述 / Overview

Community Playground是AI游戏创建平台的社区分享功能，用户可以：
- 🎨 分享AI生成的游戏地图
- ❤️ 点赞喜欢的作品
- 🔄 转发和remix其他用户的地图
- 📤 分享到社交媒体
- 🔍 搜索和发现新内容

The Community Playground is a social sharing feature for the AI Game Creation Platform where users can:
- 🎨 Share AI-generated game maps
- ❤️ Like favorite creations
- 🔄 Repost and remix other users' maps
- 📤 Share to social media
- 🔍 Search and discover new content

## 🏗️ 技术架构 / Technical Architecture

### 数据库 / Database
- **Neon PostgreSQL** - 云端PostgreSQL数据库
- **主要表格 / Main Tables**:
  - `users` - 用户信息
  - `games` - 游戏地图数据
  - `likes` - 点赞记录
  - `shares` - 分享记录
  - `reposts` - 转发记录

### 前端技术栈 / Frontend Stack
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 快速构建工具
- **Tailwind CSS** - 实用优先的CSS框架
- **自定义CSS动画** - 炫酷的UI效果

### API设计 / API Design
- RESTful API设计
- 实时数据同步
- 响应式设计支持移动端

## 🚀 快速开始 / Quick Start

### 1. 环境配置 / Environment Setup

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑环境变量，填入你的Neon数据库URL
nano .env
```

### 2. 数据库设置 / Database Setup

1. 在 [Neon Console](https://console.neon.tech/) 创建新的PostgreSQL数据库
2. 复制连接字符串到 `.env` 文件中的 `DATABASE_URL`
3. 运行SQL脚本创建表结构：

```sql
-- 在Neon SQL Editor中运行
\i src/database/schema.sql
```

### 3. 启动开发服务器 / Start Development Server

```bash
npm run dev
```

访问 `http://localhost:5173/community.html` 查看社区页面

## 📱 功能特性 / Features

### 🎮 游戏地图展示 / Game Map Display
- **响应式网格布局** - 自适应不同屏幕尺寸
- **悬浮预览效果** - 鼠标悬停显示播放按钮
- **标签分类系统** - 按游戏类型筛选
- **难度等级标识** - 易、中、难、极难四个等级

### 👥 社交互动 / Social Interactions

#### ❤️ 点赞功能 / Like Feature
```typescript
// 点赞API调用
await communityAPI.likeGame(gameId);
// 取消点赞
await communityAPI.unlikeGame(gameId);
```

#### 🔄 转发功能 / Repost Feature
```typescript
// 转发/remix游戏
await communityAPI.repostGame(gameId);
```

#### 📤 分享功能 / Share Feature
支持多平台分享：
- Twitter
- Discord
- Reddit
- 直接链接复制

### 🔍 搜索和筛选 / Search & Filter

#### 搜索功能 / Search
- 游戏标题搜索
- 创建者搜索
- 标签搜索
- 实时搜索建议

#### 筛选选项 / Filter Options
- 🆕 最新 / Latest
- 🔥 热门 / Trending
- ❤️ 最多点赞 / Most Liked
- 🎮 最多游玩 / Most Played
- ⭐ 精选 / Featured

## 🎨 UI设计特点 / UI Design Features

### 炫酷动画效果 / Cool Animations
- **悬浮效果** - 卡片3D悬浮
- **粒子背景** - 动态粒子系统
- **霓虹发光** - 赛博朋克风格发光
- **全息卡片** - 全息投影效果
- **过渡动画** - 流畅的页面过渡

### 响应式设计 / Responsive Design
```css
/* 移动端适配 */
@media (max-width: 768px) {
  .map-grid {
    grid-template-columns: 1fr;
  }
}
```

## 📊 数据模型 / Data Models

### Game 模型
```typescript
interface Game {
  id: string;
  title: string;
  description: string;
  game_url: string;          // 游戏链接
  thumbnail_url: string;     // 缩略图
  creator_name: string;      // 创建者
  likes_count: number;       // 点赞数
  shares_count: number;      // 分享数
  plays_count: number;       // 游玩数
  tags: string[];            // 标签
  difficulty_level: string;  // 难度
  is_featured: boolean;      // 是否精选
  is_trending: boolean;      // 是否热门
}
```

## 🛠️ 部署指南 / Deployment Guide

### Vercel 部署
```json
{
  "builds": [
    {
      "src": "community.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/community",
      "dest": "/community.html"
    }
  ]
}
```

### 环境变量设置
在Vercel Dashboard中设置：
- `DATABASE_URL` - Neon PostgreSQL连接字符串
- `VITE_APP_URL` - 应用域名
- `VITE_API_URL` - API服务器地址

## 🔧 开发指南 / Development Guide

### 添加新功能 / Adding New Features

1. **扩展数据模型**
```sql
-- 在schema.sql中添加新表
CREATE TABLE IF NOT EXISTS new_feature (...);
```

2. **更新TypeScript接口**
```typescript
// 在client.ts中添加新接口
interface NewFeature {
  id: string;
  // ...其他字段
}
```

3. **实现API方法**
```typescript
// 在CommunityAPIClient类中添加方法
async getNewFeature(id: string): Promise<NewFeature> {
  // 实现逻辑
}
```

### 自定义主题 / Custom Themes
在 `community.css` 中修改CSS变量：
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

## 🧪 测试 / Testing

### 运行测试
```bash
npm test
```

### 手动测试清单 / Manual Testing Checklist
- [ ] 页面加载正常
- [ ] 搜索功能工作
- [ ] 筛选功能工作
- [ ] 点赞功能工作
- [ ] 分享功能工作
- [ ] 响应式设计正常
- [ ] 动画效果流畅

## 🐛 故障排除 / Troubleshooting

### 常见问题 / Common Issues

**数据库连接失败**
```bash
Error: connection to server failed
```
解决方案：检查 `DATABASE_URL` 是否正确配置

**样式加载失败**
```bash
Failed to load CSS
```
解决方案：检查Vite配置和CSS导入路径

**API调用失败**
```bash
Failed to fetch community data
```
解决方案：检查网络连接和API端点配置

## 🎯 未来规划 / Future Plans

- [ ] 用户认证系统
- [ ] 实时聊天功能
- [ ] 游戏评分系统
- [ ] 创作者排行榜
- [ ] 移动端App
- [ ] AI推荐算法
- [ ] 游戏收藏功能
- [ ] 社区挑战赛

## 📞 支持 / Support

如果遇到问题，请：
1. 查看本文档的故障排除部分
2. 提交 GitHub Issue
3. 联系开发团队

---

**Built with ❤️ for HackMIT 2025**

🌟 **Star this project** if you find it useful!
🐛 **Report bugs** to help us improve!
🤝 **Contribute** to make it even better!