// 随机人物 API — GET /api/figures/random
export async function onRequestGet() {
  const figures = [
    { id: 'li-bai', name: '李白', nameEn: 'Li Bai', era: '盛唐', title: '诗仙' },
    { id: 'su-shi', name: '苏轼', nameEn: 'Su Shi', era: '北宋', title: '东坡居士' },
    { id: 'zhuge-liang', name: '诸葛亮', nameEn: 'Zhuge Liang', era: '三国', title: '卧龙先生' },
    { id: 'wang-yangming', name: '王阳明', nameEn: 'Wang Yangming', era: '明代', title: '阳明先生' },
    { id: 'wu-zetian', name: '武则天', nameEn: 'Wu Zetian', era: '盛唐', title: '一代女皇' },
    { id: 'du-fu', name: '杜甫', nameEn: 'Du Fu', era: '盛唐', title: '诗圣' },
    { id: 'qu-yuan', name: '屈原', nameEn: 'Qu Yuan', era: '先秦', title: '爱国诗人' },
    { id: 'cao-cao', name: '曹操', nameEn: 'Cao Cao', era: '三国', title: '一代枭雄' },
    { id: 'li-qingzhao', name: '李清照', nameEn: 'Li Qingzhao', era: '宋代', title: '千古第一才女' },
    { id: 'guan-yu', name: '关羽', nameEn: 'Guan Yu', era: '三国', title: '武圣' }
  ];

  const random = figures[Math.floor(Math.random() * figures.length)];

  return new Response(JSON.stringify({ figure: random }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
