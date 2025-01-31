'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { 
      name: 'Home', 
      path: '/' 
    },
    { 
      name: 'About', 
      path: '/about'
    },
    { 
      name: 'Projects', 
      path: '/projects',
      dropdown: [
        { name: 'Web Development', path: '/projects/web' },
        { name: 'Mobile Apps', path: '/projects/mobile' },
        { name: 'Design Work', path: '/projects/design' }
      ]
    },
    { 
      name: 'References', 
      path: '/references'
    }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          JD
        </Link>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.navItem}>
              {item.dropdown ? (
                <>
                  <Link 
                    href={item.path}
                    className={`${styles.navLink} ${pathname === item.path ? styles.active : ''}`}
                  >
                    {item.name}
                  </Link>
                  <div className={styles.dropdown}>
                    {item.dropdown.map((dropItem, idx) => (
                      <Link 
                        key={idx}
                        href={dropItem.path}
                        className={styles.dropdownItem}
                        onClick={() => setIsOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={item.path}
                  className={`${styles.navLink} ${pathname === item.path ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
} 