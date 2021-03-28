import React from 'react'
import { Switch, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage'
import AboutPage  from './Pages/AboutPage/AboutPage'
function routes() {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/about' component={AboutPage}></Route>
        </Switch>
    )
}

export default routes
