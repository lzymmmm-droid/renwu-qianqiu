import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Quote,
  Lightbulb,
  Sparkles,
  Clock,
  Star,
  Feather,
  Music,
  Globe,
  Crown,
  Sword,
  Building,
  GraduationCap,
  TrendingUp,
  History,
  GitMerge,
  Pen,
  Utensils,
  Award,
  BookOpen,
  Heart,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import BlurText from '../components/BlurText';
import ParticleBackground from '../components/ParticleBackground';
import DynamicBackground from '../components/DynamicBackground';
import { figuresData, getFigureById, type Figure } from '../data/figures';

// ─── Icon resolver helper ───
const iconMap: Record<string, React.ComponentType<any>> = {
  Feather, Music, Award, Globe, BookOpen, Pen, Heart, Lightbulb,
  GitMerge, Crown, GraduationCap, TrendingUp, History, Sword,
  Building, Utensils, Star,
};

function resolveIcon(name: string): React.ComponentType<any> {
  return iconMap[name] || Sparkles;
}

// ─── Stagger animation variants ───
const containerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemSlide = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// ─── Section Header ───
function SectionHeader({ title, subtitle, color }: { title: string; subtitle?: string; color: string }) {
  return (
    <FadeIn direction="up" distance={24} duration={0.5} className="text-center mb-12">
      {subtitle && (
        <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: `${color}cc` }}>
          {subtitle}
        </span>
      )}
      <h2 className="font-heading-zh text-3xl md:text-4xl font-bold text-museum-fg">{title}</h2>
      <div className="w-16 h-px mx-auto mt-4" style={{ backgroundColor: color }} />
    </FadeIn>
  );
}

