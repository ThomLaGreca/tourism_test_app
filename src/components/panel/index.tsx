import React, { useContext } from 'react';
import { AppContext, AppContextProps } from '../../contexts/appContext';
import styles from './panel.module.css';

// Incomplete dark mode based on time. 

const Panel: React.FC = ({children}) => {

  const {theme} = useContext(AppContext) as AppContextProps

    return (
        <div className={styles.container} style={{ backgroundColor: theme.values.panel }}>
          {children}
        </div>
    )

}

export default Panel;