import React from 'react'
import { shallow } from 'enzyme'
import Stars from './Stars'


describe('Question position with the category and stars based on difficulty', () => {


  it('should display three stars on hard', () => {
    const stars = shallow(<Stars difficulty='hard'/>)
    expect(stars.text()).toEqual("★★★")
  })

  it('should display two stars on medium and one light star', () => {
    const stars = shallow(<Stars difficulty='medium'/>)
    expect(stars.text()).toEqual("★★★")
    expect(stars.find('.text-light').text()).toEqual("★")
  })

  it('should display one star on easy and two light stars', () => {
    const stars = shallow(<Stars difficulty='easy'/>)
    expect(stars.text()).toEqual("★★★")
    expect(stars.find('.text-light').text()).toEqual("★★")
  })

})
