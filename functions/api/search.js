// AI搜索人物 API — GET /api/search?q=李白
export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';

  if (!query.trim()) {
    return new Response(JSON.stringify({ error: '请输入搜索关键词', results: [] }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400
    });
  }

  // 模拟AI搜索的人物数据库
  const database = [
    { id: 'li-bai', name: '李白', nameEn: 'Li Bai', era: '盛唐', title: '诗仙', keywords: ['诗人', '浪漫主义', '酒'] },
    { id: 'du-fu', name: '杜甫', nameEn: 'Du Fu', era: '盛唐', title: '诗圣', keywords: ['诗人', '现实主义', '诗史'] },
    { id: 'su-shi', name: '苏轼', nameEn: 'Su Shi', era: '北宋', title: '东坡居士', keywords: ['文人', '词人', '美食'] },
    { id: 'li-qingzhao', name: '李清照', nameEn: 'Li Qingzhao', era: '宋代', title: '千古第一才女', keywords: ['词人', '婉约派', '才女'] },
    { id: 'wang-yangming', name: '王阳明', nameEn: 'Wang Yangming', era: '明代', title: '阳明先生', keywords: ['哲学家', '心学', '知行合一'] },
    { id: 'zhuge-liang', name: '诸葛亮', nameEn: 'Zhuge Liang', era: '三国', title: '卧龙先生', keywords: ['谋士', '政治家', '智慧'] },
    { id: 'wu-zetian', name: '武则天', nameEn: 'Wu Zetian', era: '盛唐', title: '一代女皇', keywords: ['皇帝', '女皇', '政治家'] },
    { id: 'cao-cao', name: '曹操', nameEn: 'Cao Cao', era: '三国', title: '一代枭雄', keywords: ['政治家', '诗人', '枭雄'] },
    { id: 'qu-yuan', name: '屈原', nameEn: 'Qu Yuan', era: '先秦', title: '爱国诗人', keywords: ['诗人', '爱国', '楚辞'] },
    { id: 'guan-yu', name: '关羽', nameEn: 'Guan Yu', era: '三国', title: '武圣', keywords: ['武将', '忠义', '武圣'] },
    { id: 'yue-fei', name: '岳飞', nameEn: 'Yue Fei', era: '宋代', title: '民族英雄', keywords: ['武将', '抗金', '忠义'] },
    { id: 'zheng-he', name: '郑和', nameEn: 'Zheng He', era: '明代', title: '航海家', keywords: ['航海', '外交', '探险'] },
    { id: 'qin-shi-huang', name: '秦始皇', nameEn: 'Qin Shi Huang', era: '秦朝', title: '千古一帝', keywords: ['皇帝', '统一', '焚书坑儒'] },
    { id: 'kong-zi', name: '孔子', nameEn: 'Confucius', era: '先秦', title: '至圣先师', keywords: ['哲学家', '教育家', '儒家'] },
    { id: 'lao-zi', name: '老子', nameEn: 'Laozi', era: '先秦', title: '道家始祖', keywords: ['哲学家', '道家', '道德经'] }
  ];

  // 智能搜索：匹配姓名、朝代、关键词
  const q = query.toLowerCase();
  const results = database.filter(person => {
    const nameMatch = person.name.includes(query) || person.nameEn.toLowerCase().includes(q);
    const eraMatch = person.era.includes(query);
    const titleMatch = person.title.includes(query);
    const keywordMatch = person.keywords.some(k => k.includes(query));
    return nameMatch || eraMatch || titleMatch || keywordMatch;
  });

  return new Response(JSON.stringify({ query, results, total: results.length }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
