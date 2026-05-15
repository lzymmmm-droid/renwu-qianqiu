# 人物千秋 (Renwu Qianqiu)

**AI 驱动的历史文化展示平台** — 输入任意历史人物姓名，AI 即刻生成博物馆级专属档案。

> **参赛作品**：EdgeOne × WorkBuddy AI Prompts & Skills 挑战赛  
> **参赛赛道**：Prompt 赛道 + Skills 赛道  
> **在线体验**：https://renwu-qianqiu-nrxnpnyf.edgeone.cool  
> **GitHub**：https://github.com/lzymmmm-droid/renwu-qianqiu

---

## 项目定位

人物千秋不是一个简单的历史百科，而是一个沉浸式的文化体验空间。它的设计理念与其他同类项目有本质区别：

| 对比项 | 其他项目 | 人物千秋 |
|--------|----------|----------|
| 定位 | 信息检索工具 | 沉浸式文化体验 |
| 视觉 | 现代明亮风格 | 博物馆级幽暗风格 |
| 配色 | 通用蓝色/白色 | 青铜绿、天青、琥珀金 |
| 交互 | 列表/表格 | 时间线、轮播、动画 |

---

## 视觉设计

配色方案参考了故宫数字文物库、大英博物馆官网的设计语言：

| 色值 | 色名 | 用途 |
|------|------|------|
| #0F1419 | 深青黑 | 主背景 |
| #F0EDE8 | 暖象牙 | 主文字 |
| #5B8A72 | 青铜绿 | 点缀、按钮 |
| #6B9BD1 | 天青 | 链接、高亮 |
| #C9A96E | 琥珀金 | 标题、印章 |
| #B85C50 | 朱砂 | 标签、强调 |

玻璃态卡片效果通过一行 CSS 实现：

```css
.artifact-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

首屏设计采用中央搜索框 + 逐帧动画序列 + 6 位历史人物快速按钮，打开网页即如同走进博物馆展厅。

---

## 技术架构

### 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| 前端框架 | React + TypeScript + Vite | 19 / 8 |
| 样式方案 | Tailwind CSS | 3.4 |
| 动画引擎 | Framer Motion | — |
| 字体 | Noto Serif SC / Noto Sans SC | — |
| 后端运行时 | EdgeOne Edge Functions (V8) | — |
| 数据存储 | EdgeOne KV Storage | — |

### Edge Functions API

项目部署于 EdgeOne Pages，通过 8 个 Edge Functions 端点提供后端能力，无需额外购买服务器：

| 端点 | 方法 | 功能 |
|------|------|------|
| `/api/figures` | GET | 人物列表 |
| `/api/figure-detail?id=` | GET | 人物详情 |
| `/api/random-figure` | GET | 随机人物 |
| `/api/search?q=` | GET | 人物搜索 |
| `/api/figures/dynasty/:name` | GET | 按朝代筛选 |
| `/api/quotes` | GET | 历史名句 |
| `/api/stats` | GET | 数据统计 |
| `/api/health` | GET | 健康检查 |

Edge Functions 示例：

```typescript
export async function onRequest(context) {
  const { env } = context;
  const figures = await env.KV_BINDING.get('figures', { type: 'json' });
  return new Response(JSON.stringify(figures), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

---

## 页面结构

项目共包含 7 大板块：

1. **Hero 首屏** — AI 搜索式体验，6 位历史人物快捷入口
2. **人物志** — 4 位代表人物卡片展示
3. **时代长廊** — 7 个朝代时间线交互组件
4. **AI 生成展示** — 4 大核心能力演示
5. **数据统计** — 平台数据看板
6. **千古绝响** — 历史名句轮播组件
7. **Footer** — 关于我们、人物库导航

---

## 项目结构

```
renwu-qianqiu/
├── src/                         # 前端源码
│   ├── App.tsx                  # 主页面
│   ├── components/              # 页面组件
│   │   ├── HeroSection.tsx
│   │   ├── FigureCard.tsx
│   │   ├── TimelineSection.tsx
│   │   └── FigureDetail.tsx
│   └── data/                    # 人物数据
├── functions/                   # Edge Functions
├── prompts/                     # Prompt 赛道作品
│   └── 人物千秋.md              # 建站提示词
├── skills/                      # 人物档案馆 Skill（Skills 赛道）
│   └── 人物档案馆/
│       ├── README.md
│       └── skills/人物档案馆/
│           ├── SKILL.md
│           └── references/
│               ├── figure-research.md
│               ├── page-generation.md
│               ├── api-schema.md
│               └── deployment-guide.md
└── edgeone.json                 # EdgeOne 配置
```

---

## Skills 赛道：人物档案馆

「人物档案馆」是一个可复用的 WorkBuddy Skill，遵循 Anthropic Skills 规范。用户通过一句话即可触发 AI 自动完成从信息检索到页面生成的全流程。

**安装方式**：

在支持 Skills 的 AI 工具中直接说：
```
帮我安装这个 skill：<本仓库地址>/skills/人物档案馆
```

**触发方式**：

```
/人物档案馆 [人物名称]

# 示例
/人物档案馆 李白
/人物档案馆 诸葛亮
```

**工作流程**：
1. 人物信息检索 — 覆盖 7 个维度（生平、作品、评价、时代背景等）
2. 档案页面生成 — 输出完整 React + Tailwind 页面代码
3. Edge Functions API（可选）— 生成结构化 JSON 数据端点
4. 部署至 EdgeOne Pages

详见 [skills/人物档案馆/README.md](skills/人物档案馆/README.md)。

---

## Prompt 赛道：建站提示词

本项目同时也是 Prompt 赛道作品。`prompts/人物千秋.md` 是一份可直接复制到 AI 编程工具中使用的建站提示词，包含完整的技术栈、组件设计、样式规范、Edge Functions API 部署等全部指令。

**使用方式**：
1. 打开支持代码生成的 AI 工具（WorkBuddy、Claude Code 等）
2. 复制 [prompts/人物千秋.md](prompts/人物千秋.md) 中的完整内容
3. 粘贴给 AI，一句话即可生成整个网站并部署到 EdgeOne Pages

详见 [prompts/人物千秋.md](prompts/人物千秋.md)。

---

## 开发时间线

| 阶段 | 内容 |
|------|------|
| Day 1 | 设计稿 + 技术选型（配色方案 + 组件库规划） |
| Day 2 | 前端开发（7 大板块全部完成） |
| Day 3 | Edge Functions 开发 + 部署上线（8 个 API） |

---

## 本地开发

```bash
# 克隆项目
git clone https://github.com/lzymmmm-droid/renwu-qianqiu.git
cd renwu-qianqiu

# 安装依赖
npm install

# 本地开发（热更新）
npm run dev

# 构建生产版本
npm run build

# 部署到 EdgeOne Pages
export PAGES_SOURCE=skills
edgeone pages deploy
```

---

## 注意事项

1. Edge Functions 的 `env` 绑定需要提前在 EdgeOne Pages 控制台配置 KV 命名空间
2. 本地开发使用 `npm run dev`，最后再通过 CLI 部署
3. 部署的是 `dist` 目录，部署前确保构建成功
4. 文件名全部使用英文

---

## License

MIT

---

*Created for EdgeOne × WorkBuddy Prompts & Skills Challenge*
