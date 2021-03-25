import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/homepage'
import LoginPage from '../pages/loginpage'
import { AnimatePresence } from 'framer-motion'

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/homepage">
          <HomePage />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

export default Routes
