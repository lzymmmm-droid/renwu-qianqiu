import type { ReactNode } from 'react';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  borderWidth?: number;
  borderRadius?: string;
  as?: 'div' | 'span';
}

/**
 * GradientBorder — 渐变边框容器
 * 
 * 从 EdgeOne 比赛项目提炼的模式：
 * 双层div叠加，底层渐变作为边框，内层玻璃背景作为内容区
 * 兼容性优于 mask-composite 方案
 * 
 * @param gradient - 渐变颜色 (默认 琥珀金→天青→朱砂)
 * @param borderWidth - 边框宽度 (默认 1px)
 * @param borderRadius - 圆角 (默认 0.5rem)
 */
export default function GradientBorder({
  children,
  className = '',
  gradient = 'linear-gradient(135deg, #C9A04E 0%, #5BA3C4 50%, #A85A4D 100%)',
  borderWidth = 1,
  borderRadius = '0.5rem',
  as: Tag = 'div',
}: GradientBorderProps) {
  return (
    <Tag
      className={`relative ${className}`}
      style={{ borderRadius, padding: borderWidth, background: gradient }}
    >
      {/* 内层：玻璃态背景覆盖，只留边框部分的渐变可见 */}
      <div
        className="relative h-full overflow-hidden"
        style={{
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
        }}
      >
        {children}
      </div>
    </Tag>
  );
}
