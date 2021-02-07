import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './loaderSpinner.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner: React.FC = () => {
    return (
        <div className={styles.container}>
            <Loader
                type="Rings" 
                color="var(--colors-dark)" 
                height={80}
            />
        </div>
    )
}

export default LoaderSpinner;