// 朝代列表 API — GET /api/dynasties
export async function onRequestGet() {
  const dynasties = [
    { id: 'xian-qin', name: '先秦', period: '前770-前221', figures: '老子、孔子、屈原', color: '#5B6B4D', description: '百家争鸣的思想源泉' },
    { id: 'qin-han', name: '秦汉', period: '前221-220', figures: '秦始皇、司马迁、张衡', color: '#A85A4D', description: '大一统的帝国时代' },
    { id: 'wei-jin', name: '魏晋', period: '220-420', figures: '曹操、陶渊明、王羲之', color: '#DCE3D8', description: '风骨与觉醒的岁月' },
    { id: 'sui-tang', name: '隋唐', period: '581-907', figures: '李白、杜甫、武则天', color: '#C9A04E', description: '华夏文明的巅峰盛世' },
    { id: 'song', name: '宋代', period: '960-1279', figures: '苏轼、李清照、岳飞', color: '#5BA3C4', description: '文以载道的风雅时代' },
    { id: 'yuan', name: '元代', period: '1271-1368', figures: '关汉卿、赵孟頫', color: '#5B6B4D', description: '多元文化的交融时期' },
    { id: 'ming-qing', name: '明清', period: '1368-1912', figures: '王阳明、郑成功、曹雪芹', color: '#A85A4D', description: '承前启后的帝国终章' }
  ];

  return new Response(JSON.stringify({ dynasties }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
