'use client';
import React, { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { FaCoins } from 'react-icons/fa';
import SearchBar from '../DynamicComponents/SearchBar';
import { NavBarProps } from '../../Props/AllProps';
import themes from '../../StyleThemes'


const NavBar: React.FC<NavBarProps> = ({ refresh }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={styles.navbar}>
      <div style={styles.left}>
        <FaCoins style={styles.icon} />
        <span className="app-title" style={styles.title}>Crypto Coin Tracker</span>
      </div>

      <div style={styles.center}>
        <SearchBar placeholder="Search coins..." />
      </div>

      <div style={styles.right}>
        <button
           style={{
          ...styles.refreshButton,
          ...(isHovered ? styles.refreshButtonHover : {})
         }}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           onClick={refresh}
         >
           <FiRefreshCw size={20} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    backgroundColor: themes.colors.background.paperDark,
    borderBottom: `1px solid ${themes.colors.border.default}`,
    flexWrap: 'wrap' as const,
    gap: '10px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    fontSize: '24px',
    color: themes.colors.white,
  },
  title: {
    fontFamily: themes.font.primary,
    fontSize: '20px',
    fontWeight: 'bold',
    color: themes.colors.text.disabled,
  },
  center: {
    flex: 1,
    minWidth: '200px',
    maxWidth: '400px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  refreshButton: {
    backgroundColor: themes.colors.text.disabled,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: themes.colors.action.secondary.border,
    padding: '8px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: themes.colors.black,
    fontFamily: themes.font.secondary,
  },
  refreshButtonHover: {
  borderColor: themes.colors.white,
  boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.2)',
  transform: 'scale(1.05)',
},
};

export default NavBar;