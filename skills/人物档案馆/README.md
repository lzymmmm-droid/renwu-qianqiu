# 人物档案馆 — AI 历史人物档案生成 Skill

一份引导 AI Agent 一键生成博物馆级历史人物档案页面的 Skill。输入人物名称，AI 自动完成信息检索、页面生成、API 搭建全流程。

> 本 Skill 是参赛作品「人物千秋」的核心能力包，部署阶段会交由官方 `edgeone-pages-deploy` Skill 完成。

---

## 这个 Skill 做什么

用户只需说 **"帮我生成李白的人物档案"** 之类的话，AI Agent 会：

1. **人物信息检索** — 自动检索 7 个维度的历史信息（生平、作品、评价、时代背景等）
2. **生成档案页面** — 输出完整的 React + Tailwind 页面，包含 Hero、时间线、成就、名句、评价等板块
3. **搭建 API** — 可选生成 Edge Functions 端点，返回结构化人物 JSON 数据
4. **部署上线** — 衔接 `edgeone-pages-deploy` Skill 完成部署

---

## 目录结构

```
skills/人物档案馆/
├── README.md                                # 你正在看的文件
└── skills/人物档案馆/
    ├── SKILL.md                             # Skill 入口（frontmatter + 主决策流程）
    └── references/                          # 按需加载的详细文档
        ├── figure-research.md               # Step 1：人物信息检索规范
        ├── page-generation.md               # Step 2：档案页面生成规范（设计+结构+代码）
        ├── api-schema.md                    # Step 3：Edge Functions API + 数据 Schema
        └── deployment-guide.md              # Step 4：部署指引 + 注意事项
```

遵循 Anthropic `skill-creator` 规范：`SKILL.md` 保持轻量（入口 + 决策树），细节文档放 `references/` 按需加载。

---

## 安装方式

### 方式一：自然语言安装（推荐）

在支持 Skills 的 AI 编程工具（WorkBuddy / Claude Code / Cursor 等）中：

> 帮我安装这个 skill：`<本仓库地址>/skills/人物档案馆`

AI Agent 会自动拉取并放到对应位置。

### 方式二：手动安装

把 `skills/人物档案馆/skills/人物档案馆/` 整个目录复制到你的工具对应 skills 目录即可，例如：

- **WorkBuddy**：`~/.workbuddy/skills/`
- **Claude Code**：`~/.claude/skills/`
- **Cursor**：项目 `.cursor/rules/` 或全局 skills 目录

---

## 触发方式

在 AI 对话中使用自然语言或斜杠命令：

```
/人物档案馆 [人物名称]
```

**示例**：

- "/人物档案馆 李白"
- "/人物档案馆 王阳明"
- "帮我生成诸葛亮的人物档案"
- "我想看看苏轼的生平时间线"
- "Generate a historical profile for Qin Shi Huang"

---

## 与其他 EdgeOne Pages Skill 的关系

| Skill | 职责 | 来源 |
|-------|------|------|
| **人物档案馆**（本 Skill） | 从 0 生成人物档案页面 | 本仓库 |
| `edgeone-pages-dev` | 在已有 Pages 项目中开发 Edge/Cloud Functions | [官方](https://github.com/TencentEdgeOne/edgeone-pages-skills) |
| `edgeone-pages-deploy` | 把项目部署到 EdgeOne Pages | [官方](https://github.com/TencentEdgeOne/edgeone-pages-skills) |

**推荐三者一起安装**，这样从生成 → 开发 → 部署全流程 AI 自动完成。

---

## 前置依赖

- Node.js ≥ 18
- npm / pnpm / yarn 任一
- （部署阶段需要）EdgeOne Pages 账号

---

## License

MIT

---

*Created for EdgeOne × WorkBuddy Prompts & Skills Challenge*
*参赛赛道：Skills 赛道*
*作品名称：人物档案馆 (Person Archive)*
