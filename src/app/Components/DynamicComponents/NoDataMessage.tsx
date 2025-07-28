'use client';
import React from 'react';
import { FiInbox } from 'react-icons/fi';
import { NoDataMessageProps } from '../../Props/AllProps';
import themes from "../../StyleThemes"


const NoDataMessage: React.FC<NoDataMessageProps> = ({
  message = 'No data found',
  className = '',
 
}) => {
  return (
    <div style={styles.wrapper} className={className}>
      <div style={styles.container}>
        <div style={styles.iconWrapper}><FiInbox className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 animate-bounce" /></div>
        <p style={styles.text}>{message}</p>
      </div>
    </div>
  );
  
};

export default NoDataMessage;

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: themes.colors.background.paper,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: String(themes.colors.border.default),
    borderRadius: '0.75rem',
    fontFamily: themes.font.primary,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    maxWidth: '90%',
    textAlign: 'center' as const,
  },
  iconWrapper: {
    marginBottom: '0.5rem',
  },
  text: {
    color: themes.colors.text.secondary,
    fontSize: '1rem',
    fontFamily: themes.font.secondary,
    wordWrap: 'break-word' as const,
  },
};

