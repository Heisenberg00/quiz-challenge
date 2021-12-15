import React from 'react'
import FeedBack from './FeedBack'
import { shallow } from 'enzyme'

describe('Should render and display the right feedback', () => {

  it('should visible to the user', () => {
    const wrapper = shallow(<FeedBack result={true}/>)
    expect(wrapper).toBeTruthy()
  })

  it('should display Correct ! on right answer', () => {
    const wrapper = shallow(<FeedBack result={true}/>)
    expect(wrapper.text()).toEqual('Correct !')
  })

  it('should display Sorry ! on wrong answer', () => {
    const wrapper = shallow(<FeedBack result={false}/>)
    expect(wrapper.text()).toEqual('Sorry !')
  })

})
