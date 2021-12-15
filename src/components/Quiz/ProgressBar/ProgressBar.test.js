import React from 'react'
import ProgressBar from './ProgressBar'
import { shallow } from 'enzyme'

describe('Should render and display the right progression', () => {

  const wrapper = shallow(<ProgressBar progress={16 / 20} />)
  it('should be in the document', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should fill the progress bar by 80% on question 16/20.', () => {
    expect(wrapper.find('.progress-bar').prop('style')).toHaveProperty('width', '80%')
  })

})
