# 部署指引 + 注意事项 (Step 4)

## 部署流程

### 1. 本地构建

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build
```

### 2. 部署到 EdgeOne Pages

推荐使用官方 `edgeone-pages-deploy` Skill 完成部署：

```bash
# 设置环境变量（必须）
export PAGES_SOURCE=skills

# 检查 CLI 版本
edgeone -v

# 登录（首次需要）
edgeone login --site china

# 部署
edgeone pages deploy
```

### 3. EdgeOne 控制台配置

部署完成后，在 EdgeOne Pages 控制台进行以下配置：

1. **KV Storage**：创建 KV 命名空间「人物档案馆数据」，绑定到项目
2. **环境变量**：根据需要配置自定义域名等
3. **Edge Functions**：确认所有 8 个 API 端点正常运行

## 避坑指南

### 1. Edge Functions 的 env 绑定

Edge Functions 的 `env` 绑定需要提前在控制台配置好 KV 命名空间，否则运行时 `env.KV_BINDING` 为 undefined。

### 2. 本地开发 vs 部署

```bash
# 本地开发（热更新）
npm run dev

# CLI 本地开发（带 Edge Functions 支持）
export PAGES_SOURCE=skills
edgeone pages dev
```

本地开发用 `npm run dev`，最后再通过 CLI 部署。

### 3. 部署目录

`edgeone pages deploy` 默认部署的是项目根目录，如果项目有构建步骤，确保 `dist/` 目录包含所有静态资源。

### 4. 文件名规范

- 文件名全部使用英文，不要用中文名
- Edge Functions 文件名使用驼峰或短横线命名（如 `figure-detail.ts`）

### 5. 部署后验证

部署成功后 CLI 会输出访问 URL：

```
EDGEONE_DEPLOY_URL=https://<project>-<hash>.edgeone.cool?<auth_params>
```

复制完整 URL（含 auth 参数）到浏览器验证。

## 所需依赖

| 依赖 | 版本 |
|------|------|
| Node.js | ≥ 18 |
| edgeone CLI | ≥ 1.2.30 |
| npm / pnpm / yarn | 任一 |

## 推荐 Skill 组合

| 用途 | Skill |
|------|-------|
| 从 0 生成人物档案 | 本 Skill（人物档案馆） |
| 开发 Edge/Cloud Functions | `edgeone-pages-dev` |
| 部署上线 | `edgeone-pages-deploy` |
