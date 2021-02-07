import React, { useState } from 'react';
import { CardProps, CardSize } from '../_types';
import styles from './card.module.css';
import { IoLocationSharp } from 'react-icons/io5';
import LoaderSpinner from '../loading';

const Card: React.FC<CardProps> = ({ imageItem, cardSize }) => {

    const [imageLoaded, setImageLoaded] = useState<Boolean>(false);

    const getImageSize = () => {
        return cardSize === CardSize.SMALL
            ? styles.containerSmall
            : styles.containerLarge
    }

    return (
        <div className={styles.containerLight}>
            <div className={getImageSize()}>
                <img
                    style={{ display: imageLoaded ? 'initial' : 'none'}}
                    onLoad={() => setImageLoaded(true)}
                    className={styles.image}
                    src={imageItem.img}
                    alt={imageItem.title} />
                {!imageLoaded && <LoaderSpinner />}

            </div>

            <div className={styles.footer}>
                <h3 className={styles.title}>{imageItem.title}</h3>
                <div className={styles.location}>
                    <IoLocationSharp color={'var(--colors-font-secondary)'} size={12} />
                    <p>{imageItem.location}</p>
                </div>

            </div>
        </div>
    )
}



export default Card;
