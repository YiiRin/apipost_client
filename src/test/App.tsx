import Tab from 'components/Tab'
import TabControl from 'components/Tab/TabControl'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { themeModeSelector } from 'store/theme/selector'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { useEffect } from 'react'

const Container = styled.div`
  .tab-control {
    width: 600px;
    margin: 10vh auto;
    background-color: skyblue;

    .title-container {
      display: flex;

      .tab-title {
        padding: 0.5em 0.75em;
        cursor: pointer;
        margin-right: 1em;
      }

      .tab-title.active-tab {
        background-color: #ee6a5e;
      }
    }

    .content-container {
      .tab-content {
        height: 500px;
        background-color: pink;
        display: none;
      }

      .tab-content.show {
        display: block;
      }
    }
  }
`

const App: React.FC<{}> = () => {
  const themeMode = useSelector(themeModeSelector)
  const [currentIndex, setCurrentIndex] = useState('1')

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <TabControl currentIndex={currentIndex}>
          <Tab
            index="1"
            currentIndex="1"
            render={() => <div>你好</div>}
            onClick={() => {
              console.log('点我一下')
            }}
          >
            真好1
          </Tab>
          <Tab index="2" currentIndex="1" render={() => <div>你不大好</div>}>
            真好2
          </Tab>
        </TabControl>
      </Container>
    </ThemeProvider>
  )
}

export default App
