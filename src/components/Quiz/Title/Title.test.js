import React from 'react'
import { shallow, render } from 'enzyme'
import Title  from './Title'


describe('Question position with the category', () => {

  const difficulty = 'hard'
  const position = 1
  const totalQuestions = 20
  const category = 'Entertainment%3A%20Video%20Games'


  const wrapper = shallow(
    <Title position={position}
           totalQuestions={totalQuestions}
           difficulty={difficulty}
           category={category}
    />)

  it('should display the position of the question', () => {
    expect(wrapper.find('h1').text()).toEqual('Question 1 of 20')
  })

  it('should decode and render category name', () => {
    expect(wrapper.find('.text-muted').text()).toEqual('Entertainment: Video Games')
  })

})
