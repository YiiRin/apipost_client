import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from './index.style'
import LeftNavHeader from './LeftNavHeader'
import LeftNavTeamList from './LeftNavTeamList'

type Props = {}

const TeamLeftNav: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <LeftNavHeader />
      <Switch>
        <Route path="/team/:type">
          <LeftNavTeamList />
        </Route>
        <Redirect exact from="/team" to="/team/managed" />
      </Switch>
    </Container>
  )
}

export default TeamLeftNav
