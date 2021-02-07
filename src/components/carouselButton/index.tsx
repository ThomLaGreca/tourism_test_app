import React from 'react';
import styles from './carouselButton.module.css';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { ICarouselButton } from '../_types/interface';
import { PositionType } from '../_types/enum';

// The styling of this component is not quite right as per the brief but was left as is for the sake of time.

const CarouselButton: React.FC<ICarouselButton> = ({ position, onClick }) => {
    if (position === PositionType.LEFT) {
        return (
            <button className={`${styles.container} ${styles.left}`} onClick={onClick}>
                <BsChevronLeft size={40} color="#444"/>
            </button>
        )
    } else {
        return (
            <button className={`${styles.container} ${styles.right}`} onClick={onClick}>
                <BsChevronRight size={40} color="#444"/>
            </button>
        )
    }

}

export default CarouselButton;