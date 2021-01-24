import { _545b62_adb5bd, _7e7e7e_141414 } from 'assets/theme/color'
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  min-width: 1480px;
  height: 100vh;
  color: ${_545b62_adb5bd};
  background-color: ${_7e7e7e_141414};
`

export const Container = styled.div`
  .small-tip {
    margin-bottom: 1em;
  }

  .remem-pwd {
    margin-bottom: 10px;
    font-size: 12px;
    input[type='checkbox'] {
      vertical-align: middle;
      margin-right: 4px;
    }
    label {
      margin: 0;
      color: ${_545b62_adb5bd};
    }
  }
`

export const StyledForm = styled.form`
  .form-item {
    margin-bottom: 1.5em;
  }
`
