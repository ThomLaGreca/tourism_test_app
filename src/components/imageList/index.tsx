import React, { useContext, useRef } from 'react';
import { IImageList } from '../_types/interface';
import styles from './imageList.module.css';
import Card from '../card';
import CarouselButton from '../carouselButton';
import { CardSizeType, ImageListType, PositionType } from '../_types/enum';
import { AppContext, AppContextProps } from '../../contexts/appContext';

// The scroll functionality here I feel could have been improved. 
// Mainly with handling the 'MouseDown' event to enable a press-and-hold type of scroll.


// Also I think this component would need to be handled differently.
// The component is reusable for this current case however I think its extension is too heavily reliant on the ListType.


// The key on the items.map() function is technically not unique. Another time choice.

const ImageList: React.FC<IImageList> = ({ header, items, listType }) => {

    const {theme} = useContext(AppContext) as AppContextProps;

    const cardSize = listType === ImageListType.CAROUSEL ? CardSizeType.LARGE : CardSizeType.SMALL;

    const listTypeStyles = listType === ImageListType.CAROUSEL ? styles.carousel : styles.fixed;
    
    const innerContainerRef = useRef<HTMLDivElement>(null);
    const handleScroll = (scrollValue: number) => {
        if (innerContainerRef && innerContainerRef.current) {
            const scrollOptions: ScrollToOptions = {
                left: scrollValue,
                top: 0, 
                behavior: 'smooth'
            }
            innerContainerRef.current.scrollBy(scrollOptions)
        }
    }

    return (
        <div className={`${styles.container} ${styles.lightTheme}`}>
            <header className={styles.header}>
                <h2 className={styles.headerText} style={{ color: theme.values.fontPrimary }}>{header}</h2>
            </header>

            <div className={`${styles.innerContainer} ${listTypeStyles}`} ref={innerContainerRef}>
                {items && items.map((item, index) => {
                    return <Card key={`${index}_${Math.random}`} imageItem={item} cardSize={cardSize} />
                })}
            </div>

            {listType === ImageListType.CAROUSEL &&
                <>
                    <CarouselButton position={PositionType.LEFT} onClick={() => handleScroll(-250)} />
                    <CarouselButton position={PositionType.RIGHT} onClick={() => handleScroll(250)} />
                </>
            }
        </div >
    )

}

export default ImageList;
