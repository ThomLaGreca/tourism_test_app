import {
    renderHook
} from '@testing-library/react-hooks';
import { IImageItem } from '../_types/interface';
import { useFilterOnSearchTerm } from './useFilterOnSearchTerm';

const testingItems: IImageItem[] = [
    {
        title: 'T',
        location: 'TEST',
        img: 'TEST'
    },
    {
        title: 'TE',
        location: 'TEST',
        img: 'TEST'
    },
    {
        title: 'TES',
        location: 'TEST',
        img: 'TEST'
    },
    {
        title: 'TEST',
        location: 'TEST',
        img: 'TEST'
    },
    {
        title: 'TESTING',
        location: 'TEST',
        img: 'TEST'
    }
]

test('Items are filtered correctly on Search Term', () => {

    let { result } = renderHook(() => useFilterOnSearchTerm(testingItems, 'TEST'))

    let [filteredResults] = result.current;

    expect(filteredResults).toEqual([
        {
            title: 'TEST',
            location: 'TEST',
            img: 'TEST'
        },
        {
            title: 'TESTING',
            location: 'TEST',
            img: 'TEST'
        }
    ]);  
})

test('Items are filtered correctly on missing Search Term', () => {

    let { result } = renderHook(() => useFilterOnSearchTerm(testingItems, ''))

    let [filteredResults] = result.current;

    expect(filteredResults).toEqual(filteredResults);   
})

test('Items are filtered correctly on unmatched Search Term', () => {

    let { result } = renderHook(() => useFilterOnSearchTerm(testingItems, 'TESTING_FAIL'))

    let [filteredResults] = result.current;

    expect(filteredResults).toEqual([]);   
})


