type ThemeMode = 'light' | 'dark'
export interface Theme {
  mode: ThemeMode
}
/**
 * light theme object
 */
export const lightTheme: Theme = {
  mode: 'light',
}

/**
 * dark theme object
 */
export const darkTheme: Theme = {
  mode: 'dark',
}
