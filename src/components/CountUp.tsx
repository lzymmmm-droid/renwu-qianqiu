import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

/**
 * CountUp — 数字滚动动画组件
 *
 * 进入视口时数字从0滚动到目标值
 * 支持 "5000+" / "50万+" 等格式
 * 支持 prefers-reduced-motion
 */
export default function CountUp({
  value,
  duration = 2,
  delay = 0,
  once = true,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [suffix, setSuffix] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);

  // 解析数字和后缀："5000+" -> { num: 5000, suffix: '+' }
  const parseValue = (val: string) => {
    const match = val.match(/^([\d\u4e00-\u9fa5.]+)(.*)$/);
    if (!match) return { num: 0, suffix: val };
    return { num: parseFloat(match[1]), suffix: match[2] };
  };

  useEffect(() => {
    const { suffix: suf } = parseValue(value);
    setSuffix(suf);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // prefers-reduced-motion: 直接显示目标值
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!once || !hasPlayed) {
              setHasPlayed(true);
              const { num } = parseValue(value);
              const startTime = performance.now() + delay * 1000;

              const animate = (now: number) => {
                if (now < startTime) {
                  requestAnimationFrame(animate);
                  return;
                }

                const elapsed = (now - startTime) / 1000;
                const progress = Math.min(elapsed / duration, 1);

                // ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * num);

                setDisplayValue(current.toLocaleString());

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              requestAnimationFrame(animate);
            }
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [duration, delay, once, hasPlayed, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
