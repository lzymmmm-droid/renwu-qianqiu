import { useEffect, useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  staggerDelay?: number;
  wordDuration?: number;
  once?: boolean;
  blurAmount?: number;
}

/**
 * BlurText — 逐字模糊→清晰入场组件
 *
 * 从 Pawsome/SOLARA/Lumina Walls 比赛项目提炼的模式：
 * - 每个字从 blur(10px) 渐变为清晰
 * - 搭配 opacity: 0→1, y: 30→0
 * - 使用 IntersectionObserver 触发，只在视口内播放
 * - 支持 prefers-reduced-motion
 *
 * 修复记录 2026-05-15:
 * - 原版本使用 useState(hasPlayed) 导致闭包问题，动画在 re-render 时重复触发
 * - 改用 useRef 跟踪播放状态，完全脱离 React re-render 周期
 */
export default function BlurText({
  text,
  className = '',
  as: Tag = 'span',
  delay = 0,
  staggerDelay = 0.1,
  wordDuration = 0.35,
  once = true,
  blurAmount = 10,
}: BlurTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const timerRefs = useRef<number[]>([]);

  const chars = [...text];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // 清理之前的 timer
    timerRefs.current.forEach((id) => clearTimeout(id));
    timerRefs.current = [];

    // prefers-reduced-motion: 直接显示全部
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      el.querySelectorAll('.blur-char').forEach((char) => {
        const c = char as HTMLElement;
        c.style.opacity = '1';
        c.style.filter = 'blur(0px)';
        c.style.transform = 'translateY(0)';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!once || !hasPlayedRef.current) {
              hasPlayedRef.current = true;
              const charEls = el.querySelectorAll('.blur-char');
              charEls.forEach((char, i) => {
                const timerId = window.setTimeout(() => {
                  const c = char as HTMLElement;
                  c.style.opacity = '1';
                  c.style.filter = 'blur(0px)';
                  c.style.transform = 'translateY(0)';
                }, (delay + i * staggerDelay) * 1000);
                timerRefs.current.push(timerId);
              });
            }
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timerRefs.current.forEach((id) => clearTimeout(id));
    };
  }, [delay, staggerDelay, wordDuration, once, blurAmount]);

  const charStyle = {
    transition: `opacity ${wordDuration}s cubic-bezier(0.22, 1, 0.36, 1), filter ${wordDuration}s cubic-bezier(0.22, 1, 0.36, 1), transform ${wordDuration}s cubic-bezier(0.22, 1, 0.36, 1)`,
    opacity: 0,
    filter: `blur(${blurAmount}px)`,
    transform: 'translateY(30px)',
    display: 'inline' as const,
  };

  return (
    <Tag className={className}>
      <div ref={containerRef} className="inline">
        {chars.map((char, i) => (
          <span key={`${char}-${i}`} className="blur-char" style={charStyle}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </Tag>
  );
}
