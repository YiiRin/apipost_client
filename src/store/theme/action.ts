import {createAction} from 'typesafe-actions'
import {ThemeMode} from '../../assets/theme/index'

/**
 * toggle theme
 */
export const toggleTheme = createAction('TOGGLE_THEME')<ThemeMode>()