// ─── Hero / Profile Header ───
function ProfileHeader({ figure }: { figure: Figure }) {
  const navigate = useNavigate();
  const birthBC = figure.birthYear < 0;
  const deathBC = figure.deathYear < 0;
  const birthDisplay = birthBC ? `${Math.abs(figure.birthYear)} BC` : `${figure.birthYear}`;
  const deathDisplay = deathBC ? `${Math.abs(figure.deathYear)} BC` : `${figure.deathYear}`;

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <DynamicBackground />
      <ParticleBackground type={figure.type} color={figure.themeColor} density={40} speed={0.15} />

      <div className="absolute inset-0 z-10" style={{
        background: `linear-gradient(to bottom, transparent 0%, transparent 50%, #0F1419 100%)`,
      }} />

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => navigate('/')}
        className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-museum-fg-muted hover:text-museum-fg transition-colors group"
      >
        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        <span className="text-sm">返回首页</span>
      </motion.button>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shrink-0 artifact-glass-strong p-2"
            style={{ borderColor: `${figure.themeColor}40` }}
          >
            <img
              src={figure.portrait}
              alt={figure.name}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
              <span
                className="px-3 py-1 text-xs rounded"
                style={{
                  backgroundColor: `${figure.themeColor}20`,
                  borderColor: `${figure.themeColor}50`,
                  color: figure.themeColorLight,
                  borderWidth: 1,
                }}
              >
                {figure.dynasty}
              </span>
              <span
                className="px-3 py-1 text-xs rounded bg-white/10 text-museum-fg border border-white/20"
              >
                {figure.typeLabel}
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-museum-fg-muted border border-white/10">
                {figure.title}
              </span>
            </div>

            <BlurText
              text={figure.name}
              as="h1"
              className="font-heading-zh text-5xl md:text-7xl font-bold text-museum-fg mb-2"
              delay={0.2}
              staggerDelay={0.08}
              wordDuration={0.4}
            />

            <p className="text-lg text-museum-fg-muted font-body-zh mb-1">
              {figure.courtesyName && `${figure.courtesyName} · `}{figure.pseudonym}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-museum-fg-muted/70 mt-4">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {figure.birthplace}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {birthDisplay} — {deathDisplay}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe size={14} />
                {figure.era}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5">
              {figure.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${figure.themeColor}15`,
                    color: figure.themeColorLight,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───
function StatsBar({ figure }: { figure: Figure }) {
  return (
    <section className="relative z-20 -mt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 md:px-12"
      >
        <div
          className="artifact-glass-strong rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ borderColor: `${figure.themeColor}30` }}
        >
          {figure.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="font-heading-en text-3xl md:text-4xl font-bold italic"
                style={{ color: figure.themeColor }}
              >
                {stat.number}
              </p>
              <p className="text-sm text-museum-fg font-medium mt-1">{stat.label}</p>
              {stat.desc && (
                <p className="text-xs text-museum-fg-muted/60 mt-0.5">{stat.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Summary / Biography ───
function BiographySection({ figure }: { figure: Figure }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="生平传记" subtitle="Biography" color={figure.themeColor} />

          <motion.div variants={itemSlide} className="artifact-glass rounded-lg p-6 md:p-8">
            <p className="text-museum-fg text-base md:text-lg leading-relaxed font-body-zh">
              {figure.biography}
            </p>
          </motion.div>

          {/* Fun Facts inline */}
          {figure.funFacts.length > 0 && (
            <motion.div variants={itemSlide} className="mt-8">
              <div
                className="artifact-glass rounded-lg p-6 border-l-4"
                style={{ borderLeftColor: figure.themeColor }}
              >
                <h3 className="flex items-center gap-2 text-museum-fg font-heading-zh text-lg font-bold mb-4">
                  <Lightbulb size={18} style={{ color: figure.themeColor }} />
                  趣闻轶事
                </h3>
                <ul className="space-y-3">
                  {figure.funFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 text-museum-fg-muted">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: figure.themeColor }}
                      />
                      <span className="text-sm md:text-base leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Timeline ───
function TimelineSection({ figure }: { figure: Figure }) {
  return (
    <section className="py-16 md:py-24 bg-museum-bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="生平大事记" subtitle="Timeline" color={figure.themeColor} />

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
              style={{ backgroundColor: `${figure.themeColor}30` }}
            />

            <div className="space-y-0">
              {figure.timeline.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemSlide}
                  className="relative pl-12 md:pl-16 pb-8 last:pb-0"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, type: 'spring', stiffness: 200 }}
                    className="absolute left-2.5 md:left-4 top-1 w-3 h-3 rounded-full border-2 z-10"
                    style={{
                      backgroundColor: '#0F1419',
                      borderColor: figure.themeColor,
                    }}
                  />

                  <div className="artifact-glass rounded-lg p-4 md:p-5 hover:bg-white/[0.06] transition-colors">
                    <span
                      className="text-xs font-medium font-heading-en"
                      style={{ color: figure.themeColor }}
                    >
                      {event.year}
                    </span>
                    <h3 className="text-museum-fg font-bold text-base md:text-lg mt-1 font-heading-zh">
                      {event.title}
                    </h3>
                    <p className="text-sm text-museum-fg-muted/80 mt-1 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Achievements ───
function AchievementsSection({ figure }: { figure: Figure }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="主要成就" subtitle="Achievements" color={figure.themeColor} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {figure.achievements.map((ach) => {
              const Icon = resolveIcon(ach.icon);
              return (
                <motion.div
                  key={ach.title}
                  variants={itemSlide}
                  className="artifact-glass rounded-lg p-5 md:p-6 hover:bg-white/[0.06] transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors"
                    style={{
                      backgroundColor: `${figure.themeColor}15`,
                      color: figure.themeColor,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-museum-fg font-bold text-base md:text-lg mb-2 font-heading-zh">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-museum-fg-muted/80 leading-relaxed">
                    {ach.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Works ───
function WorksSection({ figure }: { figure: Figure }) {
  const typeLabels: Record<string, string> = {
    poem: '诗词', book: '著作', calligraphy: '书法', painting: '画作', theory: '理论', other: '其他',
  };

  return (
    <section className="py-16 md:py-24 bg-museum-bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="代表作品" subtitle="Notable Works" color={figure.themeColor} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {figure.works.map((work) => (
              <motion.div
                key={work.title}
                variants={itemSlide}
                className="artifact-glass rounded-lg p-5 md:p-6 hover:bg-white/[0.06] transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-museum-fg font-bold text-base md:text-lg font-heading-zh">
                    {work.title}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded shrink-0"
                    style={{
                      backgroundColor: `${figure.themeColor}15`,
                      color: figure.themeColorLight,
                    }}
                  >
                    {typeLabels[work.type] || work.type}
                  </span>
                </div>
                {work.year && (
                  <span className="text-xs text-museum-fg-muted/60" style={{ color: figure.themeColor }}>
                    {work.year}
                  </span>
                )}
                <p className="text-sm text-museum-fg-muted/80 mt-2 leading-relaxed">
                  {work.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Quotes ───
function QuotesSection({ figure }: { figure: Figure }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="千古名句" subtitle="Echoes Through Time" color={figure.themeColor} />

          <div className="space-y-4">
            {figure.quotes.map((quote, index) => (
              <motion.div
                key={index}
                variants={itemSlide}
                className="artifact-glass rounded-lg p-5 md:p-6 hover:bg-white/[0.06] transition-colors"
              >
                <Quote
                  size={20}
                  className="mb-2"
                  style={{ color: `${figure.themeColor}50` }}
                />
                <p className="text-museum-fg text-base md:text-lg leading-relaxed font-heading-zh italic">
                  "{quote.text}"
                </p>
                <div className="flex items-center gap-3 mt-3 text-sm text-museum-fg-muted/60">
                  <span style={{ color: figure.themeColor }}>
                    — {quote.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Evaluations ───
function EvaluationsSection({ figure }: { figure: Figure }) {
  return (
    <section className="py-16 md:py-24 bg-museum-bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="历史评价" subtitle="Historical Evaluations" color={figure.themeColor} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {figure.evaluations.map((evalItem, index) => (
              <motion.div
                key={index}
                variants={itemSlide}
                className="artifact-glass rounded-lg p-5 md:p-6 hover:bg-white/[0.06] transition-colors"
              >
                <p className="text-museum-fg text-sm md:text-base leading-relaxed font-heading-zh italic mb-4">
                  "{evalItem.text}"
                </p>
                <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between text-xs">
                  <span className="text-museum-fg font-medium">{evalItem.author}</span>
                  <span className="text-museum-fg-muted/50">
                    {evalItem.era} · {evalItem.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Related Figures ───
function RelatedSection({ figure }: { figure: Figure }) {
  const navigate = useNavigate();
  const related = figure.relatedFigures
    .map((name) => figuresData.find((f) => f.name === name))
    .filter(Boolean) as Figure[];

  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="相关人物" subtitle="Related Figures" color={figure.themeColor} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((rel) => (
              <motion.div
                key={rel.id}
                variants={itemSlide}
                className="artifact-glass rounded-lg p-4 text-center cursor-pointer hover:bg-white/[0.06] transition-colors group"
                onClick={() => navigate(`/figure/${rel.id}`)}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3 p-1 artifact-glass"
                  style={{ borderColor: `${rel.themeColor}40` }}
                >
                  <img
                    src={rel.portrait}
                    alt={rel.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-museum-fg font-bold font-heading-zh group-hover:brightness-110 transition-all">
                  {rel.name}
                </h3>
                <p className="text-xs text-museum-fg-muted/60 mt-0.5">{rel.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Bottom CTA ───
function BottomCTA({ figure }: { figure: Figure }) {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-museum-bg-secondary/50">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeIn direction="up" distance={24} duration={0.6}>
          <h2 className="font-heading-zh text-3xl md:text-4xl font-bold text-museum-fg mb-4">
            探索更多历史人物
          </h2>
          <p className="text-museum-fg-muted mb-8">
            穿越千年，与先贤对话。输入一个名字，开启一段历史之旅。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 rounded font-medium transition-all"
              style={{
                backgroundColor: figure.themeColor,
                color: '#0F1419',
              }}
            >
              返回首页
            </button>
            <button
              onClick={() => {
                const others = figuresData.filter((f) => f.id !== figure.id);
                const picked = others[Math.floor(Math.random() * others.length)];
                navigate(`/figure/${picked.id}`);
              }}
              className="px-8 py-3 rounded font-medium border transition-all"
              style={{
                borderColor: `${figure.themeColor}50`,
                color: figure.themeColorLight,
              }}
            >
              <span className="flex items-center gap-2 justify-center">
                随机探索 <Sparkles size={16} />
              </span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───
function DetailFooter() {
  const navigate = useNavigate();

  return (
    <footer className="py-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 rounded border border-artifact-ru-blue/50 flex items-center justify-center">
              <span className="text-artifact-ru-blue font-heading-zh text-sm font-bold">千</span>
            </div>
            <span className="font-heading-zh text-museum-fg font-bold">人物千秋</span>
          </div>
          <p className="text-xs text-museum-fg-muted/60">
            &copy; 2026 人物千秋 · 以AI传承文明
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Simplified Figure Page (for API-only figures) ───
import type { SearchResult } from '../data/all-figures';

function SimplifiedFigurePage({ result }: { result: SearchResult }) {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-museum-bg flex flex-col items-center justify-center px-6">
      <DynamicBackground />
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-museum-fg-muted hover:text-museum-fg transition-colors group"
      >
        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        <span className="text-sm">返回首页</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-lg"
      >
        {/* Avatar placeholder */}
        <div className="w-28 h-28 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl font-heading-zh font-bold text-museum-fg">
            {result.name.charAt(0)}
          </span>
        </div>

        <BlurText
          text={result.name}
          as="h1"
          className="font-heading-zh text-5xl md:text-6xl font-bold text-museum-fg mb-2"
          delay={0.2}
          staggerDelay={0.08}
          wordDuration={0.4}
        />
        <p className="text-lg text-museum-fg-muted/70 font-body-en mb-2">
          {result.nameEn}
        </p>

        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs rounded bg-white/10 text-museum-fg border border-white/20">
            {result.era}
          </span>
          <span className="px-3 py-1 text-xs rounded bg-artifact-ru-blue/15 text-artifact-ru-blue border border-artifact-ru-blue/30">
            {result.title}
          </span>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {result.keywords.map((kw) => (
            <span
              key={kw}
              className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-museum-fg-muted/60 border border-white/[0.06]"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Under construction notice */}
        <div className="artifact-glass rounded-lg p-8 border border-artifact-dh-gold/20">
          <Sparkles size={24} className="text-artifact-dh-gold/60 mx-auto mb-3" />
          <h2 className="font-heading-zh text-xl font-bold text-museum-fg mb-2">AI档案生成中</h2>
          <p className="text-sm text-museum-fg-muted/70 leading-relaxed mb-4">
            {result.name}的完整档案正在由AI生成中，
            <br />
            包括生平传记、代表作品、历史评价等丰富内容
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2.5 bg-artifact-ru-blue/20 border border-artifact-ru-blue/50 text-artifact-ru-blue text-sm rounded hover:bg-artifact-ru-blue/30 transition-all"
            >
              浏览其他人物
            </button>
            <button
              onClick={() => {
                const randomFigs = ['li-bai', 'su-shi', 'zhuge-liang', 'wang-yangming', 'wu-zetian', 'du-fu'];
                const picked = randomFigs[Math.floor(Math.random() * randomFigs.length)];
                navigate(`/figure/${picked}`);
              }}
              className="px-6 py-2.5 border border-white/[0.15] text-museum-fg-muted text-sm rounded hover:bg-white/[0.04] transition-all"
            >
              随机探索
            </button>
          </div>
        </div>
      </motion.div>

      <DetailFooter />
    </main>
  );
}

// ─── Main Page Component ───
export default function FigurePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const figure = id ? getFigureById(id) : undefined;
  const searchResult = (location.state as { searchResult?: SearchResult })?.searchResult;

  useEffect(() => {
    if (id && !figure && !searchResult) {
      // Redirect to home only if neither local data nor search result
      navigate('/', { replace: true });
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [id]);

  // Simplified page for API-only figures
  if (!figure && searchResult) {
    return <SimplifiedFigurePage result={searchResult} />;
  }

  if (!figure) {
    return null;
  }

  return (
    <main className="min-h-screen bg-museum-bg">
      <ProfileHeader figure={figure} />
      <StatsBar figure={figure} />
      <BiographySection figure={figure} />
      <TimelineSection figure={figure} />
      <AchievementsSection figure={figure} />
      <WorksSection figure={figure} />
      <QuotesSection figure={figure} />
      <EvaluationsSection figure={figure} />
      <RelatedSection figure={figure} />
      <BottomCTA figure={figure} />
      <DetailFooter />
    </main>
  );
}
