import React, { useState } from 'react';
import { useAppTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ShipSprite } from './SpaceShooter';
import { getAssetUrl } from '../utils/assets.js';

export const Navbar = ({ isStuck = false, nameProgress = 0, onBrandClick }) => {
  const { toggleTheme, isDark } = useAppTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const handleBrandClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onBrandClick) {
      onBrandClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'research', label: 'Research', href: '#research' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${isStuck
        ? 'bg-transparent border-b border-transparent shadow-sm py-2.5'
        : 'bg-transparent border-b border-transparent py-4'
        }`}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-all duration-300"
        style={{
          gap: `${nameProgress * 16}px`,
        }}
      >
        {/* Blob 0: Ahmed Awsaf Brand Blob (revealed in proportion to scroll) */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxWidth: `${nameProgress * 260}px`,
            opacity: nameProgress,
            transform: `translateX(${(1 - nameProgress) * -16}px) scale(${0.85 + 0.15 * nameProgress})`,
            pointerEvents: nameProgress > 0.6 ? 'auto' : 'none',
          }}
        >
          <a
            href="/"
            onClick={handleBrandClick}
            className="acrylic-blob rounded-full p-1.5 pr-4 flex items-center gap-2.5 group no-underline text-inherit whitespace-nowrap hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/60 dark:border-white/20 shadow-sm group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <img
                src={getAssetUrl('/AhmedAwsaf-small.jpg')}
                alt="Ahmed Awsaf"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-pixel text-xs sm:text-sm leading-tight tracking-wide text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Ahmed Awsaf
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-neutral-500 dark:text-neutral-400 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Portfolio
              </span>
            </div>
          </a>
        </div>

        {/* Blobs Container: Nav Items Blob + Rounded Theme Changer Blob */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Blob 1: Long blob for Nav Items */}
          <div className="hidden md:flex items-center gap-1 acrylic-blob rounded-full p-1.5">
            {navLinks.map((link) => (
              <React.Fragment key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setActiveTab(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 no-underline whitespace-nowrap ${activeTab === link.id
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60'
                    }`}
                >
                  {link.label}
                </a>
                {link.id === 'skills' && (
                  <a
                    href="#arcade"
                    onClick={() => setActiveTab('arcade')}
                    aria-label="Arcade"
                    title="Play Space Break"
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 no-underline hover:scale-110 active:scale-95 ${activeTab === 'arcade'
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60'
                      }`}
                  >
                    <ShipSprite size={14} />
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Blob 2: Rounded blob with just the theme changer */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center acrylic-blob text-neutral-700 dark:text-neutral-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>

          {/* Mobile hamburger button (visible only on small screens) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center acrylic-blob text-neutral-700 dark:text-neutral-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 mt-2 mx-4 rounded-2xl acrylic-blob space-y-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.id}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors no-underline ${activeTab === link.id
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    }`}
                >
                  {link.label}
                </a>
                {link.id === 'skills' && (
                  <a
                    href="#arcade"
                    onClick={() => {
                      setActiveTab('arcade');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors no-underline flex items-center gap-2.5 ${activeTab === 'arcade'
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                  >
                    <span className="w-6 h-6 rounded-full flex items-center justify-center bg-neutral-200/60 dark:bg-neutral-800/80">
                      <ShipSprite size={13} />
                    </span>
                    <span>Arcade</span>
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
