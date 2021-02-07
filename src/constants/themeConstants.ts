const colors = {
    grey: '#444',
    lightGrey: '#e1e1e1',
    white: '#fff',
    blue: '#2f516d',
    lightBlue: '#899bb2'
}

export const lightTheme = {
    name: "LIGHT_THEME",
    values: {
        fontPrimary: colors.blue,
        fontSecondary: colors.lightBlue,
        background: colors.lightGrey,
        panel: colors.white,
        accent: colors.grey
    }
}

export const darkTheme = {
    name: "DARK_THEME",
    values: {
        fontPrimary: colors.white,
        fontSecondary: colors.lightGrey,
        background: colors.blue,
        panel: colors.lightBlue,
        accent: colors.grey
    }

}
