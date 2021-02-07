import {lightTheme, darkTheme} from '../../constants/themeConstants';
import { AppContextProps } from '../../contexts/appContext';

// Other than useFilterOnSearchTerm this hook is the only piece of logic that would really require a test.
// Due to time constraints I've left out the test.

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
