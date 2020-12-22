/**
 * Copyright © 2020 Iliya_Rin. All rights reserved.
 *
 * @author Iliya_Rin
 * @since  2020-12-22 17:13
 */

import { FC } from 'react'
import Button from '.'

interface Props {}

const ButtonTest: FC<Readonly<Props>> = (props) => {
  const handleClick = () => {
    console.log('button has been clicked')
  }
  return (
    <>
      <Button
        style={{
          color: 'black',
        }}
        btnType="link"
        onClick={handleClick}
        disabled={true}
        block={false}
      >
        这是个普通按钮
      </Button>

      <Button onClick={handleClick} block={true} disabled={true}>
        这还是一个普通按钮
      </Button>
    </>
  )
}

export default ButtonTest
