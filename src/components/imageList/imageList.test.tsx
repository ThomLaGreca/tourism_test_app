import React from 'react';

import {render} from '@testing-library/react';

import ImageList from '.';
import { ImageListType } from '../_types';

const testProps = {
    header: 'TEST_HEADER',
    items: [],    
}

test('Image List - Test simple arguments.', () => {
    const { getByText } = render(<ImageList header={testProps.header} items={testProps.items} listType={ImageListType.FIXED} />) 

    getByText(testProps.header);

})