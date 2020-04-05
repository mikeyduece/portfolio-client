// Dependencies
import React       from 'react'
import ReactDOM    from 'react-dom'
import {
  Router,
  Route
}                  from 'react-router-dom'
import history     from './history'
// Components
import Root        from 'Root'
import App         from 'components/App/App'
import About       from 'components/About/About'
import ProjectList from 'components/Projects/ProjectList/ProjectList'
import ContactMe   from 'components/ContactMe/ContactMe'

ReactDOM.render(
  <Root>
    <Router history={ history }>
      <Route exact path='/' component={ App } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/projects' component={ ProjectList } />
      <Route exact path='/contact-me' component={ ContactMe } />
    </Router>
  </Root>,
  document.querySelector('#root')
)