import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { StoreProvider } from 'services/store'
import MainView from 'views/MainView'

const App: React.FC = () => {
  return (
    <StoreProvider>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainView} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
