// 搜索下拉菜单用的人物列表
// 仅包含有完整详情页的 6 位人物

export interface SearchResult {
  id: string;
  name: string;
  nameEn: string;
  era: string;
  title: string;
  keywords: string[];
}

export const ALL_FIGURES: SearchResult[] = [
  { id: 'li-bai', name: '李白', nameEn: 'Li Bai', era: '盛唐', title: '诗仙', keywords: ['诗人', '浪漫主义', '酒'] },
  { id: 'du-fu', name: '杜甫', nameEn: 'Du Fu', era: '盛唐', title: '诗圣', keywords: ['诗人', '现实主义', '诗史'] },
  { id: 'su-shi', name: '苏轼', nameEn: 'Su Shi', era: '北宋', title: '东坡居士', keywords: ['文人', '词人', '美食'] },
  { id: 'zhuge-liang', name: '诸葛亮', nameEn: 'Zhuge Liang', era: '三国', title: '卧龙先生', keywords: ['谋士', '政治家', '智慧'] },
  { id: 'wang-yangming', name: '王阳明', nameEn: 'Wang Yangming', era: '明代', title: '阳明先生', keywords: ['哲学家', '心学', '知行合一'] },
  { id: 'wu-zetian', name: '武则天', nameEn: 'Wu Zetian', era: '盛唐', title: '一代女皇', keywords: ['皇帝', '女皇', '政治家'] },
];

export function filterFigures(query: string): SearchResult[] {
  if (!query.trim()) return ALL_FIGURES;
  const q = query.toLowerCase();
  return ALL_FIGURES.filter((fig) => {
    if (fig.name.includes(query)) return true;
    if (fig.nameEn.toLowerCase().includes(q)) return true;
    if (fig.era.includes(query)) return true;
    if (fig.title.includes(query)) return true;
    if (fig.keywords.some((k) => k.includes(query))) return true;
    // 拼音首字母匹配
    if (query.length <= 2) {
      const initials = fig.name
        .split('')
        .map((ch) => {
          const pinyinMap: Record<string, string> = {
            '李': 'l', '白': 'b',
            '杜': 'd', '甫': 'f',
            '苏': 's', '轼': 's',
            '诸': 'z', '葛': 'g', '亮': 'l',
            '王': 'w', '阳': 'y', '明': 'm',
            '武': 'w', '则': 'z', '天': 't',
          };
          return pinyinMap[ch] || '';
        })
        .join('');
      if (initials.includes(q)) return true;
    }
    return false;
  });
}
