// 人物数据类型定义 - 基于 SKILL.md 的 Figure 接口

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Quote {
  text: string;
  source: string;
  year?: string;
}

export interface Evaluation {
  text: string;
  author: string;
  source: string;
  era: string;
}

export interface Work {
  title: string;
  year?: string;
  description: string;
  type: 'poem' | 'book' | 'calligraphy' | 'painting' | 'theory' | 'other';
}

export type FigureType = 'poet' | 'strategist' | 'philosopher' | 'emperor' | 'general' | 'scholar';

export interface Figure {
  id: string;
  name: string;
  nameEn: string;
  courtesyName: string;
  pseudonym: string;
  birthYear: number;
  deathYear: number;
  dynasty: string;
  era: string;
  birthplace: string;
  title: string;
  type: FigureType;
  typeLabel: string;
  summary: string;
  biography: string;
  timeline: TimelineEvent[];
  achievements: Achievement[];
  works: Work[];
  quotes: Quote[];
  evaluations: Evaluation[];
  tags: string[];
  relatedFigures: string[];
  funFacts: string[];
  stats: { number: string; label: string; desc?: string }[];
  portrait: string;
  themeColor: string;
  themeColorLight: string;
  themeBgGradient: string;
}

export const figuresData: Figure[] = [
  {
    id: 'li-bai',
    name: '李白',
    nameEn: 'Li Bai',
    courtesyName: '太白',
    pseudonym: '青莲居士',
    birthYear: 701,
    deathYear: 762,
    dynasty: '唐朝',
    era: '盛唐',
    birthplace: '碎叶城（今吉尔吉斯斯坦托克马克）',
    title: '诗仙',
    type: 'poet',
    typeLabel: '诗人',
    summary: '笔落惊风雨，诗成泣鬼神。一生放浪不羁，留下千首绝唱。',
    biography: '李白，字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后世尊为"诗仙"。好剑术，喜任侠，爱山水，一生漫游天下。天宝初年应召入翰林，因权贵谗言而被赐金放还。安史之乱中入永王李璘幕府，后流放夜郎，途中遇赦。晚年漂泊困苦，卒于当涂。存世诗文千余篇，以乐府歌行与绝句成就最高，诗风飘逸奔放，意境奇妙，对后世影响深远。',
    timeline: [
      { year: '701年', title: '出生', description: '出生于碎叶城（今吉尔吉斯斯坦托克马克），五岁随父迁居绵州昌隆（今四川江油）' },
      { year: '718年', title: '少年游历', description: '十八岁起在蜀中游历，读书于大匡山，师从赵蕤学习纵横术' },
      { year: '725年', title: '辞亲远游', description: '二十五岁"仗剑去国，辞亲远游"，沿长江东下，游历洞庭、金陵、扬州等地' },
      { year: '742年', title: '应召入京', description: '受唐玄宗召见，供奉翰林。玄宗"降辇步迎，以七宝床赐食"，一时风光无两' },
      { year: '744年', title: '赐金放还', description: '因权贵谗言被玄宗赐金放还。离开长安，在洛阳与杜甫相遇，结下深厚友谊' },
      { year: '756年', title: '安史之乱', description: '安史之乱爆发，避地庐山。后入永王李璘幕府' },
      { year: '758年', title: '流放夜郎', description: '永王兵败，李白受牵连被流放夜郎（今贵州遵义）' },
      { year: '759年', title: '遇赦东归', description: '行至白帝城时遇大赦，"朝辞白帝彩云间，千里江陵一日还"' },
      { year: '762年', title: '病逝当涂', description: '病逝于当涂（今安徽马鞍山），临终作《临终歌》' },
    ],
    achievements: [
      { title: '诗仙之名', description: '存世诗文千余篇，开创唐诗浪漫主义高峰，被誉为"诗仙"', icon: 'Feather' },
      { title: '乐府革新', description: '继承汉魏乐府传统，开创唐代乐府歌行的新境界', icon: 'Music' },
      { title: '绝句巅峰', description: '七绝与五绝达到唐诗最高水平，后世难以超越', icon: 'Award' },
      { title: '文化符号', description: '成为中国文化最具代表性的人物之一，影响遍及东亚文化圈', icon: 'Globe' },
    ],
    works: [
      { title: '《将进酒》', year: '752年', description: '"君不见黄河之水天上来，奔流到海不复回"——千古豪情之绝唱', type: 'poem' },
      { title: '《静夜思》', year: '726年', description: '"床前明月光，疑是地上霜"——最为中国人熟知的诗篇', type: 'poem' },
      { title: '《蜀道难》', year: '729年', description: '"噫吁嚱，危乎高哉！蜀道之难难于上青天"——想象力之极致', type: 'poem' },
      { title: '《望庐山瀑布》', year: '751年', description: '"飞流直下三千尺，疑是银河落九天"——千古名句', type: 'poem' },
      { title: '《行路难》', year: '744年', description: '"长风破浪会有时，直挂云帆济沧海"——励志名篇', type: 'poem' },
    ],
    quotes: [
      { text: '天生我材必有用，千金散尽还复来。', source: '《将进酒》' },
      { text: '长风破浪会有时，直挂云帆济沧海。', source: '《行路难》' },
      { text: '举杯邀明月，对影成三人。', source: '《月下独酌》' },
      { text: '仰天大笑出门去，我辈岂是蓬蒿人。', source: '《南陵别儿童入京》' },
      { text: '安能摧眉折腰事权贵，使我不得开心颜！', source: '《梦游天姥吟留别》' },
    ],
    evaluations: [
      { text: '李杜文章在，光焰万丈长。', author: '韩愈', source: '《调张籍》', era: '唐代' },
      { text: '笔落惊风雨，诗成泣鬼神。', author: '杜甫', source: '《寄李十二白二十韵》', era: '唐代' },
      { text: '酒入豪肠，七分酿成了月光，剩下的三分啸成剑气，绣口一吐就半个盛唐。', author: '余光中', source: '《寻李白》', era: '当代' },
      { text: '白也诗无敌，飘然思不群。', author: '杜甫', source: '《春日忆李白》', era: '唐代' },
    ],
    tags: ['诗人', '浪漫主义', '盛唐气象', '酒仙'],
    relatedFigures: ['杜甫', '孟浩然', '贺知章', '王维'],
    funFacts: [
      '李白不仅是大诗人，还是位剑客——他"十五好剑术"，剑术在唐代文人中堪称一流',
      '李白一生游历了中国18个省份，足迹遍及200多个州县，是古代行走距离最远的文人之一',
    ],
    stats: [
      { number: '1000+', label: '传世诗篇', desc: '存世诗文千余篇' },
      { number: '61', label: '生平岁月', desc: '701年—762年' },
      { number: '18', label: '游历省份', desc: '足迹遍天下' },
      { number: '5', label: '千古名篇', desc: '入选中小学课本' },
    ],
    portrait: '/portraits/li-bai-portrait.png',
    themeColor: '#C9A04E',
    themeColorLight: '#E5C878',
    themeBgGradient: 'from-amber-950/40 via-museum-bg to-museum-bg',
  },
  {
    id: 'du-fu',
    name: '杜甫',
    nameEn: 'Du Fu',
    courtesyName: '子美',
    pseudonym: '少陵野老',
    birthYear: 712,
    deathYear: 770,
    dynasty: '唐朝',
    era: '盛唐转中唐',
    birthplace: '河南巩县（今河南巩义）',
    title: '诗圣',
    type: 'poet',
    typeLabel: '诗人',
    summary: '安得广厦千万间，大庇天下寒士俱欢颜。沉郁顿挫，诗史千秋。',
    biography: '杜甫，字子美，号少陵野老，唐代伟大的现实主义诗人，被尊为"诗圣"。出身官宦世家，早年漫游吴越齐赵。安史之乱中颠沛流离，曾任左拾遗。晚年流落四川成都，筑草堂于浣花溪。其诗深刻反映了唐代由盛转衰的社会现实，被称为"诗史"。在诗歌艺术上集大成，对后世影响极为深远。',
    timeline: [
      { year: '712年', title: '出生', description: '出生于河南巩县，出身官宦世家，祖父杜审言为初唐著名诗人' },
      { year: '731年', title: '漫游吴越', description: '二十岁起漫游吴越（今江浙一带），历时数年' },
      { year: '744年', title: '遇李白', description: '在洛阳与李白相遇，同游梁宋，结下终生友谊' },
      { year: '755年', title: '安史之乱', description: '安史之乱爆发，被俘后逃出长安，投奔肃宗' },
      { year: '759年', title: '入蜀', description: '弃官西行入蜀，在成都西郊浣花溪筑草堂定居' },
      { year: '765年', title: '出蜀漂泊', description: '离开成都，沿长江东下，在夔州（今重庆奉节）居留两年' },
      { year: '770年', title: '病逝', description: '漂泊于湘江之上，病逝于由潭州往岳阳的途中' },
    ],
    achievements: [
      { title: '诗圣之誉', description: '其诗集古今诗歌之大成，被尊为"诗圣"', icon: 'Award' },
      { title: '诗史之实', description: '以诗记录历史，深刻反映安史之乱前后的社会现实', icon: 'BookOpen' },
      { title: '律诗典范', description: '将律诗艺术推向极致，七律成就尤高', icon: 'Pen' },
      { title: '忧国情怀', description: '"安得广厦千万间"的忧国忧民情怀影响千年', icon: 'Heart' },
    ],
    works: [
      { title: '《春望》', year: '757年', description: '"国破山河在，城春草木深"——忧国忧民的巅峰之作', type: 'poem' },
      { title: '《茅屋为秋风所破歌》', year: '761年', description: '"安得广厦千万间，大庇天下寒士俱欢颜"——千古仁心', type: 'poem' },
      { title: '《登高》', year: '767年', description: '"无边落木萧萧下，不尽长江滚滚来"——七律之冠', type: 'poem' },
      { title: '《三吏》《三别》', year: '759年', description: '《石壕吏》《新安吏》《潼关吏》《新婚别》《垂老别》《无家别》——诗史代表作', type: 'poem' },
    ],
    quotes: [
      { text: '安得广厦千万间，大庇天下寒士俱欢颜。', source: '《茅屋为秋风所破歌》' },
      { text: '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。', source: '《春望》' },
      { text: '无边落木萧萧下，不尽长江滚滚来。', source: '《登高》' },
      { text: '会当凌绝顶，一览众山小。', source: '《望岳》' },
      { text: '出师未捷身先死，长使英雄泪满襟。', source: '《蜀相》' },
    ],
    evaluations: [
      { text: '李杜文章在，光焰万丈长。', author: '韩愈', source: '《调张籍》', era: '唐代' },
      { text: '诗人以来，未有如子美者。', author: '元稹', source: '《唐故工部员外郎杜君墓系铭》', era: '唐代' },
      { text: '古今诗人众矣，而杜子美为首。', author: '苏轼', source: '', era: '北宋' },
    ],
    tags: ['诗人', '现实主义', '诗史', '忧国忧民'],
    relatedFigures: ['李白', '白居易', '苏轼'],
    funFacts: [
      '杜甫的一生几乎与唐代由盛转衰的整个过程重合，他的诗因此具有极高的史料价值',
      '成都杜甫草堂现为全国重点文物保护单位，是杜甫流寓成都时的故居',
    ],
    stats: [
      { number: '1500+', label: '传世诗篇', desc: '存世诗作数量' },
      { number: '58', label: '生平岁月', desc: '712年—770年' },
      { number: '11年', label: '漂泊生涯', desc: '759年—770年流寓各地' },
      { number: '6篇', label: '入选中小学课本', desc: '最具教育意义的诗人' },
    ],
    portrait: '/portraits/du-fu-portrait.png',
    themeColor: '#8B6F47',
    themeColorLight: '#B8956A',
    themeBgGradient: 'from-stone-900/40 via-museum-bg to-museum-bg',
  },
  {
    id: 'su-shi',
    name: '苏轼',
    nameEn: 'Su Shi',
    courtesyName: '子瞻',
    pseudonym: '东坡居士',
    birthYear: 1037,
    deathYear: 1101,
    dynasty: '北宋',
    era: '北宋中期',
    birthplace: '眉州眉山（今四川眉山）',
    title: '东坡居士',
    type: 'scholar',
    typeLabel: '文人',
    summary: '大江东去，浪淘尽千古风流人物。诗词书画，无一不精。',
    biography: '苏轼，字子瞻，号东坡居士，北宋著名文学家、书法家、美食家。嘉祐二年进士及第。因"乌台诗案"被贬黄州，晚年又贬惠州、儋州。虽屡遭贬谪，却始终乐观旷达。诗词书画俱佳，是宋代文学最高成就的代表。散文为"唐宋八大家"之一，词开豪放一派，书法为"宋四家"之首。',
    timeline: [
      { year: '1037年', title: '出生', description: '出生于眉州眉山（今四川眉山），父亲苏洵为著名散文家' },
      { year: '1057年', title: '进士及第', description: '与弟弟苏辙同科进士及第，得到主考官欧阳修赏识' },
      { year: '1079年', title: '乌台诗案', description: '因政敌指控其诗讽刺朝政，被逮捕入御史台狱，史称"乌台诗案"' },
      { year: '1080年', title: '贬谪黄州', description: '被贬为黄州团练副使，在城东坡地开荒耕种，自号"东坡居士"' },
      { year: '1082年', title: '赤壁绝唱', description: '游赤壁，作《念奴娇·赤壁怀古》《前赤壁赋》《后赤壁赋》，文学巅峰' },
      { year: '1094年', title: '贬谪岭南', description: '新党执政，被贬惠州（今广东惠州），"日啖荔枝三百颗"' },
      { year: '1097年', title: '贬谪儋州', description: '再贬儋州（今海南），"九死南荒吾不恨，兹游奇绝冠平生"' },
      { year: '1101年', title: '北归病逝', description: '遇赦北归，病逝于常州' },
    ],
    achievements: [
      { title: '豪放词宗', description: '开创豪放词派，与辛弃疾并称"苏辛"', icon: 'Music' },
      { title: '书法大家', description: '宋代书法四大家之首，《黄州寒食帖》被誉为"天下第三行书"', icon: 'Pen' },
      { title: '散文宗师', description: '"唐宋八大家"之一，散文自然流畅，意境深远', icon: 'BookOpen' },
      { title: '生活美学家', description: '美食家，东坡肉、东坡鱼传世；酿酒、煮茶、养生无不精通', icon: 'Utensils' },
    ],
    works: [
      { title: '《念奴娇·赤壁怀古》', year: '1082年', description: '"大江东去，浪淘尽千古风流人物"——豪放词巅峰之作', type: 'poem' },
      { title: '《水调歌头》', year: '1076年', description: '"但愿人长久，千里共婵娟"——中秋词之绝唱', type: 'poem' },
      { title: '《前赤壁赋》', year: '1082年', description: '以赋体写哲学感悟，"逝者如斯，而未尝往也"', type: 'poem' },
      { title: '《黄州寒食帖》', year: '1082年', description: '行书代表作，被誉为"天下第三行书"', type: 'calligraphy' },
      { title: '《定风波》', year: '1082年', description: '"一蓑烟雨任平生"——豁达人生的写照', type: 'poem' },
    ],
    quotes: [
      { text: '大江东去，浪淘尽千古风流人物。', source: '《念奴娇·赤壁怀古》' },
      { text: '但愿人长久，千里共婵娟。', source: '《水调歌头》' },
      { text: '人生到处知何似，应似飞鸿踏雪泥。', source: '《和子由渑池怀旧》' },
      { text: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。', source: '《定风波》' },
      { text: '人间有味是清欢。', source: '《浣溪沙》' },
    ],
    evaluations: [
      { text: '苏轼之文，如行云流水，初无定质，但常行于所当行，止于不可不止。', author: '苏轼自评', source: '', era: '北宋' },
      { text: '苏子瞻文章，横放杰出，自是一家。', author: '黄庭坚', source: '', era: '北宋' },
      { text: '东坡先生，千古一人而已。', author: '林语堂', source: '《苏东坡传》', era: '当代' },
    ],
    tags: ['文人', '词人', '美食家', '书画家', '豪放派'],
    relatedFigures: ['苏辙', '黄庭坚', '王安石', '欧阳修'],
    funFacts: [
      '苏轼发明的"东坡肉"至今仍是杭州名菜，他曾写《猪肉颂》详细记录烹饪方法',
      '苏轼是中国历史上被贬最远的文人之一，最远到了海南岛，当时被视为天涯海角',
    ],
    stats: [
      { number: '2700+', label: '传世诗词', desc: '存世诗词作品数量' },
      { number: '64', label: '生平岁月', desc: '1037年—1101年' },
      { number: '4次', label: '重大贬谪', desc: '黄州→惠州→儋州→北归' },
      { number: '3绝', label: '诗书画三绝', desc: '全能型文化巨匠' },
    ],
    portrait: '/portraits/su-shi-portrait.png',
    themeColor: '#5BA3C4',
    themeColorLight: '#7BB8D4',
    themeBgGradient: 'from-sky-950/40 via-museum-bg to-museum-bg',
  },
  {
    id: 'zhuge-liang',
    name: '诸葛亮',
    nameEn: 'Zhuge Liang',
    courtesyName: '孔明',
    pseudonym: '卧龙先生',
    birthYear: 181,
    deathYear: 234,
    dynasty: '三国',
    era: '三国时期',
    birthplace: '琅琊阳都（今山东临沂）',
    title: '卧龙先生',
    type: 'strategist',
    typeLabel: '谋士',
    summary: '鞠躬尽瘁，死而后已。三分天下的智谋，千古传颂的忠诚。',
    biography: '诸葛亮，字孔明，号卧龙先生，三国时期蜀汉丞相，杰出的政治家、军事家、发明家。早年隐居隆中，刘备三顾茅庐请其出山。辅佐刘备建立蜀汉，提出"隆中对"三分天下战略。刘备托孤后，鞠躬尽瘁辅佐刘禅，七擒孟获平定南中，五伐中原以攻为守。发明木牛流马、孔明灯、诸葛连弩。终因积劳成疾病逝五丈原，享年五十四岁。',
    timeline: [
      { year: '181年', title: '出生', description: '出生于琅琊阳都（今山东临沂），幼年父母双亡' },
      { year: '197年', title: '隐居隆中', description: '随叔父到荆州，隐居隆中（今湖北襄阳），耕作读书，自比管仲乐毅' },
      { year: '207年', title: '三顾茅庐', description: '刘备三顾茅庐，诸葛亮提出"隆中对"战略，出山辅佐刘备' },
      { year: '208年', title: '赤壁之战', description: '出使东吴，促成孙刘联盟，在赤壁大败曹操' },
      { year: '221年', title: '建立蜀汉', description: '助刘备建立蜀汉政权，任丞相，总揽朝政' },
      { year: '223年', title: '受托孤', description: '刘备白帝城托孤，"若嗣子可辅则辅之，不才君可自取"' },
      { year: '225年', title: '平定南中', description: '七擒孟获，平定南中叛乱，稳定蜀汉后方' },
      { year: '227-234年', title: '北伐中原', description: '五次北伐，以攻为守。234年病逝五丈原，"出师未捷身先死"' },
    ],
    achievements: [
      { title: '隆中对战略', description: '未出茅庐已知三分天下，制定"联吴抗曹"根本战略', icon: 'Globe' },
      { title: '治理蜀汉', description: '治蜀有方，开府治事，发展农业，整饬吏治', icon: 'Building' },
      { title: '军事天才', description: '七擒孟获、五伐中原，以弱蜀之兵力抗强魏', icon: 'Sword' },
      { title: '发明创造', description: '发明木牛流马、孔明灯、诸葛连弩，八阵图', icon: 'Lightbulb' },
    ],
    works: [
      { title: '《出师表》', year: '227年', description: '"鞠躬尽瘁，死而后已"——千古忠臣第一文', type: 'book' },
      { title: '《诫子书》', year: '234年', description: '"非淡泊无以明志，非宁静无以致远"——传世家训', type: 'book' },
      { title: '《八阵图》', year: '不详', description: '古代军事阵法经典，相传以石堆演阵', type: 'book' },
    ],
    quotes: [
      { text: '鞠躬尽瘁，死而后已。', source: '《出师表》' },
      { text: '非淡泊无以明志，非宁静无以致远。', source: '《诫子书》' },
      { text: '恢弘志士之气，不宜妄自菲薄。', source: '《出师表》' },
      { text: '静以修身，俭以养德。', source: '《诫子书》' },
      { text: '志当存高远。', source: '《诫外生书》' },
    ],
    evaluations: [
      { text: '出师未捷身先死，长使英雄泪满襟。', author: '杜甫', source: '《蜀相》', era: '唐代' },
      { text: '三顾频烦天下计，两朝开济老臣心。', author: '杜甫', source: '《蜀相》', era: '唐代' },
      { text: '诸葛孔明，三代遗才，伊尹、周公之流也。', author: '苏轼', source: '', era: '北宋' },
      { text: '鞠躬尽瘁，死而后已，忠臣之极则也。', author: '康熙帝', source: '', era: '清代' },
    ],
    tags: ['谋士', '政治家', '军事家', '发明家'],
    relatedFigures: ['刘备', '关羽', '张飞', '司马懿'],
    funFacts: [
      '诸葛亮发明的"木牛流马"至今仍有争议，有人认为是古代版的独轮车，也有人认为是更复杂的机械装置',
      '"空城计"的故事在正史中并无记载，是《三国演义》的艺术创作，历史上真正用空城计的是赵云',
    ],
    stats: [
      { number: '54', label: '生平岁月', desc: '181年—234年' },
      { number: '27年', label: '辅佐蜀汉', desc: '207年出山至234年去世' },
      { number: '5次', label: '北伐中原', desc: '227年—234年' },
      { number: '7擒', label: '七擒孟获', desc: '平定南中叛乱' },
    ],
    portrait: '/portraits/zhuge-liang-portrait.png',
    themeColor: '#5B6B4D',
    themeColorLight: '#7B9B6D',
    themeBgGradient: 'from-emerald-950/40 via-museum-bg to-museum-bg',
  },
  {
    id: 'wang-yangming',
    name: '王阳明',
    nameEn: 'Wang Yangming',
    courtesyName: '伯安',
    pseudonym: '阳明先生',
    birthYear: 1472,
    deathYear: 1529,
    dynasty: '明朝',
    era: '明代中期',
    birthplace: '浙江余姚',
    title: '阳明先生',
    type: 'philosopher',
    typeLabel: '哲学家',
    summary: '知行合一，致良知。心学集大成者，立德立功立言三不朽。',
    biography: '王守仁，字伯安，号阳明先生，明代著名哲学家、教育家、军事家。弘治十二年进士。正德年间平定宁王朱宸濠之乱。在龙场贬谪期间悟道，创立"心学"体系。主张"心即理""知行合一""致良知"，被后世誉为"立德立功立言三不朽"。其学说影响整个东亚思想史，远及日本明治维新。',
    timeline: [
      { year: '1472年', title: '出生', description: '出生于浙江余姚，出身官宦世家，幼年即胸怀大志' },
      { year: '1499年', title: '进士及第', description: '中进士，入仕途，先后任刑部主事、兵部主事' },
      { year: '1506年', title: '抗疏被贬', description: '因上疏弹劾宦官刘瑾，被廷杖四十，贬为贵州龙场驿丞' },
      { year: '1508年', title: '龙场悟道', description: '在困顿中顿悟"心即理"，创立心学体系，史称"龙场悟道"' },
      { year: '1519年', title: '平定宁王', description: '仅用35天平定宁王朱宸濠十万大军的叛乱，以文臣立武功' },
      { year: '1521年', title: '提出致良知', description: '正式提出"致良知"学说，心学体系臻于完善' },
      { year: '1527年', title: '天泉证道', description: '在天泉桥阐述"四句教"，"无善无恶心之体，有善有恶意之动，知善知恶是良知，为善去恶是格物"' },
      { year: '1529年', title: '病逝', description: '病逝于江西南安，临终遗言"此心光明，亦复何言"' },
    ],
    achievements: [
      { title: '创立心学', description: '集陆九渊心学之大成，建立完整的心学体系，影响东亚数百年', icon: 'Lightbulb' },
      { title: '知行合一', description: '提出"知行合一"思想，强调认识与实践的统一', icon: 'GitMerge' },
      { title: '致良知教', description: '"致良知"成为心学核心教法，简易直截，人人可学', icon: 'Heart' },
      { title: '三不朽', description: '立德（创心学）、立功（平宁王）、立言（著传习录），中国历史上极少数"三不朽"人物', icon: 'Award' },
    ],
    works: [
      { title: '《传习录》', year: '1512年起', description: '心学经典著作，收录王阳明与弟子的问答语录', type: 'book' },
      { title: '《大学问》', year: '1527年', description: '晚年对《大学》的阐释，心学的理论基石', type: 'book' },
      { title: '《教条示龙场诸生》', year: '1508年', description: '"立志、勤学、改过、责善"——龙场讲学纲领', type: 'book' },
    ],
    quotes: [
      { text: '知行合一，致良知。心即理也。', source: '《传习录》' },
      { text: '破山中贼易，破心中贼难。', source: '《与杨仕德薛尚谦书》' },
      { text: '千圣皆过影，良知乃吾师。', source: '《咏良知》' },
      { text: '志不立，天下无可成之事。', source: '《教条示龙场诸生》' },
      { text: '此心光明，亦复何言。', source: '临终遗言' },
    ],
    evaluations: [
      { text: '王阳明矫正旧风气，开出新风气，功不在禹下。', author: '曾国藩', source: '', era: '清代' },
      { text: '日本维新，亦由王学为其先导。', author: '章太炎', source: '', era: '近代' },
      { text: '五百年来，能把学问在事业上表现出来者，唯王阳明一人。', author: '梁启超', source: '', era: '近代' },
      { text: '王阳明的思想，今天依然具有强大的现实意义。', author: '习近平总书记在讲话中引用阳明心学', source: '', era: '当代' },
    ],
    tags: ['哲学家', '教育家', '军事家', '心学'],
    relatedFigures: ['朱熹', '陆九渊', '曾国藩', '徐爱'],
    funFacts: [
      '王阳明新婚之夜竟与一位道士彻夜长谈"养生之道"，忘了回府成亲',
      '平定宁王之乱后，宦官们为了抢功，竟让正德皇帝把宁王放了再亲自抓一次，王阳明坚决反对才作罢',
    ],
    stats: [
      { number: '57', label: '生平岁月', desc: '1472年—1529年' },
      { number: '35天', label: '平定宁王之乱', desc: '以文臣统兵平十万叛军' },
      { number: '500年', label: '思想影响', desc: '心学影响东亚五百余年' },
      { number: '3不朽', label: '立德立功立言', desc: '中国历史罕见的完人' },
    ],
    portrait: '/portraits/wang-yangming-portrait.png',
    themeColor: '#A85A4D',
    themeColorLight: '#C87A6D',
    themeBgGradient: 'from-rose-950/40 via-museum-bg to-museum-bg',
  },
  {
    id: 'wu-zetian',
    name: '武则天',
    nameEn: 'Wu Zetian',
    courtesyName: '',
    pseudonym: '',
    birthYear: 624,
    deathYear: 705,
    dynasty: '唐朝',
    era: '盛唐',
    birthplace: '并州文水（今山西文水）',
    title: '一代女皇',
    type: 'emperor',
    typeLabel: '帝王',
    summary: '中国历史上唯一正统女皇帝。政启开元，治宏贞观。',
    biography: '武则天，中国历史上唯一正统女皇帝。十四岁入宫为唐太宗才人，后为唐高宗昭仪、皇后。高宗去世后，废中宗、睿宗，于公元690年自立为帝，改国号为"周"。在位期间推行科举，发展经济，加强中央集权。晚年被迫退位，同年去世。其统治承上启下，为"开元盛世"奠定了基础。',
    timeline: [
      { year: '624年', title: '出生', description: '出生于并州文水（今山西文水），父亲武士彟为唐朝开国功臣' },
      { year: '638年', title: '入宫', description: '十四岁入宫，被唐太宗封为才人，赐号"武媚"' },
      { year: '649年', title: '太宗去世', description: '太宗驾崩，武则天依例入感业寺为尼' },
      { year: '652年', title: '再入宫', description: '被唐高宗从感业寺召回宫中，封为昭仪' },
      { year: '655年', title: '立为皇后', description: '高宗力排众议，立武则天为皇后"二圣临朝"' },
      { year: '683年', title: '高宗去世', description: '高宗驾崩，太子李显即位为中宗，武则天临朝称制' },
      { year: '690年', title: '登基称帝', description: '废唐睿宗，正式登基称帝，改国号为"周"，定都洛阳' },
      { year: '705年', title: '神龙政变', description: '病重期间，宰相张柬之等发动"神龙政变"，武则天退位，同年去世' },
    ],
    achievements: [
      { title: '女皇第一人', description: '中国历史上唯一正统女皇帝，打破男尊女卑的政治传统', icon: 'Crown' },
      { title: '科举改革', description: '开创殿试制度，创立武举，扩大科举取士范围', icon: 'GraduationCap' },
      { title: '经济繁荣', description: '重视农业生产，减轻赋税，促进社会经济持续发展', icon: 'TrendingUp' },
      { title: '承上启下', description: '上承"贞观之治"，下启"开元盛世"，为盛唐奠定基础', icon: 'History' },
    ],
    works: [
      { title: '《臣轨》', year: '675年', description: '武则天命人编写的官箴书，规范臣子行为准则', type: 'book' },
      { title: '《如意娘》', year: '652年', description: '"看朱成碧思纷纷，憔悴支离为忆君"——武则天存世诗作', type: 'poem' },
    ],
    quotes: [
      { text: '政启开元，治宏贞观。', source: '郭沫若评武则天' },
      { text: '巾帼英才扭乾坤，一代女皇绝古今。', source: '现代评价' },
      { text: '欲安其家，先安其国。', source: '《臣轨》' },
    ],
    evaluations: [
      { text: '政启开元，治宏贞观。', author: '郭沫若', source: '为武则天撰写碑文', era: '当代' },
      { text: '武则天是杰出的女政治家，她打击门阀贵族，提拔庶族人才。', author: '毛泽东', source: '', era: '当代' },
      { text: '她是一个有非凡才能和野心的人，在中国历史上无与伦比。', author: '《剑桥中国隋唐史》', source: '', era: '当代' },
    ],
    tags: ['皇帝', '政治家', '女皇', '改革家'],
    relatedFigures: ['唐高宗', '狄仁杰', '上官婉儿', '唐太宗'],
    funFacts: [
      '武则天创造了不少汉字，包括"曌"（zhào），意为"日月当空"，作为自己的名字',
      '武则天墓前的"无字碑"是中国历史上最著名的石碑之一，为何无字至今是谜',
    ],
    stats: [
      { number: '81', label: '生平岁月', desc: '624年—705年' },
      { number: '15年', label: '女皇在位', desc: '690年—705年' },
      { number: '48年', label: '政治生涯', desc: '655年立后至705年退位' },
      { number: '唯一', label: '正统女皇帝', desc: '中国历史五千年' },
    ],
    portrait: '/portraits/wu-zetian-portrait.png',
    themeColor: '#D4A030',
    themeColorLight: '#E8C060',
    themeBgGradient: 'from-yellow-950/40 via-museum-bg to-museum-bg',
  },
];

// 按名称查找人物
export function getFigureByName(name: string): Figure | undefined {
  return figuresData.find(f => f.name === name);
}

// 按slug查找
export function getFigureById(id: string): Figure | undefined {
  return figuresData.find(f => f.id === id);
}

// 人物类型配置
export const figureTypeConfig: Record<FigureType, { bgClass: string; particleColor: string }> = {
  poet: {
    bgClass: 'from-amber-950/30 via-museum-bg to-museum-bg',
    particleColor: '#C9A04E',
  },
  strategist: {
    bgClass: 'from-emerald-950/30 via-museum-bg to-museum-bg',
    particleColor: '#5B6B4D',
  },
  philosopher: {
    bgClass: 'from-rose-950/30 via-museum-bg to-museum-bg',
    particleColor: '#A85A4D',
  },
  emperor: {
    bgClass: 'from-yellow-950/30 via-museum-bg to-museum-bg',
    particleColor: '#D4A030',
  },
  scholar: {
    bgClass: 'from-sky-950/30 via-museum-bg to-museum-bg',
    particleColor: '#5BA3C4',
  },
  general: {
    bgClass: 'from-red-950/30 via-museum-bg to-museum-bg',
    particleColor: '#B84A4A',
  },
};
