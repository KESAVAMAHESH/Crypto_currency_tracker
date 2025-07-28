'use client';
import React, { useState } from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import CoinsData from './CoinData';
import TopBox from './TopBox';
import themes from "../../StyleThemes"
import { useSelector } from 'react-redux';
import {RootState} from '../../Redux/Store'
import { useCoins } from '../../Hooks/UseCoins';


const HomePage = () => {
   const selectedCategory = useSelector((state: RootState) => state.selectedcategory.selected);
  const { refetch } = useCoins(selectedCategory);
  const filterOptions = ["All","Rank", "Popular", "Top Gainers", "Top Losers"];
    const [selectedFilter, setSelectedFilter] = useState("All"); 

  const handleFilterSelect = (value: string) => {
    setSelectedFilter(value);
    console.log("Selected Filter:", value); 
  };
  return (
       <>
      <NavBar refresh={refetch} />
      <div style={styles.pageWrapper}>

        <div className="mainContainer" style={styles.mainContainer}>
    
          <div className="leftPanel " style={styles.leftPanel}>
            <SideBar
              width="100%"
              height="100%"
              title="Categories"
              showTitle={true}
            />
          </div>
           

           <div  style={styles.rightPanel}>
            <div style={styles.topBox}>
              <TopBox title="Explore Data As You Like" dropdownData={filterOptions} onSelect={handleFilterSelect} />
            </div>
            <div style={styles.bottomBox}>
              <CoinsData selectedFilter={selectedFilter}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: themes.colors.gray,
  },
   pageWrapper: {
    padding: '20px',
    boxSizing: 'border-box' as const,
    backgroundColor: themes.colors.mintgreen,
    height: '100vh',
    overflow: 'hidden',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    height: '100%',
    gap: '20px',
  },
  leftPanel: {
    flex: '0 0 25%',
    minWidth: '250px',
    maxWidth: '300px',
    overflowY: 'auto' as const,
    height: '100%',
    backgroundColor: themes.colors.gray,
    borderRadius: '8px',
    padding: '1rem',
    boxSizing: 'border-box' as const,
  },
  rightPanel: {
    flex: '1',
    minWidth: '0',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: themes.colors.gray,
    borderRadius: '8px',
    padding: '1rem',
    height: '100%',
    overflow: 'hidden',
  },
  topBox: {
    flex: '0 0 auto',
    height: '10%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: themes.colors.white,
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: themes.colors.black,
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomBox: {
    flex: '1 1 auto',
    overflowY: 'auto' as const,
  },
};

  


export default HomePage
