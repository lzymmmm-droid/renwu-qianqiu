import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Search,
  MapPin,
  BookOpen,
  Quote,
  Globe,
  Clock,
  Feather,
} from 'lucide-react';
import BlurText from '../components/BlurText';
import CountUp from '../components/CountUp';
import GradientBorder from '../components/GradientBorder';
import ParticleBackground from '../components/ParticleBackground';
import DynamicBackground from '../components/DynamicBackground';
import SearchBar from '../components/SearchBar';
import { figuresData } from '../data/figures';

// ─── Hero Section ───
function HeroSection() {
  const navigate = useNavigate();

  const quickFigures = ['李白', '苏轼', '诸葛亮', '王阳明', '武则天', '杜甫'];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-museum-bg via-museum-bg-secondary to-museum-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-artifact-dh-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-artifact-ru-blue/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-artifact-cinnabar/5 rounded-full blur-3xl animate-pulse animation-delay-300" />
      </div>

      <div className="absolute inset-0 vignette-overlay z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span className="seal-mark text-sm">AI名人生成器</span>
        </motion.div>

        <h1 className="font-heading-zh text-5xl md:text-7xl lg:text-8xl font-bold text-museum-fg mb-6 leading-tight">
          <BlurText
            text="穿越时空"
            as="span"
            delay={0.3}
            staggerDelay={0.1}
            wordDuration={0.35}
            blurAmount={12}
          />
          <br />
          <BlurText
            text="对话先贤"
            as="span"
            delay={0.7}
            staggerDelay={0.1}
            wordDuration={0.35}
            blurAmount={10}
            className="text-3xl md:text-5xl lg:text-6xl font-normal text-museum-fg-muted"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-museum-fg-muted max-w-2xl mx-auto mb-8 font-body-zh"
        >
          Through Ages, Dialogue with Legends
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="max-w-xl mx-auto mb-6"
        >
          <SearchBar
            variant="hero"
            placeholder="输入历史人物名称，一键生成AI档案..."
            autoFocus
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="text-xs text-museum-fg-muted/60 mr-1 self-center">试试：</span>
          {quickFigures.map((name) => {
            const figure = figuresData.find((f) => f.name === name);
            return (
              <button
                key={name}
                onClick={() => {
                  if (figure) navigate(`/figure/${figure.id}`);
                }}
                className="px-4 py-2 text-xs border border-white/[0.1] rounded-full text-museum-fg-muted hover:text-museum-fg hover:border-artifact-ru-blue/40 hover:bg-artifact-ru-blue/10 transition-all duration-300"
              >
                {name}
              </button>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-museum-fg-muted/60">向下探索</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-museum-fg-muted/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Featured Figures Section ───
function FiguresSection() {
  const navigate = useNavigate();
  const showcase = figuresData.slice(0, 4); // 李白, 杜甫, 苏轼, 诸葛亮

  return (
    <section id="figures" className="py-24 md:py-32 relative overflow-hidden">
      {/* 分区辉光：青铜绿 + 天青 */}
      <div className="absolute -top-20 -left-20 w-[40vw] h-[40vw] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,107,77,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="absolute -bottom-20 -right-20 w-[35vw] h-[35vw] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,163,196,0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-artifact-ru-blue tracking-widest uppercase mb-4 block">Featured Figures</span>
          <h2 className="font-heading-zh text-4xl md:text-5xl font-bold text-museum-fg mb-4">人物志</h2>
          <p className="text-museum-fg-muted max-w-2xl mx-auto">
            输入任意历史人物姓名，AI即刻生成专属的人物档案与生平画卷
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcase.map((figure, index) => (
            <motion.div
              key={figure.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group artifact-glass rounded-lg overflow-hidden cursor-pointer"
              onClick={() => navigate(`/figure/${figure.id}`)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={figure.portrait}
                  alt={figure.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-museum-bg/90 via-museum-bg/40 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 text-xs rounded bg-white/10 text-museum-fg border border-white/20">
                    {figure.dynasty}
                  </span>
                  <span
                    className="px-3 py-1 text-xs rounded text-museum-fg border"
                    style={{
                      backgroundColor: `${figure.themeColor}20`,
                      borderColor: `${figure.themeColor}50`,
                      color: figure.themeColorLight,
                    }}
                  >
                    {figure.title}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading-zh text-2xl font-bold text-museum-fg mb-1">{figure.name}</h3>
                <p className="text-sm text-museum-fg-muted/80 mb-3 line-clamp-2">{figure.summary}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {figure.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-museum-fg-muted/60 bg-white/[0.04] px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/figure/${figure.id}`);
                  }}
                  className="text-sm text-artifact-ru-blue flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  查看详情 <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Timeline Section ───
function TimelineSection() {
  const navigate = useNavigate();
  const eras = [
    { name: '先秦', period: '前770-前221', figures: '老子、孔子、屈原', color: '#5B6B4D', ids: [] },
    { name: '秦汉', period: '前221-220', figures: '秦始皇、司马迁、张衡', color: '#A85A4D', ids: [] },
    { name: '魏晋', period: '220-420', figures: '曹操、陶渊明、王羲之', color: '#DCE3D8', ids: [] },
    { name: '隋唐', period: '581-907', figures: '李白、杜甫、武则天', color: '#C9A04E', ids: ['li-bai', 'du-fu', 'wu-zetian'] },
    { name: '宋代', period: '960-1279', figures: '苏轼、李清照、岳飞', color: '#5BA3C4', ids: ['su-shi'] },
    { name: '元代', period: '1271-1368', figures: '关汉卿、赵孟頫', color: '#5B6B4D', ids: [] },
    { name: '明清', period: '1368-1912', figures: '王阳明、郑成功、曹雪芹', color: '#A85A4D', ids: ['wang-yangming'] },
  ];

  const handleFigureClick = (name: string) => {
    const figure = figuresData.find((f) => f.name === name);
    if (figure) navigate(`/figure/${figure.id}`);
  };

  return (
    <section id="timeline" className="py-24 md:py-32 bg-museum-bg-secondary/50 relative overflow-hidden">
      {/* 分区辉光：琥珀金 + 朱砂 */}
      <div className="absolute top-1/3 -left-10 w-[30vw] h-[30vw] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,160,78,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="absolute -bottom-10 right-1/4 w-[25vw] h-[25vw] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,90,77,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-artifact-dh-gold tracking-widest uppercase mb-4 block">Timeline of Greats</span>
          <h2 className="font-heading-zh text-4xl md:text-5xl font-bold text-museum-fg mb-4">时代长廊</h2>
          <p className="text-museum-fg-muted max-w-2xl mx-auto">穿越千年，每个时代都有璀璨的群星闪耀</p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-museum-fg/10 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            {eras.map((era, index) => (
              <motion.div
                key={era.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center group"
              >
                <motion.div
                  className="w-4 h-4 rounded-full mx-auto mb-4 relative z-10"
                  style={{ backgroundColor: era.color }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: era.color }}
                  />
                </motion.div>

                <div className="artifact-glass p-4 rounded-lg hover:bg-white/[0.06] transition-colors">
                  <h3 className="font-heading-zh text-2xl font-bold text-museum-fg mb-1">{era.name}</h3>
                  <p className="text-xs text-museum-fg-muted/60 mb-2">{era.period}</p>
                  <p className="text-sm" style={{ color: era.color }}>
                    {era.figures.split('、').map((name, i) => (
                      <span key={name}>
                        {i > 0 && '、'}
                        <button
                          onClick={() => handleFigureClick(name)}
                          className="hover:underline hover:brightness-150 transition-all"
                        >
                          {name}
                        </button>
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AI Generation Section ───
function AIGenerationSection() {
  const navigate = useNavigate();
  const features = [
    { icon: Feather, title: '生平叙事', desc: 'AI自动梳理人物生平，按时间线呈现重要节点' },
    { icon: Quote, title: '名句摘录', desc: '提取核心著作与经典名句，附背景解读' },
    { icon: Globe, title: '历史评价', desc: '整合后世评价与当代研究，多维度呈现' },
    { icon: Clock, title: '时代关联', desc: '关联同时代人物与事件，构建历史网络' },
  ];

  return (
    <section id="ai-generation" className="py-24 md:py-32 relative overflow-hidden">
      {/* 分区辉光：天青 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(91,163,196,0.25) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-artifact-ru-blue tracking-widest uppercase mb-4 block">AI-Powered Generation</span>
            <h2 className="font-heading-zh text-4xl md:text-5xl font-bold text-museum-fg mb-6">
              AI<span className="text-gradient-ru">生成</span>人物档案
            </h2>
            <p className="text-museum-fg-muted mb-8 leading-relaxed">
              输入任意历史人物的姓名，AI即刻从知识库中调取相关史料，
              生成包含生平传记、代表作品、历史评价、时代背景等完整的人物档案。
              从帝王将相到文人墨客，从科学家到艺术家，跨越五千年的璀璨群星，触手可及。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="artifact-glass p-4 rounded-lg"
                >
                  <feature.icon size={20} className="text-artifact-ru-blue mb-2" />
                  <h4 className="text-museum-fg font-medium text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-museum-fg-muted/70">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="artifact-glass-strong rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded bg-artifact-dh-gold/20 flex items-center justify-center">
                  <Feather size={18} className="text-artifact-dh-gold" />
                </div>
                <div>
                  <p className="text-museum-fg font-medium text-sm">AI 生成示例</p>
                  <p className="text-xs text-museum-fg-muted/60">输入「李白」的完整输出</p>
                </div>
                <button
                  onClick={() => navigate('/figure/li-bai')}
                  className="ml-auto text-xs text-artifact-ru-blue hover:underline"
                >
                  查看完整档案 ←
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-artifact-dh-gold font-heading-zh text-base mb-2">李白（701年—762年）</h4>
                  <p className="text-sm text-museum-fg-muted/80 leading-relaxed">
                    字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后世尊为"诗仙"。
                    其诗飘逸奔放，意境奇妙，存世诗文千余篇，代表作有《望庐山瀑布》《将进酒》《静夜思》等。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="artifact-glass p-3 rounded text-center">
                    <p className="text-artifact-dh-gold font-heading-en text-xl font-bold">1000+</p>
                    <p className="text-xs text-museum-fg-muted/60">传世诗篇</p>
                  </div>
                  <div className="artifact-glass p-3 rounded text-center">
                    <p className="text-artifact-dh-gold font-heading-en text-xl font-bold">61</p>
                    <p className="text-xs text-museum-fg-muted/60">生平岁月</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ───
function StatsSection() {
  const stats = [
    { number: '5000+', label: '位历史人物', desc: '从先秦到近代' },
    { number: '200+', label: '个历史朝代', desc: '跨越五千年文明' },
    { number: '10000+', label: '条经典名句', desc: '含背景解读' },
    { number: '50万+', label: '次AI生成', desc: '累计生成量' },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GradientBorder
                gradient="linear-gradient(135deg, #C9A04E 0%, #5BA3C4 50%, #A85A4D 100%)"
                borderWidth={1}
                className="h-full"
              >
                <div className="artifact-glass-strong p-8 rounded-[calc(0.5rem-1px)] text-center hover:bg-white/[0.08] transition-colors h-full">
                  <CountUp
                    value={stat.number}
                    duration={2}
                    delay={index * 0.2}
                    className="font-heading-en text-4xl md:text-5xl font-bold italic text-gradient-gold block mb-2"
                  />
                  <span className="text-museum-fg font-medium">{stat.label}</span>
                  <p className="text-xs text-museum-fg-muted mt-2">{stat.desc}</p>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quotes Section ───
function QuoteSection() {
  const quotes = [
    { text: '天生我材必有用，千金散尽还复来。', author: '李白', source: '《将进酒》', id: 'li-bai' },
    { text: '人生到处知何似，应似飞鸿踏雪泥。', author: '苏轼', source: '《和子由渑池怀旧》', id: 'su-shi' },
    { text: '知行合一，致良知。心即理也。', author: '王阳明', source: '《传习录》', id: 'wang-yangming' },
  ];
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-museum-bg-secondary/30 relative overflow-hidden">
      {/* 分区辉光：琥珀金 + 朱砂 */}
      <div className="absolute top-1/4 right-0 w-[35vw] h-[35vw] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,160,78,0.2) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div className="absolute -bottom-10 -left-10 w-[30vw] h-[30vw] opacity-8 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,90,77,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-museum-fg-muted/60 tracking-widest uppercase mb-4 block">Echoes Through Time</span>
          <h2 className="font-heading-zh text-4xl md:text-5xl font-bold text-museum-fg">千古绝响</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="artifact-glass p-8 rounded-lg cursor-pointer hover:bg-white/[0.06] transition-colors"
              onClick={() => navigate(`/figure/${item.id}`)}
            >
              <Quote className="text-artifact-ru-blue/50 mb-4" size={32} />
              <p className="text-museum-fg text-lg mb-6 leading-relaxed font-heading-zh">"{item.text}"</p>
              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-museum-fg font-medium">{item.author}</p>
                <p className="text-sm text-museum-fg-muted">{item.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───
function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="footer" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1609767604082-8ff9b4e7aa44?w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-museum-bg via-museum-bg/95 to-museum-bg/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading-zh text-4xl md:text-6xl font-bold text-museum-fg mb-6"
          >
            开启你的<span className="text-gradient-gold">历史</span>之旅
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-museum-fg-muted text-lg mb-8"
          >
            输入一个名字，了解一段历史，开启一场穿越时空的对话
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => {
                const el = document.getElementById('figures');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-artifact-ru-blue text-museum-bg font-medium rounded hover:bg-artifact-ru-blue/90 transition-all"
            >
              浏览全部人物
            </button>
            <button
              onClick={() => {
                const randomFigs = ['li-bai', 'su-shi', 'zhuge-liang', 'wang-yangming', 'wu-zetian', 'du-fu'];
                const picked = randomFigs[Math.floor(Math.random() * randomFigs.length)];
                navigate(`/figure/${picked}`);
              }}
              className="px-8 py-4 border border-museum-fg/30 text-museum-fg rounded hover:bg-museum-fg/5 transition-all"
            >
              随机探索一位
            </button>
          </motion.div>
        </div>

        <div className="border-t border-white/[0.06] pt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-10 h-10 rounded border border-artifact-ru-blue/50 flex items-center justify-center">
                  <span className="text-artifact-ru-blue font-heading-zh text-lg font-bold">千</span>
                </div>
                <div>
                  <h3 className="font-heading-zh text-lg font-bold text-museum-fg">人物千秋</h3>
                  <p className="text-xs text-museum-fg-muted">AI名人生成器</p>
                </div>
              </div>
              <p className="text-sm text-museum-fg-muted">&copy; 2026 人物千秋. 以AI传承文明，让历史触手可及。</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <button onClick={() => navigate('/')} className="text-sm text-museum-fg-muted hover:text-museum-fg transition-colors">关于我们</button>
              <button onClick={() => {
                const el = document.getElementById('figures');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="text-sm text-museum-fg-muted hover:text-museum-fg transition-colors">人物库</button>
              <button onClick={() => navigate('/')} className="text-sm text-museum-fg-muted hover:text-museum-fg transition-colors">隐私政策</button>
              <button onClick={() => navigate('/')} className="text-sm text-museum-fg-muted hover:text-museum-fg transition-colors">使用条款</button>
            </div>

            <div className="flex justify-end gap-4">
              <motion.button
                className="w-10 h-10 rounded-full artifact-glass flex items-center justify-center text-museum-fg-muted hover:text-museum-fg transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={() => window.open('#', '_blank')}
              >
                <BookOpen size={18} />
              </motion.button>
              <motion.button
                className="w-10 h-10 rounded-full artifact-glass flex items-center justify-center text-museum-fg-muted hover:text-museum-fg transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('/')}
              >
                <Search size={18} />
              </motion.button>
              <motion.button
                className="w-10 h-10 rounded-full artifact-glass flex items-center justify-center text-museum-fg-muted hover:text-museum-fg transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={() => navigate('/')}
              >
                <MapPin size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page (Composite) ───
export default function HomePage() {
  return (
    <>
      <DynamicBackground />
      <ParticleBackground type="poet" color="#C9A04E" density={40} speed={0.2} />
      <main className="relative z-10">
        <HeroSection />
        <FiguresSection />
        <TimelineSection />
        <AIGenerationSection />
        <StatsSection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
