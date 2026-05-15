// 人物列表 API — GET /api/figures?dynasty=盛唐&category=诗人
export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const dynasty = url.searchParams.get('dynasty');
  const category = url.searchParams.get('category');

  const figures = [
    {
      id: 'li-bai',
      name: '李白',
      nameEn: 'Li Bai',
      era: '盛唐',
      title: '诗仙',
      description: '笔落惊风雨，诗成泣鬼神。一生放浪不羁，留下千首绝唱。',
      image: 'https://images.unsplash.com/photo-1531845116688-488d39dbd8ab?w=600&h=800&fit=crop',
      tags: ['诗人', '浪漫主义', '盛唐气象'],
      birthYear: 701,
      deathYear: 762
    },
    {
      id: 'su-shi',
      name: '苏轼',
      nameEn: 'Su Shi',
      era: '北宋',
      title: '东坡居士',
      description: '大江东去，浪淘尽千古风流人物。诗词书画，无一不精。',
      image: 'https://images.unsplash.com/photo-1609767604082-8ff9b4e7aa44?w=600&h=800&fit=crop',
      tags: ['文人', '词人', '美食家', '书画家'],
      birthYear: 1037,
      deathYear: 1101
    },
    {
      id: 'zhuge-liang',
      name: '诸葛亮',
      nameEn: 'Zhuge Liang',
      era: '三国',
      title: '卧龙先生',
      description: '鞠躬尽瘁，死而后已。三分天下的智谋，千古传颂的忠诚。',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      tags: ['谋士', '政治家', '军事家'],
      birthYear: 181,
      deathYear: 234
    },
    {
      id: 'wang-yangming',
      name: '王阳明',
      nameEn: 'Wang Yangming',
      era: '明代',
      title: '阳明先生',
      description: '知行合一，致良知。心学集大成者，立德立功立言三不朽。',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=800&fit=crop',
      tags: ['哲学家', '教育家', '军事家'],
      birthYear: 1472,
      deathYear: 1529
    },
    {
      id: 'wu-zetian',
      name: '武则天',
      nameEn: 'Wu Zetian',
      era: '盛唐',
      title: '一代女皇',
      description: '中国历史上唯一正统女皇帝。政启开元，治宏贞观。',
      image: 'https://images.unsplash.com/photo-1578321272128-5b87e6a6482e?w=600&h=800&fit=crop',
      tags: ['皇帝', '政治家', '女皇'],
      birthYear: 624,
      deathYear: 705
    },
    {
      id: 'du-fu',
      name: '杜甫',
      nameEn: 'Du Fu',
      era: '盛唐',
      title: '诗圣',
      description: '安得广厦千万间，大庇天下寒士俱欢颜。沉郁顿挫，诗史千秋。',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      tags: ['诗人', '现实主义', '诗史'],
      birthYear: 712,
      deathYear: 770
    }
  ];

  let result = figures;

  if (dynasty) {
    result = result.filter(f => f.era.includes(dynasty));
  }
  if (category) {
    result = result.filter(f => f.tags.includes(category));
  }

  return new Response(JSON.stringify({ figures: result, total: result.length }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
