# Edge Functions API + 数据 Schema (Step 3)

为生成的人物档案提供可选的后端 API 支持。

## API 端点

| 端点 | 方法 | 用途 |
|------|------|------|
| `/api/figures` | GET | 获取所有人物列表 |
| `/api/figures/:id` | GET | 获取单个人物详情 |
| `/api/figures/random` | GET | 获取随机人物 |
| `/api/figures/search?q=` | GET | 按关键词搜索人物 |
| `/api/figures/dynasty/:name` | GET | 按朝代筛选人物 |
| `/api/quotes` | GET | 获取历史名句列表 |
| `/api/stats` | GET | 获取平台数据统计 |

## 人物数据 Schema

```typescript
interface Figure {
  id: string;
  name: string;
  courtesyName?: string;  // 字
  pseudonym?: string;     // 号
  birthYear?: number;
  deathYear?: number;
  dynasty: string;
  birthplace?: string;
  title: string;          // 称号（诗仙/卧龙等）
  summary: string;        // 一句话概括
  biography: string;      // 生平传记全文
  timeline: TimelineEvent[];
  achievements: Achievement[];
  works: Work[];
  quotes: Quote[];
  evaluations: Evaluation[];
  tags: string[];
  relatedFigures: string[];
  funFacts?: string[];
  stats: Stat[];
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: string;  // lucide icon name
}

interface Work {
  title: string;
  year?: string;
  description: string;
  type: 'poem' | 'book' | 'calligraphy' | 'painting' | 'theory' | 'other';
}

interface Quote {
  text: string;
  source: string;
  year?: string;
}

interface Evaluation {
  text: string;
  author: string;
  source: string;
  era: string;
}

interface Stat {
  number: string;
  label: string;
  desc?: string;
}
```

## Edge Function 示例

```typescript
// /functions/figures.ts — 人物列表 API
export async function onRequest(context) {
  const { env } = context;
  const figures = await env.KV_BINDING.get('figures', { type: 'json' });
  return new Response(JSON.stringify(figures), {
    headers: { 'Content-Type': 'application/json' }
  });
}

// /functions/figure-detail.ts — 人物详情 API
export async function onRequest(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const figure = await env.KV_BINDING.get(`figure:${id}`, { type: 'json' });
  if (!figure) {
    return new Response(JSON.stringify({ error: 'Figure not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify(figure), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

## KV Storage 数据结构

```
KV Namespace: 人物档案馆数据

Key                     | Value Type | 说明
------------------------|------------|------
figures                 | JSON       | 所有人物列表（摘要）
figure:{id}             | JSON       | 单个人物完整数据
quotes                  | JSON       | 历史名句列表
stats                   | JSON       | 平台统计数据
dynasty:{name}          | JSON       | 某朝代人物列表
```

## KV 绑定命名

在 EdgeOne Pages 控制台配置 KV 绑定时，推荐使用以下名称：

| 绑定名 | 命名空间 |
|--------|----------|
| `KV_BINDING` | `人物档案馆数据` |
