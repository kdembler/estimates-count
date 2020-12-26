import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import ValueDisplay from 'components/ValueDisplay'
import { useStore } from 'services/store'

const MainView: React.FC = () => {
  const { value, setValue } = useStore()

  const handleToggleValue = () => {
    setValue(!value)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">App Title</Typography>
        </Toolbar>
      </AppBar>
      <ViewWrapper>
        <ValueDisplay />
        <Button onClick={handleToggleValue} variant="contained" color="primary">
          Toggle
        </Button>
      </ViewWrapper>
    </>
  )
}

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
`

export default MainView
