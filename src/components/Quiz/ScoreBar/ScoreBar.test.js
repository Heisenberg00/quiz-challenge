import React from 'react'
import { shallow } from 'enzyme'
import ScoreBar from './ScoreBar'

describe('Should render and display the right score in the score bar', () => {
  const score = { min: 50, current: 67, max: 75 }

  const wrapper = shallow(<ScoreBar score={score} />)
  it('should visible to the user', () => {
    expect(wrapper).toBeTruthy()
  })
  it('should display the max score', () => {
    expect(wrapper.text().includes('Score: 75%')).toBe(true)
  })

  it('should display the current score', () => {
    expect(wrapper.text().includes('Score: 67%')).toBe(true)
  })

  it('should display the current , lowest and the maximum score in the Score bar', () => {
    expect(wrapper.find('.bg-dark').prop('style')).toHaveProperty('width', '50%')
    expect(wrapper.find('.bg-secondary').prop('style')).toHaveProperty('width', '17%')
    expect(wrapper.find('.bg-light').prop('style')).toHaveProperty('width', '8%')
  })

})
