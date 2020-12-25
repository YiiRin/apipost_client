export type ThemeMode = 'light' | 'dark'
export interface Theme {
  mode: ThemeMode
}
/**
 * light theme object
 */
const lightTheme: Theme = {
  mode: 'light',
}

/**
 * dark theme object
 */
const darkTheme: Theme = {
  mode: 'dark',
}

const themeObj = {
  light: lightTheme,
  dark: darkTheme
}

export default themeObj 
