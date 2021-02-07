import React from 'react';
import styles from './carouselButton.module.css';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { CarouselButtonProps, Position } from '../_types';

const CarouselButton: React.FC<CarouselButtonProps> = ({ position, onClick }) => {
    if (position === Position.LEFT) {
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