import React, { createContext, ReactNode, useState } from 'react';
import { ImageItem, ThemeType } from '../components/_types';
import { lightTheme } from '../constants/themeConstants';


export interface AppContextProps {
    popularItems: ImageItem[],
    setPopularItems: (items: ImageItem[]) => void,
    featuredItems: ImageItem[],
    setFeaturedItems: (items: ImageItem[]) => void,
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void,
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void 
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider: React.FC<ReactNode> = ({ children }) => {

    const [popularItems, setPopularItems] = useState<ImageItem[]>([]);
    const [featuredItems, setFeaturedItems] = useState<ImageItem[]>([]); 
    const [searchTerm, setSearchTerm]  = useState<string>('');
    const [theme, setTheme] = useState<ThemeType>(lightTheme);

    return (
        <AppContext.Provider value={{
            popularItems,
            setPopularItems,
            featuredItems,
            setFeaturedItems,
            searchTerm,
            setSearchTerm,
            theme,
            setTheme
        }}>
            {children}
        </AppContext.Provider>

    );

};
