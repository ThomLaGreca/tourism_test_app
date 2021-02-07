import React, { useState } from 'react';
import { ICard } from '../_types/interface';
import styles from './card.module.css';
import { IoLocationSharp } from 'react-icons/io5';
import LoaderSpinner from '../loading';
import { CardSizeType } from '../_types/enum';

const Card: React.FC<ICard> = ({ imageItem, cardSize, theme }) => {

    const [imageLoaded, setImageLoaded] = useState<Boolean>(false);

    const getImageSize = () => {
        return cardSize === CardSizeType.SMALL
            ? styles.containerSmall
            : styles.containerLarge
    }

    return (
        <div className={styles.containerLight} style={{ 
             border: `3px ${theme.values.background} solid`
        }}>
            <div className={getImageSize()}>
                <img
                    style={{ display: imageLoaded ? 'initial' : 'none'}}
                    onLoad={() => setImageLoaded(true)}
                    className={styles.image}
                    src={imageItem.img}
                    alt={imageItem.title} />
                {!imageLoaded && <LoaderSpinner />}

            </div>

            <div className={styles.footer} style={{ backgroundColor: theme.values.background }}>
                <h3 className={styles.title} style={{color: theme.values.fontPrimary}}>{imageItem.title}</h3>
                <div className={styles.location}>
                    <IoLocationSharp color={'var(--colors-font-secondary)'} size={12} />
                    <p style={{color: theme.values.fontSecondary}}>{imageItem.location}</p>
                </div>

            </div>
        </div>
    )
}



export default Card;
