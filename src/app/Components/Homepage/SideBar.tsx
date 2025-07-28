'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { RootState,AppDispatch } from '../../Redux/Store';
import { setSelected } from '../../Redux/SelectedSlice';
import { fetchCategories } from '../../utils/Api';
import Loader from '../DynamicComponents/Loader';
import ErrorMessage from '../DynamicComponents/ErrorMessage';
import { Category, SidebarProps } from '../../Props/AllProps';
import themes from "../../StyleThemes"


const SideBar: React.FC<SidebarProps> = ({
  width = '20%',
  height = 'h-screen',
  className = '',
  showTitle = true,
  title = 'Categories',
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selected = useSelector((state: RootState) => state.selectedcategory.selected);
 

  const {
    data: categories,
    isLoading,
    isError,
    refetch,
  } = useQuery<Category[]>(
    {
    queryKey: ['coinCategories'],
    queryFn: fetchCategories,
  }
  );
  useEffect(()=>{
   console.log("selected category",selected)
  },[selected])

   return (
     <aside style={{ ...styles.container, height, width }} className={`sidebar card-hover-effect ${className}`}>
      {showTitle && (
        <h2 className="sidebar-title" style={styles.title}>{title}</h2>
      )}

      {isLoading && <Loader text="Loading categories..." />}

      {isError && (
        <ErrorMessage
          message="Failed to load categories"
          onRetry={refetch}
          iconStatus="warning"
        />
      )}

      {!isLoading && !isError && categories && (
        <div style={styles.scrollableListWrapper}>
            <ul className="category-list sidebar">
          {categories.map((category) => (
            <li
              key={category.category_id}
              style={
                selected === category.category_id
                  ? styles.selectedCategory
                  : styles.category
              }
              onClick={() => dispatch(setSelected(category.category_id))}
            >
              {category.name}
            </li>
          ))}
        </ul>
        </div>
       
      )}
    </aside>
  );
};

const styles = {
  scrollableListWrapper: {
  flex: 1,
  overflowY: 'auto' as const,
  overflowX: 'hidden' as const,
},
  container: {
  padding: '16px',
  backgroundColor: themes.colors.black,
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)', 
  fontFamily: themes.font.primary,
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '12px',
  border: `1px solid ${themes.colors.border.default}`,
  borderRadius: '12px',
  height: '100%',
  boxSizing: 'border-box' as const,
  width: '100%', 
},
  title: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '16px',
    color: themes.colors.white,
    fontFamily: themes.font.special,
  },

  category: {
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    textTransform: 'capitalize' as const,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    color: themes.colors.gray,
    backgroundColor: 'transparent',
    fontFamily: themes.font.secondary,
  },
  selectedCategory: {
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    textTransform: 'capitalize' as const,
    cursor: 'pointer',
    backgroundColor: themes.colors.mintgreen,
    color: themes.colors.text.inverse,
    fontFamily: themes.font.highlight,
    transition: 'all 0.2s ease-in-out',
  },
};
export default SideBar;

