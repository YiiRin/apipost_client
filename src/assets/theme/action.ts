import {createAction} from 'typesafe-actions'
import {ThemeMode} from './index'

/**
 * toggle theme
 */
export const toggleTheme = createAction('TOGGLE_THEME')<ThemeMode>()

