'use client';
import React from 'react';
import { DropdownProps } from '../../Props/AllProps';
import themes from '../../StyleThemes';


const DropDown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  return (
    <select  className="dropdown-select" onChange={(e) => onSelect(e.target.value)} style={styles.select}>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default DropDown;

const styles = {
  select: {
    padding: '10px 16px',
    borderRadius: '12px',
    border: `1px solid ${themes.colors.border.interactive}`,
    fontSize: '1rem',
    fontFamily: themes.font.primary,
    backgroundColor: themes.colors.background.paper,
    color: themes.colors.text.secondary,
    outline: 'none',
    cursor: 'pointer',
    transition: 'border 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  }
};
