import { useState } from 'react';
import { useEffect } from 'react';
import { ImageItem } from '../_types';

export function useFilterOnSearchTerm(items: ImageItem[], searchTerm: string): [filteredItems: ImageItem[]] {

    const [filteredItems, setFilteredItems] = useState(items)

    useEffect(() => {
        const filteredResult = items.filter(t => {
            return t.title.toLowerCase().search(searchTerm.toLowerCase()) !== -1
        })
        setFilteredItems(filteredResult);
    }, [searchTerm, items])


    return [filteredItems]

}
