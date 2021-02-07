import React, { useRef } from 'react';
import { CardSize, ImageListProps, ImageListType, Position } from '../_types';
import styles from './imageList.module.css';
import Card from '../card';
import CarouselButton from '../carouselButton';

// The scroll functionality here I feel could have been improved. 
// Mainly with handling the 'MouseDown' event to enable a press-and-hold type of scroll.


// Also I think this component would need to be handled differently.
// The component is reusable for this current case however I think its extension is too heavily reliant on the ListType.
const ImageList: React.FC<ImageListProps> = ({ header, items, listType }) => {

    const cardSize = listType === ImageListType.CAROUSEL ? CardSize.LARGE : CardSize.SMALL;
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
            <header>
                <h2 className={styles.headerText}>{header}</h2>
            </header>

            <div className={`${styles.innerContainer} ${listTypeStyles}`} ref={innerContainerRef}>
                {items && items.map((item, index) => {
                    return <Card key={`${index}_${Math.random}`} imageItem={item} cardSize={cardSize} />
                })}
            </div>

            {listType === ImageListType.CAROUSEL &&
                <>
                    <CarouselButton position={Position.LEFT} onClick={() => handleScroll(-250)} />
                    <CarouselButton position={Position.RIGHT} onClick={() => handleScroll(250)} />
                </>
            }
        </div >
    )

}

export default ImageList;
