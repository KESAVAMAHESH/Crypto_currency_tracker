import React from 'react';
import { LoaderProps } from '../../Props/AllProps'
import themes from "../../StyleThemes"


const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  text,
  color = 'white',
  className = '',
}) => {
  const spinnerSizeStyle = styles.size[size] || styles.size.md;
  const spinnerColor = themes.colors[color] || themes.colors.secondary;
  console.log(color)

  return (
    <>
      <div style={styles.wrapper} className={className}>
        <div
          style={{
            ...styles.spinner,
            ...spinnerSizeStyle,
            borderTopColor: 'transparent',
            borderRightColor: spinnerColor,
            borderBottomColor: spinnerColor,
            borderLeftColor: spinnerColor,
            borderStyle: 'solid',
            animation: 'spin 1s linear infinite',
          }}
        />
        {text && <p style={styles.text}>{text}</p>}
      </div>
    </>
  );
};

export default Loader;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    width: '100%',
  },
  spinner: {
    borderRadius: '50%',
    marginBottom: '0.75rem',
  },
  text: {
    fontSize: '1rem',
    color: themes.colors.text.secondary,
    fontFamily: themes.font.secondary,
    textAlign: 'center' as const,
  },
  size: {
    sm: {
      width: '1.25rem',
      height: '1.25rem',
      borderWidth: '2px',
    },
    md: {
      width: '2rem',
      height: '2rem',
      borderWidth: '4px',
    },
    lg: {
      width: '3rem',
      height: '3rem',
      borderWidth: '4px',
    },
  },
};

