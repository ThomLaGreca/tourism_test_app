
import React, { useContext, useEffect } from 'react';
import { AppContext, AppContextProps } from '../../contexts/appContext';
import axios from 'axios';

// Using CSS modules allows for a non competing, unilateral class naming convention across components. 
// i.e - The most parent class of a component is ALWAYS container (or some such), the header is always header etc..
// The class name conflict isnt so much of an issue in smaller applications but I believe its a good practise. 
// There is however one main caveat to using CSS modules, is that during testing you cant test whether a class name exists on an element, due to the unique naming. 
// I still think they are worth that particular trade off.

import styles from './main.module.css';

import SearchBar from '../searchBar';
import Panel from '../panel';
import ImageList from '../imageList';
import endpoints from '../../constants/endpoints'
import { ImageItemApiResponse } from '../_types/interface'
import { useFilterOnSearchTerm } from '../_hooks/useFilterOnSearchTerm';
import ToggleButton from '../toggleButton';
import { ImageListType } from '../_types/enum';

const Main: React.FC = () => {

  const {
    popularItems,
    setPopularItems,
    featuredItems,
    setFeaturedItems,
    searchTerm,
    theme
  } = useContext(AppContext) as AppContextProps

  const [filteredPopularItems] = useFilterOnSearchTerm(popularItems, searchTerm);

  // Initially load the images into context on first render.

  useEffect(() => {
    const fetch = async (url: string) => {
      return await axios.get<ImageItemApiResponse>(url);
    }

    fetch(endpoints.FEATURED)
      .then((result) => setFeaturedItems(result.data.data));

    fetch(endpoints.POPULAR)
      .then((result) => setPopularItems(result.data.data))

  }, [setFeaturedItems, setPopularItems])

  //  Top level components would normally not be in the components folder.
  //  I would (if there was more than 1) normally put them in thier own folder named 'pages' or 'screens' as a sibling of components.;

  return (
    <div className={styles.container} style={{ backgroundColor: theme.values.background }}>
      <ToggleButton />
      <div className={styles.innerContainer}>
        <SearchBar />
        <Panel>
          <ImageList
            theme={theme}
            header="Popular around you"
            items={filteredPopularItems}
            listType={ImageListType.CAROUSEL} />
          <ImageList
            theme={theme} 
            header="Featured"
            items={featuredItems}
            listType={ImageListType.FIXED} />
        </Panel>
      </div>
    </div>
  );
}

export default Main;
