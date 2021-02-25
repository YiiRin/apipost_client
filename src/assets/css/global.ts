import { createGlobalStyle } from 'styled-components'
import AlexaStdOTF from '../fonts/alexa_std/AlexaStd.otf'
import AlexaStdSVG from '../fonts/alexa_std/AlexaStd.svg'
import AlexaStdWOFF from '../fonts/alexa_std/AlexaStd.woff'
import AlexaStdWOFF2 from '../fonts/alexa_std/AlexaStd.woff2'
import AlexaStdTTF from '../fonts/alexa_std/AlexaStd.ttf'

import AGPRTTF from '../fonts/adobe_garamond_pro/agpr.ttf'
import AGPRSVG from '../fonts/adobe_garamond_pro/agpr.svg'
import AGPRWOFF from '../fonts/adobe_garamond_pro/agpr.woff'
import AGPRWOFF2 from '../fonts/adobe_garamond_pro/agpr.woff2'
import AGPROTF from '../fonts/adobe_garamond_pro/agpr.otf'

export const AlEXA_STD_FONT_NAME = 'alexa_std'
export const ADOBE_GARAMOND_PRO_FONT_NAME = 'adobe_garamond_pro'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${AlEXA_STD_FONT_NAME};
    src: url(${AlexaStdWOFF2}) format('woff2'),
          url(${AlexaStdWOFF}) format('woff'),
          url(${AlexaStdOTF}) format('opentype'),
          url(${AlexaStdTTF}) format('truetype'),
          url(${AlexaStdSVG}) format('svg');
  }

  @font-face {
    font-family: ${ADOBE_GARAMOND_PRO_FONT_NAME};
    src: url(${AGPRWOFF2}) format('woff2'),
          url(${AGPRWOFF}) format('woff'),
          url(${AGPROTF}) format('opentype'),
          url(${AGPRTTF}) format('truetype'),
          url(${AGPRSVG}) format('svg');
  }

  html, body {
    overflow:hidden;
  }

`
