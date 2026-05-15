# 人物千秋 (Renwu Qianqiu) — AI 历史文化展示平台

输入任意历史人物姓名，AI 即刻生成博物馆级专属档案。从李白到武则天，穿越五千年对话先贤。

> **参赛作品**：EdgeOne × WorkBuddy AI Prompts & Skills 挑战赛  
> **参赛赛道**：Prompt 赛道 + Skills 赛道  
> **在线体验**：https://renwu-qianqiu-nrxnpnyf.edgeone.cool

---

## 📸 效果预览

![Hero 首屏](screenshot-hero.png)
![人物志卡片](screenshot-figures.png)
![时代长廊时间线](screenshot-timeline.png)
![李白详情页](screenshot-libai.png)

---

## 🎯 项目亮点

| 维度 | 说明 |
|------|------|
| **视觉风格** | 博物馆级暗色 UI，青铜绿/天青/琥珀金配色，玻璃态卡片 |
| **交互体验** | 逐帧动画首屏、时间线交互、历史名句轮播 |
| **技术架构** | 纯前端 + Edge Functions 8个 API 端点，零服务器成本 |
| **部署平台** | EdgeOne Pages 免费部署 |

## 🏗️ 技术栈

- **前端**：React 19 + TypeScript + Vite 8 + Tailwind CSS 3.4
- **动画**：Framer Motion
- **字体**：Noto Serif SC / Noto Sans SC
- **后端**：EdgeOne Edge Functions (V8 运行时) + KV Storage
- **部署**：EdgeOne Pages CLI

## 📁 项目结构

```
renwu-qianqiu/
├── README.md                    # 本文件
├── src/                         # 前端源码
│   ├── App.tsx                  # 主页面组件
│   ├── components/              # 组件目录
│   │   ├── HeroSection.tsx
│   │   ├── FigureCard.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── FigureDetail.tsx
│   │   └── ...
│   └── data/                    # 人物数据
├── functions/                   # Edge Functions
│   ├── figures.ts               # 人物列表 API
│   ├── figure-detail.ts         # 人物详情 API
│   ├── random-figure.ts         # 随机人物 API
│   ├── search.ts                # 人物搜索 API
│   └── ...
├── skills/                      # 🎯 Skills 赛道作品
│   └── 人物档案馆/              # 人物档案馆 Skill
│       ├── README.md            # Skill 说明
│       └── skills/人物档案馆/   
│           ├── SKILL.md         # Skill 入口
│           └── references/      # 详细文档
├── assets/                      # 截图、素材等
└── edgeone.json                 # EdgeOne 配置
```

---

## 🧩 Skills 赛道：人物档案馆

人物档案馆是一个可复用的 WorkBuddy Skill，一句话即可让 AI 自动生成完整的历史人物档案页面。

**安装方式**：
```
# 在支持 Skills 的 AI 工具中直接说：
帮我安装这个 skill：<本仓库地址>/skills/人物档案馆
```

**触发方式**：
```
/人物档案馆 [人物名称]
# 例如：/人物档案馆 李白、/人物档案馆 诸葛亮
```

详见 [skills/人物档案馆/README.md](skills/人物档案馆/README.md)。

---

## 🚀 本地开发

```bash
# 克隆项目
git clone https://github.com/lzymmmm-droid/renwu-qianqiu.git
cd renwu-qianqiu

# 安装依赖
npm install

# 本地开发
npm run dev

# 构建
npm run build

# 部署到 EdgeOne Pages
export PAGES_SOURCE=skills
edgeone pages deploy
```

---

## 📄 License

MIT

---

*Created for EdgeOne × WorkBuddy Prompts & Skills Challenge*
