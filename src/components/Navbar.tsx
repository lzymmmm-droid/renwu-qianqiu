import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Search as SearchIcon } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['首页', '人物志', 'AI生成', '关于'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'artifact-glass-strong py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate('/')}
        >
          <div className="w-10 h-10 rounded border border-artifact-ru-blue/50 flex items-center justify-center">
            <span className="text-artifact-ru-blue font-heading-zh text-lg font-bold">千</span>
          </div>
          <div>
            <h1 className="font-heading-zh text-xl font-bold text-museum-fg">人物千秋</h1>
            <p className="text-xs text-museum-fg-muted font-body-en tracking-wider">HISTORICAL FIGURES</p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={index === 0 ? '/' : `/#${index === 1 ? 'figures' : index === 2 ? 'ai-generation' : 'footer'}`}
              className="text-sm text-museum-fg-muted hover:text-museum-fg transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-artifact-ru-blue group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Desktop Right: Search + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search toggle */}
          <motion.button
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-museum-fg-muted hover:text-museum-fg hover:bg-white/[0.06] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="搜索历史人物"
          >
            <SearchIcon size={16} />
          </motion.button>

          {/* CTA */}
          <motion.button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-artifact-ru-blue/20 border border-artifact-ru-blue/50 text-artifact-ru-blue text-sm rounded hover:bg-artifact-ru-blue/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Sparkles size={14} />
              随机一位
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-museum-fg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Search Bar (below navbar) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="hidden md:block overflow-hidden"
          >
            <div className="max-w-2xl mx-auto px-6 py-4">
              <SearchBar
                variant="navbar"
                placeholder="搜索历史人物姓名..."
                onNavigate={() => setSearchOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden artifact-glass-strong mt-4 mx-6 rounded-lg overflow-hidden"
          >
            <div className="py-4 px-6 space-y-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <SearchBar
                  variant="navbar"
                  placeholder="搜索历史人物..."
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              </div>

              {navItems.map((item, idx) => (
                <button
                  key={item}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate(idx === 0 ? '/' : '/');
                  }}
                  className="block w-full text-left text-museum-fg-muted hover:text-museum-fg transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/');
                }}
                className="w-full py-2.5 bg-artifact-ru-blue/20 border border-artifact-ru-blue/50 text-artifact-ru-blue text-sm rounded"
              >
                随机一位
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
