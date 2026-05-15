// 单个人物详情 API — GET /api/figures/:id
export async function onRequestGet(context) {
  const { params } = context;
  const id = params.id;

  const figureDetails = {
    'li-bai': {
      id: 'li-bai',
      name: '李白',
      nameEn: 'Li Bai',
      courtesyName: '太白',
      pseudonym: '青莲居士',
      birthYear: 701,
      deathYear: 762,
      era: '盛唐',
      birthplace: '碎叶城（今吉尔吉斯斯坦托克马克）',
      title: '诗仙',
      description: '笔落惊风雨，诗成泣鬼神。一生放浪不羁，留下千首绝唱。',
      biography: '李白，字太白，号青莲居士，唐代伟大的浪漫主义诗人。好剑术，喜任侠，爱山水。天宝初年应召入翰林，因权贵谗言而被赐金放还。安史之乱中入永王李璘幕府，后流放夜郎，途中遇赦。晚年漂泊困苦，卒于当涂。',
      achievements: [
        '存世诗文千余篇，开创唐诗浪漫主义高峰',
        '乐府歌行与绝句成就最高，被誉为"诗仙"',
        '对后世诗歌发展产生深远影响'
      ],
      quotes: [
        { text: '天生我材必有用，千金散尽还复来。', source: '《将进酒》' },
        { text: '长风破浪会有时，直挂云帆济沧海。', source: '《行路难》' },
        { text: '举杯邀明月，对影成三人。', source: '《月下独酌》' },
        { text: '仰天大笑出门去，我辈岂是蓬蒿人。', source: '《南陵别儿童入京》' }
      ],
      tags: ['诗人', '浪漫主义', '盛唐气象'],
      relatedFigures: ['杜甫', '孟浩然', '贺知章']
    },
    'su-shi': {
      id: 'su-shi',
      name: '苏轼',
      nameEn: 'Su Shi',
      courtesyName: '子瞻',
      pseudonym: '东坡居士',
      birthYear: 1037,
      deathYear: 1101,
      era: '北宋',
      birthplace: '眉州眉山（今四川眉山）',
      title: '东坡居士',
      description: '大江东去，浪淘尽千古风流人物。诗词书画，无一不精。',
      biography: '苏轼，字子瞻，号东坡居士，北宋著名文学家、书法家、美食家。嘉祐二年进士及第。因"乌台诗案"被贬黄州，晚年又贬惠州、儋州。虽屡遭贬谪，却始终乐观旷达。诗词书画俱佳，是宋代文学最高成就的代表。',
      achievements: [
        '开创豪放词派，与辛弃疾并称"苏辛"',
        '宋代书法四大家之一',
        '美食家，留下东坡肉等名菜',
        '散文"唐宋八大家"之一'
      ],
      quotes: [
        { text: '大江东去，浪淘尽千古风流人物。', source: '《念奴娇·赤壁怀古》' },
        { text: '人生到处知何似，应似飞鸿踏雪泥。', source: '《和子由渑池怀旧》' },
        { text: '但愿人长久，千里共婵娟。', source: '《水调歌头》' },
        { text: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。', source: '《定风波》' }
      ],
      tags: ['文人', '词人', '美食家', '书画家'],
      relatedFigures: ['苏辙', '黄庭坚', '王安石']
    },
    'zhuge-liang': {
      id: 'zhuge-liang',
      name: '诸葛亮',
      nameEn: 'Zhuge Liang',
      courtesyName: '孔明',
      pseudonym: '卧龙先生',
      birthYear: 181,
      deathYear: 234,
      era: '三国',
      birthplace: '琅琊阳都（今山东临沂）',
      title: '卧龙先生',
      description: '鞠躬尽瘁，死而后已。三分天下的智谋，千古传颂的忠诚。',
      biography: '诸葛亮，字孔明，号卧龙先生，三国时期蜀汉丞相。隐居隆中，刘备三顾茅庐请其出山。辅佐刘备建立蜀汉，提出"隆中对"战略。刘备托孤后，鞠躬尽瘁辅佐刘禅，五伐中原，终因积劳成疾病逝五丈原。',
      achievements: [
        '"隆中对"三分天下战略',
        '平定南中，稳定蜀汉后方',
        '五次北伐，以攻为守',
        '发明木牛流马、孔明灯'
      ],
      quotes: [
        { text: '鞠躬尽瘁，死而后已。', source: '《出师表》' },
        { text: '非淡泊无以明志，非宁静无以致远。', source: '《诫子书》' },
        { text: '恢弘志士之气，不宜妄自菲薄。', source: '《出师表》' },
        { text: '静以修身，俭以养德。', source: '《诫子书》' }
      ],
      tags: ['谋士', '政治家', '军事家'],
      relatedFigures: ['刘备', '关羽', '张飞']
    },
    'wang-yangming': {
      id: 'wang-yangming',
      name: '王阳明',
      nameEn: 'Wang Yangming',
      courtesyName: '伯安',
      pseudonym: '阳明先生',
      birthYear: 1472,
      deathYear: 1529,
      era: '明代',
      birthplace: '浙江余姚',
      title: '阳明先生',
      description: '知行合一，致良知。心学集大成者，立德立功立言三不朽。',
      biography: '王守仁，字伯安，号阳明先生，明代著名哲学家、教育家、军事家。弘治十二年进士。正德年间平定宁王朱宸濠之乱。在龙场贬谪期间悟道，创立"心学"体系。主张"知行合一""致良知"，被后世誉为"立德立功立言三不朽"。',
      achievements: [
        '创立心学体系，影响整个东亚思想史',
        '平定宁王之乱，以文臣立战功',
        '门徒遍天下，形成"姚江学派"',
        '提出"知行合一"思想核心'
      ],
      quotes: [
        { text: '知行合一，致良知。心即理也。', source: '《传习录》' },
        { text: '破山中贼易，破心中贼难。', source: '《与杨仕德薛尚谦书》' },
        { text: '千圣皆过影，良知乃吾师。', source: '《咏良知》' },
        { text: '志不立，天下无可成之事。', source: '《教条示龙场诸生》' }
      ],
      tags: ['哲学家', '教育家', '军事家'],
      relatedFigures: ['朱熹', '陆九渊', '曾国藩']
    }
  };

  if (figureDetails[id]) {
    return new Response(JSON.stringify({ figure: figureDetails[id] }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  }

  return new Response(JSON.stringify({ error: '人物未找到', id }), {
    headers: { 'Content-Type': 'application/json' },
    status: 404
  });
}
