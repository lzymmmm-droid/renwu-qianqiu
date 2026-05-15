# 人物千秋 (Renwu Qianqiu) — AI Historical Figure Generator 🏛️

> **穿越时空，对话先贤** | EdgeOne × WorkBuddy Prompts & Skills 挑战赛参赛作品

## 📋 项目概览

**人物千秋** 是一个沉浸式的 AI 历史名人生成器展示站。它融合了博物馆级的暗色叙事美学与 AI 生成概念的交互演示，为您呈现一场穿越五千年文明的数字人文之旅。

### 参赛赛道

| 赛道 | 文件 | 说明 |
|------|------|------|
| **Prompts赛道 (B版)** | [`renwu-qianqiu-prompt.md`](../renwu-qianqiu-prompt.md) | 面向AI的Prompt，完整定义品牌、设计、技术栈与布局规则 |
| **Skills赛道 (C版)** | [`.workbuddy/skills/人物档案馆/SKILL.md`](.workbuddy/skills/人物档案馆/SKILL.md) | 可复用的WorkBuddy Skill `/人物档案馆 [人物名称]` |

## ✨ 核心特色

### 🏛️ 博物馆级暗色美学
- 深青黑底色 (`#0F1419`) + 暖象牙文字 (`#F0EDE8`)
- 历史人物专属色系：青铜绿、天青、琥珀金、朱砂
- 玻璃态UI系统 (artifact-glass / artifact-glass-strong)
- 印章效果、书法字体等东方美学元素

### 🎯 AI搜索式首屏体验
- 中央搜索框 (Sparkles图标暗示AI能力)
- 6位预置人物快速按钮 (李白、苏轼、诸葛亮、王阳明、武则天、杜甫)
- 逐帧动画序列，打造沉浸式入场

### 📜 7大板块内容结构
1. **Hero首屏** — AI搜索体验
2. **人物志** — 4位代表历史人物卡片
3. **时代长廊** — 7个时代时间线交互
4. **AI生成展示** — 概念演示与功能说明
5. **数据统计** — 4项平台数据
6. **千古绝响** — 历史名句展示
7. **行动号召+Footer**

### ⚡ EdgeOne Pages 原生能力
- **Edge Functions**: 8个API端点提供人物数据服务
- **KV Storage**: 轻量缓存支持（就绪待配置）

## 🛠️ 技术栈

| 层 | 技术 |
|------|------|
| **前端** | React 19 + TypeScript + Vite 8 |
| **样式** | Tailwind CSS 3.4 + 自定义玻璃态组件 |
| **动画** | Framer Motion + CSS animations |
| **图标** | Lucide React |
| **字体** | Noto Serif SC / Noto Sans SC / Cormorant Garamond / Inter |
| **后端** | EdgeOne Pages Edge Functions (V8) |
| **数据** | EdgeOne KV Storage |
| **部署** | EdgeOne Pages (CDN) |

## 📁 项目结构

```
renwu-qianqiu/
├── .workbuddy/skills/人物档案馆/
│   └── SKILL.md                # Skills赛道参赛作品
├── functions/
│   └── api/
│       ├── figures.js           # GET /api/figures?dynasty=&category=
│       ├── figures/[id].js      # GET /api/figures/:id
│       ├── figures/random.js    # GET /api/figures/random
│       ├── dynasties.js         # GET /api/dynasties
│       ├── stats.js             # GET /api/stats
│       ├── quotes.js            # GET /api/quotes
│       ├── search.js            # GET /api/search?q=
│       └── health.js            # GET /api/health
├── src/
│   ├── App.tsx                  # 主应用 (7大板块)
│   ├── index.css                # 全局样式 + 玻璃态组件
│   └── main.tsx                 # 入口
├── dist/                        # 构建产物 (已就绪)
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🚀 本地开发

```bash
# 1. 进入项目目录
cd renwu-qianqiu

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 构建生产版本
npm run build
```

## 🌐 部署到 EdgeOne Pages

### 前提条件

1. 注册 EdgeOne 账号: https://console.edgeone.ai
2. 开通 EdgeOne Pages 服务（控制台 → Pages → 开通服务）
3. 本地登录 CLI:

```bash
npx edgeone login
```

### 部署命令

```bash
cd renwu-qianqiu
export PAGES_SOURCE=skills
npx edgeone pages deploy . -n 'renwu-qianqiu' -e production -a global
```

### 部署参数说明

| 参数 | 说明 | 建议值 |
|------|------|--------|
| `directoryOrZip` | 要部署的目录 | `.` (项目根目录) |
| `-n, --name` | 项目名称 | `renwu-qianqiu` |
| `-e, --env` | 部署环境 | `production` 或 `preview` |
| `-a, --area` | 部署区域 | `global`（全球加速）或 `overseas` |

## 💡 创意差异化

官方案例库中**零个历史人文类作品**——全部是电商、SaaS、AI工具、旅行等商业场景。

**人物千秋**填补了这个空白：

- ❌ 不是百科 → ✅ 沉浸式文化体验
- ❌ 不是工具 → ✅ 精神空间
- ❌ 不是现代明亮 → ✅ 博物馆级幽暗
- ❌ 不是通用香槟金 → ✅ 青铜绿、天青、琥珀金
- ❌ 不是静态展示 → ✅ AI名人生成概念演示

## 🎨 视觉参考

- 故宫博物院数字文物库
- 大英博物馆官网
- 卢浮宫线上展厅
- 博物馆级暗色调叙事

## 📝 参赛信息

- **赛事**: EdgeOne × WorkBuddy Prompts & Skills 挑战赛
- **作品**: 人物千秋 (Renwu Qianqiu)
- **作者**: 振一
- **截止**: 2026年5月15日

---

*Created with ❤️ for cultural heritage and AI*