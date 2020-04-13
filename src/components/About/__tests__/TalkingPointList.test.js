import React from 'react'
import {mount} from 'enzyme'

import TalkingPointList from '../TalkingPoint/TalkingPointList'

let component
beforeEach(() => component = mount(<TalkingPointList/>))
afterEach(() => component.unmount())

it('should render a TalkingPointList component', () => {
  expect(component.find('.hexagon').length).toEqual(3)
})