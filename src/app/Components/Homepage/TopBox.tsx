'use client';
import React from 'react';
import DropDown from '../DynamicComponents/DropDown';
import { TopBoxProps } from '../../Props/AllProps';
import themes from '../../StyleThemes';


const TopBox: React.FC<TopBoxProps> = ({ title, dropdownData, onSelect }) => {
  const filterOptions = ["All","Rank", "Popular", "Top Gainers", "Top Losers"];
    return (
    <div className="topBox-container" style={styles.container}>
      <h2 className="topBox-title" style={styles.title}>{title}</h2>
      <div className="topBox-dropdown">
        <DropDown options={dropdownData} onSelect={onSelect} />
      </div>
    </div>
  );
};

export default TopBox;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '1rem 0',
  },
  title: {
    fontFamily: themes.font.primary,
    color:themes.colors.white
  },
};
