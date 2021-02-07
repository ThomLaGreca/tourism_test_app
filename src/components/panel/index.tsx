import React from 'react';
import styles from './panel.module.css';

const Panel: React.FC<{}> = ({children}) => {
    return (
        <div className={`${styles.container} ${styles.lightTheme}`}>
          {children}
        </div>
    )

}

export default Panel;