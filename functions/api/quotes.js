// 名句列表 API — GET /api/quotes
export async function onRequestGet() {
  const quotes = [
    { text: '天生我材必有用，千金散尽还复来。', author: '李白', source: '《将进酒》', dynasty: '盛唐' },
    { text: '人生到处知何似，应似飞鸿踏雪泥。', author: '苏轼', source: '《和子由渑池怀旧》', dynasty: '北宋' },
    { text: '知行合一，致良知。心即理也。', author: '王阳明', source: '《传习录》', dynasty: '明代' },
    { text: '鞠躬尽瘁，死而后已。', author: '诸葛亮', source: '《出师表》', dynasty: '三国' },
    { text: '长风破浪会有时，直挂云帆济沧海。', author: '李白', source: '《行路难》', dynasty: '盛唐' },
    { text: '但愿人长久，千里共婵娟。', author: '苏轼', source: '《水调歌头》', dynasty: '北宋' },
    { text: '安得广厦千万间，大庇天下寒士俱欢颜。', author: '杜甫', source: '《茅屋为秋风所破歌》', dynasty: '盛唐' },
    { text: '采菊东篱下，悠然见南山。', author: '陶渊明', source: '《饮酒》', dynasty: '魏晋' },
    { text: '路漫漫其修远兮，吾将上下而求索。', author: '屈原', source: '《离骚》', dynasty: '先秦' },
    { text: '问君能有几多愁？恰似一江春水向东流。', author: '李煜', source: '《虞美人》', dynasty: '宋代' }
  ];

  return new Response(JSON.stringify({ quotes }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
