import React from 'react'
import ProgressBar from './ProgressBar'
import { configure, mount } from 'enzyme'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'

let container
configure({ adapter: new ReactSixteenAdapter() })

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('should fill the progress bar by 80% on question 16/20.', () => {
  const wrapper = mount(<ProgressBar progress={16 / 20} />)
  expect(wrapper.find('.progress-bar').prop('style')).toHaveProperty('width', '80%')
})