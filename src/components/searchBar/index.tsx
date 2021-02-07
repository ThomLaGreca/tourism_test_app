import React, { useContext } from 'react';
import { colors, darkTheme } from '../../constants/themeConstants';
import { AppContext, AppContextProps } from '../../contexts/appContext';
import styles from './searchBar.module.css';

const SearchBar: React.FC = () => {

    const {
        searchTerm,
        setSearchTerm,
        theme
    } = useContext(AppContext) as AppContextProps;

    return (
        <div className={styles.container}>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for..."
                alt="search field"
                type="search"
                className={styles.searchInput}
                style={{
                    background: theme.name === darkTheme.name ? colors.blue : theme.values.panel, 
                    color: theme.values.fontPrimary, 
                    outlineColor: theme.values.fontSecondary
                }}
            />
        </div>)
}

export default SearchBar;


