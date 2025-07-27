
    <>
      <div
        className={`${navbarStyles.particle} w-24 h-24 bg-emerald-500/5 -top-12 left-1/4 ${navbarStyles.floatAnimation}`}
      />
      <div
        className={`${navbarStyles.particle} w-32 h-32 bg-green-500/5 -bottom-16 left-2/3 ${navbarStyles.floatSlowAnimation}`}
      />
      <div
        className={`${navbarStyles.particle} w-16 h-16 bg-teal-500/5 -top-8 left-3/4 ${navbarStyles.floatSlowerAnimation}`}
      />
    </>


// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiShoppingBag,
  FiMail,
  FiUser,
  FiX,
  FiMenu,
  FiPackage // Added for My Orders icon
} from 'react-icons/fi';
import { FaOpencart } from 'react-icons/fa';
import { useCart } from '../CartContext';
import logo from '../assets/logo.png';
import { navbarStyles } from '../assets/dummyStyles';
import { navItems } from '../assets/Dummy'

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const prevCartCountRef = useRef(cartCount);
  const [cartBounce, setCartBounce] = useState(false);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('authToken'))
  );

  // Mobile menu ref
  const mobileMenuRef = useRef(null);

  // Sync active tab & close mobile menu on route change
  useEffect(() => {
    setActiveTab(location.pathname);
    setIsOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bounce cart icon when new item added
  useEffect(() => {
    if (cartCount > prevCartCountRef.current) {
      setCartBounce(true);
      const timer = setTimeout(() => setCartBounce(false), 1000);
      return () => clearTimeout(timer);
    }
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  // Listen for auth changes
  useEffect(() => {
    const handler = () => {
      setIsLoggedIn(Boolean(localStorage.getItem('authToken')));
    };
    window.addEventListener('authStateChanged', handler);
    return () => window.removeEventListener('authStateChanged', handler);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    window.dispatchEvent(new Event('authStateChanged'));
    navigate('/login');
  };

  // Updated nav items with conditional "My Orders" link
  const getNavItems = () => {
    const baseItems = [...navItems];
    
    // Add "My Orders" after Shop link for logged-in users
    if (isLoggedIn) {
      const shopIndex = baseItems.findIndex(item => item.name === "Shop");
      if (shopIndex !== -1) {
        baseItems.splice(shopIndex + 1, 0, {
          name: "My Orders",
          path: "/myorders",
          icon: <FiPackage />
        });
      }
    }
    
    return baseItems;
  };

  const updatedNavItems = getNavItems();

  return (
    <nav
      className={`
        ${navbarStyles.nav}
        ${scrolled ? navbarStyles.scrolledNav : navbarStyles.unscrolledNav}
      `}
    >
      <div className={navbarStyles.borderGradient} />
      <div className={navbarStyles.particlesContainer}>
        <div
          className={`${navbarStyles.particle} w-24 h-24 bg-emerald-500/5 -top-12 left-1/4 ${navbarStyles.floatAnimation}`}
        />
        <div
          className={`${navbarStyles.particle} w-32 h-32 bg-green-500/5 -bottom-16 left-2/3 ${navbarStyles.floatSlowAnimation}`}
        />
        <div
          className={`${navbarStyles.particle} w-16 h-16 bg-teal-500/5 -top-8 left-3/4 ${navbarStyles.floatSlowerAnimation}`}
        />
      </div>

      <div className={navbarStyles.container}>
        <div className={navbarStyles.innerContainer}>
          {/* Logo */}
          <Link to="/" className={navbarStyles.logoLink}>
            <img
              src={logo}
              alt="RushBasket Logo"
              className={`${navbarStyles.logoImage} ${scrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
            />
            <span className={navbarStyles.logoText}>RushBasket</span>
          </Link>

          {/* Desktop Nav */}
          <div className={navbarStyles.desktopNav}>
            {updatedNavItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  ${navbarStyles.navItem}
                  ${activeTab === item.path
                    ? navbarStyles.activeNavItem
                    : navbarStyles.inactiveNavItem
                  }
                `}
              >
                <div className="flex items-center">
                  <span
                    className={`
                      ${navbarStyles.navIcon}
                      ${activeTab === item.path
                        ? navbarStyles.activeNavIcon
                        : navbarStyles.inactiveNavIcon
                      }
                    `}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
                <div
                  className={`
                    ${navbarStyles.navIndicator}
                    ${activeTab === item.path
                      ? navbarStyles.activeIndicator
                      : navbarStyles.inactiveIndicator
                    }
                  `}
                />
              </Link>
            ))}
          </div>

          {/* Icons & Hamburger */}
          <div className={navbarStyles.iconsContainer}>
            {isLoggedIn ? (
              // Logout button when logged in
              <button
                onClick={handleLogout}
                className={navbarStyles.loginLink}
                aria-label="Logout"
              >
                <FiUser className={navbarStyles.loginIcon} />
                <span className="ml-1 text-white">Logout</span>
              </button>
            ) : (
              // Login link when not logged in
              <Link to="/login" className={navbarStyles.loginLink}>
                <FiUser className={navbarStyles.loginIcon} />
                <span className="ml-1 text-white">Login</span>
              </Link>
            )}

            <Link to="/cart" className={navbarStyles.cartLink}>
              <FaOpencart
                className={`${navbarStyles.cartIcon} ${cartBounce ? 'animate-bounce' : ''
                  }`}
              />
              {cartCount > 0 && (
                <span className={navbarStyles.cartBadge}>{cartCount}</span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={navbarStyles.hamburgerButton}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-white" />
              ) : (
                <FiMenu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          ${navbarStyles.mobileOverlay}
          ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
          fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300
        `}
        onClick={() => setIsOpen(false)}
      >
        <div
          ref={mobileMenuRef}
          className={`
            ${navbarStyles.mobilePanel}
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            fixed right-0 top-0 bottom-0 z-50 w-4/5 max-w-sm
          `}
          onClick={e => e.stopPropagation()}
        >
          <div className={navbarStyles.mobileHeader}>
            <div className={navbarStyles.mobileLogo}>
              <div className={navbarStyles.mobileLogo}>
                <img
                  src={logo}
                  alt="RushBasket Logo"
                  className={navbarStyles.mobileLogoImage}
                />
                <span className={navbarStyles.mobileLogoText}>RushBasket</span>

              </div>

            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={navbarStyles.closeButton}
              aria-label="Close menu"
            >
              <FiX className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className={navbarStyles.mobileItemsContainer}>
            {updatedNavItems.map((item, idx) => (
              <Link
                key={item.name}
                to={item.path}
                className={navbarStyles.mobileItem}
                style={{
                  transitionDelay: isOpen ? `${idx * 100}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: `translateX(${isOpen ? 0 : '20px'})`,
                }}
                onClick={() => setIsOpen(false)}
              >
                <span className={navbarStyles.mobileItemIcon}>{item.icon}</span>
                <span className={navbarStyles.mobileItemText}>{item.name}</span>
              </Link>
            ))}

            <div className={navbarStyles.mobileButtons}>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className={navbarStyles.loginButton}
                >
                  <FiUser className={navbarStyles.loginButtonIcon} />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className={navbarStyles.loginButton}
                  onClick={() => setIsOpen(false)}
                >
                  <FiUser className={navbarStyles.loginButtonIcon} />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{navbarStyles.customCSS}</style>
    </nav>
  );
}
