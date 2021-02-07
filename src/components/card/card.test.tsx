import React from 'react';

import {render} from '@testing-library/react';

import Card from '.';
import { CardSize } from '../_types';

const testProps = {
    imageItem: {
        title: 'TEST_TITLE',
        location: 'TEST_LOCATION',
        img: '',
    }

}

test('Card - Simple props are rendered successfully.', () => {
    const { getByText } = render(<Card imageItem={testProps.imageItem} cardSize={CardSize.LARGE}/>) 

    getByText(testProps.imageItem.title);
    getByText(testProps.imageItem.location);

})