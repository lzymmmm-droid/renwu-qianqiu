import { useEffect, useRef, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  threshold?: number;
  as?: 'div' | 'span' | 'section' | 'article';
}

/**
 * FadeIn — 稳定的入场动画组件
 *
 * 基于 IntersectionObserver + CSS transition，替代 framer-motion variants
 * 解决路由切换/re-render时动画重复触发导致的闪烁问题
 */
export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  once = true,
  threshold = 0.2,
  as: Tag = 'div',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'none': return 'none';
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!once || !hasPlayedRef.current) {
              hasPlayedRef.current = true;
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'none';
              }, delay * 1000);
            }
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, threshold]);

  const style = {
    opacity: 0,
    transform: getInitialTransform(),
    transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
    willChange: 'opacity, transform',
  };

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  );
}
