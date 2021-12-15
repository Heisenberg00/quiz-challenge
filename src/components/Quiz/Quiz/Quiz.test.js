import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Quiz from './Quiz'

let wrapper

beforeEach(() => {

  wrapper = render(
    <BrowserRouter initialEntries={['/quiz']}>
      <Quiz/>
    </BrowserRouter>
  )

})

describe('Quiz Progression', () => {

  it('should render Quiz', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should increase progression on next question', () => {

    expect(wrapper.getByTestId('progress-bar')).toHaveStyle('width :5%')

    const answerChose = wrapper.getByTestId('1answer')
    fireEvent.click(answerChose)

    const nextButton = wrapper.queryByText('Next Question')
    fireEvent.click(nextButton)

    expect(wrapper.getByTestId('progress-bar')).toHaveStyle('width :10%')

  })


  it('should increase current score on correct answer (max and min score remain the same)', () => {

    expect(wrapper.getByTestId('current-score-bar')).toHaveStyle('width :0%')
    expect(wrapper.getByTestId('max-score-bar')).toHaveStyle('width :100%')
    expect(wrapper.getByTestId('min-score-bar')).toHaveStyle('width :0%')

    const answerChose = wrapper.getByText('Dirk the Daring')
    fireEvent.click(answerChose)

    const nextButton = wrapper.queryByText('Next Question')
    fireEvent.click(nextButton)

    expect(wrapper.getByTestId('current-score-bar')).toHaveStyle('width :95%')
    expect(wrapper.getByTestId('max-score-bar')).toHaveStyle('width :0%')
    expect(wrapper.getByTestId('min-score-bar')).toHaveStyle('width :5%')

  })

  it('should decrease max score on correct answer (current and min score remain the same)', () => {

    expect(wrapper.getByTestId('max-score-bar')).toHaveStyle('width :100%')
    expect(wrapper.getByTestId('current-score-bar')).toHaveStyle('width :0%')
    expect(wrapper.getByTestId('min-score-bar')).toHaveStyle('width :0%')

    const answerChose = wrapper.getByText('Arthur')
    fireEvent.click(answerChose)

    const nextButton = wrapper.queryByText('Next Question')
    fireEvent.click(nextButton)

    expect(wrapper.getByTestId('max-score-bar')).toHaveStyle('width :95%')
    expect(wrapper.getByTestId('current-score-bar')).toHaveStyle('width :0%')
    expect(wrapper.getByTestId('min-score-bar')).toHaveStyle('width :0%')

  })







})
