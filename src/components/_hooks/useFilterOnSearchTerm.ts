import { useState } from 'react';
import { useEffect } from 'react';
import { IImageItem } from '../_types/interface';

export function useFilterOnSearchTerm(items: IImageItem[], searchTerm: string): [filteredItems: IImageItem[]] {

    const [filteredItems, setFilteredItems] = useState(items)

    useEffect(() => {
        const filteredResult = items.filter(t => {
            return t.title.toLowerCase().search(searchTerm.toLowerCase()) !== -1
        })
        setFilteredItems(filteredResult);
    }, [searchTerm, items])


    return [filteredItems]

}
