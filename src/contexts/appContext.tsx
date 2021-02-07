import React, { createContext, ReactNode, useState } from 'react';
import { IImageItem, ITheme } from '../components/_types/interface';
import { lightTheme } from '../constants/themeConstants';


export interface AppContextProps {
    popularItems: IImageItem[],
    setPopularItems: (items: IImageItem[]) => void,
    featuredItems: IImageItem[],
    setFeaturedItems: (items: IImageItem[]) => void,
    searchTerm: string,
    setSearchTerm: (searchTerm: string) => void,
    theme: ITheme,
    setTheme: (theme: ITheme) => void 
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider: React.FC<ReactNode> = ({ children }) => {

    const [popularItems, setPopularItems] = useState<IImageItem[]>([]);
    const [featuredItems, setFeaturedItems] = useState<IImageItem[]>([]); 
    const [searchTerm, setSearchTerm]  = useState<string>('');
    const [theme, setTheme] = useState<ITheme>(lightTheme);

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
