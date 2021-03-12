import { FC } from 'react'
import { AppStyled } from './AppStyled'
import HomeTemplate from './templates/home/home'

const App: FC = () => (
  <AppStyled.ContainerApp>
    <HomeTemplate />
  </AppStyled.ContainerApp>
)

export default App;