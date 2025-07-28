'use client';
import React, { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { ErrorMessageProps } from '../../Props/AllProps';
import themes from '../../StyleThemes'

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  className = '',
  icon : Icon = FiAlertCircle,
  iconStatus
}) => {
 const [isHovering, setIsHovering] = useState(false);
  const iconColor =
    themes.colors.action.icon[iconStatus] || themes.colors.text.primary;

  const retryButtonStyles = {
    ...styles.retryButton,
    backgroundColor: isHovering
      ? themes.colors.action.primary.hover
      : themes.colors.action.primary.default,
    color: themes.colors.action.primary.text,
  };

  return (
    <div style={styles.wrapper} className={className}>
      <div style={styles.container}>
        <div style={styles.iconWrapper}>

          <Icon
            style={{
              color: iconColor,
              width: '2.5rem', 
              height: '2.5rem',
              animation: 'bounce 1s infinite',
            }}
          />
        </div>

        <p style={styles.message}>{message}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={retryButtonStyles}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};



export default ErrorMessage

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
    padding: '1.25rem',
    backgroundColor: themes.colors.background.paper,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: themes.colors.border.default,
    borderRadius: '0.75rem',
    fontFamily: themes.font.primary,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    maxWidth: '90%',
    textAlign: 'center' as const,
  },
  iconWrapper: {
    marginBottom: '1rem',
  },
  message: {
    color: themes.colors.text.secondary,
    fontSize: '1rem',
    fontFamily: themes.font.secondary,
    wordWrap: 'break-word' as const,
    marginBottom: '1rem',
  },
  retryButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};
