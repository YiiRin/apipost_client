import React from 'react'
import ButtonTest from 'components/Button/Button.test'
import './service/proxy.test'
import ToggleButtonTest from 'components/ToggleButton/index.test'
import Input from 'components/Input'

const App: React.FC<{}> = (props) => {

    return (
      <>
        <ButtonTest />
        <ToggleButtonTest />
        <Input width={'300px'}/>
      </>

    )
}

export default App