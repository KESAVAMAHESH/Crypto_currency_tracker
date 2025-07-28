'use client';
import React, { useEffect, useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, clearQuery } from '../../Redux/SearchSlice';
import type { RootState, AppDispatch } from '../../Redux/Store';
import { SearchBarProps } from '../../Props/AllProps'
import themes from '../../StyleThemes';

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  className = '',
  debounceTime=300
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.search.query);
  const [localQuery, setLocalQuery] = useState(query);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(setQuery(localQuery));
      console.log("search value",query)
      console.log(localQuery)
    }, debounceTime);

    return () => clearTimeout(delayDebounce);
  }, [localQuery, dispatch]);

  const handleClear = () => {
    setLocalQuery('');
    dispatch(clearQuery());
  };
 return (
    <div
      className={className}
      style={{
        ...styles.container,
        ...(isHovered ? styles.containerHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FiSearch style={styles.icon} />

      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder={placeholder}
        style={styles.input}
      />

      {localQuery && (
        <button onClick={handleClear} style={styles.clearButton}>
          <FiX style={styles.clearIcon} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: String(themes.colors.border.interactive),
    backgroundColor: themes.colors.background.paper,
    fontFamily: themes.font.primary,
    borderRadius: '0.75rem',
    padding: '0.5rem 0.75rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease-in-out',
  },
  containerHover: {
    borderColor: themes.colors.white,
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.2)',
    transform: 'scale(1.01)',
  },
  icon: {
    color: themes.colors.black,
    marginRight: '0.5rem',
    width: '1.25rem',
    height: '1.25rem',
    flexShrink: 0,
  },
  input: {
    flex: 1,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    color: themes.colors.text.primary,
    fontFamily: themes.font.primary,
  },
  clearButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '0.5rem',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearIcon: {
    color: themes.colors.black,
    width: '1.1rem',
    height: '1.1rem',
  },
};