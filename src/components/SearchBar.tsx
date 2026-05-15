import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { filterFigures, ALL_FIGURES, type SearchResult } from '../data/all-figures';

// ─── Props ───
interface SearchBarProps {
  placeholder?: string;
  variant?: 'navbar' | 'hero';
  className?: string;
  onNavigate?: (id: string) => void;
  /** Auto-focus on mount (hero variant only) */
  autoFocus?: boolean;
}

// ─── Component ───
export default function SearchBar({
  placeholder = '搜索历史人物...',
  variant = 'navbar',
  className = '',
  onNavigate,
  autoFocus = false,
}: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>(ALL_FIGURES);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ─── Filter on type (instant, no API) ───
  useEffect(() => {
    setResults(filterFigures(query));
    setHighlightIndex(-1);
  }, [query]);

  // ─── Close on click outside ───
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // ─── Keyboard navigation ───
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'Enter' && query.trim() && results.length === 1) {
        handleSelect(results[0]);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightIndex((prev) =>
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightIndex >= 0 && results[highlightIndex]) {
          handleSelect(results[highlightIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  // ─── Select a result ───
  const handleSelect = (item: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    setResults(ALL_FIGURES);
    inputRef.current?.blur();
    if (onNavigate) {
      onNavigate(item.id);
    } else {
      navigate(`/figure/${item.id}`, { state: { searchResult: item } });
    }
  };

  // ─── Render ───
  const isHero = variant === 'hero';

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input */}
      <div className={`relative ${isHero ? 'w-full' : ''}`}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => {
            setIsOpen(true);
          }}
          onClick={() => {
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={
            isHero
              ? 'w-full px-6 py-4 pr-14 bg-white/[0.06] border border-white/[0.12] rounded-lg text-museum-fg placeholder-museum-fg-muted/50 focus:outline-none focus:border-artifact-ru-blue/50 focus:bg-white/[0.08] transition-all duration-300 font-body-zh text-lg'
              : 'w-full pl-10 pr-4 py-2 bg-white/[0.06] border border-white/[0.1] rounded-lg text-sm text-museum-fg placeholder-museum-fg-muted/40 focus:outline-none focus:border-artifact-ru-blue/40 focus:bg-white/[0.08] transition-all duration-200'
          }
        />
        {/* Search icon */}
        <div className={`absolute ${isHero ? 'right-2 w-10 h-10' : 'left-3'} top-1/2 -translate-y-1/2 flex items-center justify-center`}>
          <Search size={isHero ? 18 : 14} className={isHero ? 'text-artifact-ru-blue/60' : 'text-museum-fg-muted/40'} />
        </div>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute ${
              isHero ? 'top-full mt-2 left-0 right-0' : 'top-full mt-2 right-0'
            } ${
              isHero ? '' : 'w-80'
            } z-50 artifact-glass-strong rounded-lg border border-white/[0.08] shadow-xl overflow-hidden flex flex-col`}
            style={{ maxHeight: '220px', transformOrigin: 'top center' }}
          >
            {/* Count bar */}
            <div className="px-3 py-0.5 text-xs text-museum-fg-muted/40 border-b border-white/[0.06] shrink-0">
              {query.trim()
                ? `共找到 ${results.length} 个人物`
                : `全部 ${results.length} 位历史人物`}
            </div>

            {/* Empty state */}
            {results.length === 0 && (
              <div className="py-6 text-center">
                <p className="text-sm text-museum-fg-muted/50">未找到 "{query.trim()}" 相关人物</p>
                <p className="text-xs text-museum-fg-muted/30 mt-1">试试其他关键词</p>
              </div>
            )}

            {/* Results */}
            {results.length > 0 && (
              <div
                className="overflow-y-auto flex-1 search-dropdown-scroll flex flex-col"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255,255,255,0.25) transparent',
                }}
              >
                {results.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setHighlightIndex(index)}
                    className={`w-full flex items-center gap-2 px-3 py-0.5 text-left transition-colors duration-150 ${
                      index === highlightIndex
                        ? 'bg-artifact-ru-blue/15 text-museum-fg'
                        : 'text-museum-fg-muted hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Avatar placeholder */}
                    <div
                      className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs font-bold font-heading-zh ${
                        index === highlightIndex
                          ? 'bg-artifact-ru-blue/25 text-artifact-ru-blue'
                          : 'bg-white/[0.06] text-museum-fg-muted/60'
                      }`}
                    >
                      {item.name.charAt(0)}
                    </div>

                    {/* Name only — clean & compact */}
                    <span className="flex-1 font-heading-zh font-bold text-xs truncate leading-none">
                      {item.name}
                    </span>

                    {/* Arrow */}
                    <ChevronRight
                      size={12}
                      className={`shrink-0 transition-all duration-200 ${
                        index === highlightIndex
                          ? 'text-artifact-ru-blue opacity-100 translate-x-0'
                          : 'text-museum-fg-muted/20 opacity-0 -translate-x-1'
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
