import { createGlobalStyle } from 'styled-components'
import AlexaStdOTF from '../fonts/AlexaStd.otf'
import AlexaStdSVG from '../fonts/AlexaStd.svg'
import AlexaStdWOFF from '../fonts/AlexaStd.woff'
import AlexaStdWOFF2 from '../fonts/AlexaStd.woff2'
import AlexaStdTTF from '../fonts/AlexaStd.ttf'

export const AlEXA_STD_FONT_NAME = 'alexa_std'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: ${AlEXA_STD_FONT_NAME};
        src: url(${AlexaStdWOFF2}) format('woff2'),
             url(${AlexaStdWOFF}) format('woff'),
             url(${AlexaStdOTF}) format('opentype'),
             url(${AlexaStdTTF}) format('truetype'),
             url(${AlexaStdSVG}) format('svg');
    }

`
