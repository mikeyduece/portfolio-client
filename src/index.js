// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route
}               from 'react-router-dom'
import {
  spring,
  AnimatedRoute
}               from 'react-router-transition'
import history  from './history'
// Components
import Root     from 'Root'
import App      from 'components/App/App'
import About    from 'components/About/About'

ReactDOM.render(
  <Root>
    <Router history={ history }>
      <AnimatedRoute
        atEnter={{ offset: -100 }}
        atLeave={{ offset: -100 }}
        atActive={{ offset: 0 }}
        mapStyles={(styles) => ({
          transform: `translateY(${styles.offset}%)`,
        })}
        className="route-wrapper"
        exact path='/' component={ App }
      />
      <AnimatedRoute
        atEnter={{ offset: -100 }}
        atLeave={{ offset: -100 }}
        atActive={{ offset: 0 }}
        mapStyles={(styles) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
        className="route-wrapper"
        exact path='/about' component={ About }
      />
    </Router>
  </Root>,
  document.querySelector('#root')
)