import React from 'react'
import {shallow} from 'enzyme'

import App     from '../App'
import Welcome from '../../Welcome/Welcome'

let component
beforeEach(() => component = shallow(<App/>))

it('should render a Welcome component', () => {
  expect(component.find(Welcome).length).toEqual(1)
})