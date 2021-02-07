import React from 'react';

import {render} from '@testing-library/react';

import Card from '.';
import { CardSizeType } from '../_types/enum';
import { lightTheme } from '../../constants/themeConstants';

const testProps = {
    imageItem: {
        title: 'TEST_TITLE',
        location: 'TEST_LOCATION',
        img: '',
    }

}

test('Card - Simple props are rendered successfully.', () => {
    const { getByText } = render(<Card imageItem={testProps.imageItem} cardSize={CardSizeType.LARGE} theme={lightTheme}/>) 
    getByText(testProps.imageItem.title);
    getByText(testProps.imageItem.location);

})