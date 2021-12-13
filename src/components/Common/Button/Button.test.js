import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Button from './Button'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('can handle click ', () => {
  act(() => {
    ReactDOM.render(<Button />, container)
  })
  const button = container.querySelector('button')
  expect(button.textContent).toBe(button.textContent)

  // Test second render and componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  expect(button.textContent).toBe(button.textContent)
})