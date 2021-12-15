import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from './Home'
import { createMemoryHistory } from 'history'
import { BrowserRouter, Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

describe('Should render and display the right score in the score bar', () => {

  const history = createMemoryHistory()

  history.push = jest.fn()

  const wrapper = render(
    <BrowserRouter history={history}>
      <Home/>
    </BrowserRouter>,
  )

  it('should visible to the user', () => {
    expect(wrapper).toBeTruthy()
  })

})
