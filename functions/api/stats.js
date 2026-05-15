// 统计数据 API — GET /api/stats
export async function onRequestGet() {
  const stats = [
    { number: '5000+', label: '位历史人物', desc: '从先秦到近代', icon: 'users' },
    { number: '200+', label: '个历史朝代', desc: '跨越五千年文明', icon: 'globe' },
    { number: '10000+', label: '条经典名句', desc: '含背景解读', icon: 'quote' },
    { number: '50万+', label: '次AI生成', desc: '累计生成量', icon: 'sparkles' }
  ];

  return new Response(JSON.stringify({ stats }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
