import { IoShareOutline } from 'react-icons/io5';
import {lightTheme, darkTheme} from '../../constants/themeConstants';
import { AppContextProps } from '../../contexts/appContext';

export function useTheme(context: AppContextProps): [toggleDarkTheme: () => void] {

    // In reality this would be handled via some server stored user settings or using localStorage.

    const toggleDarkTheme = () => {
        let theme = context.theme;
        if(theme.name === lightTheme.name){
            context.setTheme(darkTheme)
        } else{
            context.setTheme(lightTheme)
        }
    }

    return [toggleDarkTheme]

}
