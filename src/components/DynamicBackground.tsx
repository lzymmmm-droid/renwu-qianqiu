import { useEffect, useRef } from 'react';

/**
 * 动态背景 - 电影级呼吸感
 * 
 * 多层叠加：
 * 1. 深色底
 * 2. 缓慢流动的 CSS 渐变光晕（模拟大气/雾气）
 * 3. 细微噪点纹理
 * 4. 底部渐变遮罩（融入页面内容）
 */
export default function DynamicBackground() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 使用 requestAnimationFrame 实现平滑的、非线性的光晕漂移
    // 比纯 CSS animation 更自然，有有机感
    let frameId: number;
    let t = 0;

    const animate = () => {
      t += 0.004; // 加快，肉眼可见的流动感

      if (orb1Ref.current) {
        const x = Math.sin(t * 0.7) * 40 + Math.cos(t * 1.3) * 20;
        const y = Math.cos(t * 0.5) * 35 + Math.sin(t * 0.9) * 18;
        orb1Ref.current.style.transform = `translate(${x}%, ${y}%)`;
      }
      if (orb2Ref.current) {
        const x = Math.cos(t * 0.6) * 35 + Math.sin(t * 1.1) * 22;
        const y = Math.sin(t * 0.8) * 40 + Math.cos(t * 0.4) * 20;
        orb2Ref.current.style.transform = `translate(${x}%, ${y}%)`;
      }
      if (orb3Ref.current) {
        const x = Math.sin(t * 0.9) * 30 + Math.cos(t * 0.3) * 25;
        const y = Math.cos(t * 1.2) * 28 + Math.sin(t * 0.7) * 35;
        orb3Ref.current.style.transform = `translate(${x}%, ${y}%)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {/* 深层底色 */}
      <div className="absolute inset-0 bg-museum-bg" />

      {/* 流动光晕层 */}
      <div
        ref={orb1Ref}
        className="absolute -top-[30%] -left-[20%] w-[80vw] h-[80vw] rounded-full opacity-25 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(83,74,183,0.35) 0%, rgba(83,74,183,0.08) 45%, transparent 75%)',
          filter: 'blur(60px)',
          transition: 'none',
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full opacity-20 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(29,158,117,0.28) 0%, rgba(29,158,117,0.06) 45%, transparent 75%)',
          filter: 'blur(80px)',
          transition: 'none',
        }}
      />
      <div
        ref={orb3Ref}
        className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] rounded-full opacity-15 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(216,90,48,0.22) 0%, rgba(216,90,48,0.05) 45%, transparent 75%)',
          filter: 'blur(100px)',
          transition: 'none',
        }}
      />

      {/* 细微噪点纹理 */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* 顶部渐变遮罩 - 确保导航栏区域纯净 */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,15,23,0.6) 0%, transparent 100%)',
        }}
      />

      {/* 底部渐变遮罩 - 内容融入 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'linear-gradient(to top, rgba(15,15,23,0.5) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
