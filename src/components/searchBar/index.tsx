import React, { useContext } from 'react';
import { AppContext, AppContextProps } from '../../contexts/appContext';
import styles from './searchBar.module.css';

const SearchBar: React.FC<{}> = () => {

    const context = useContext(AppContext) as AppContextProps;

    return (
        <div className={styles.container}>
            <input
                value={context.searchTerm}
                onChange={(e) => context.setSearchTerm(e.target.value)}
                placeholder="Search for..."
                alt="search field"
                type="search"
                className={styles.searchInput}
            />
        </div>)
}

export default SearchBar;


