import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import Question from './Question'
import { BrowserRouter } from 'react-router-dom'

let wrapper
let setProgressMock, setScoreMock, firstQuestion, secondQuestion

beforeEach(() => {

  const score = {
    max: 100,
    current: 0,
    min: 0
  }

  firstQuestion = 'What was the name of the hero in the 80s animated video game \'Dragon\'s Lair\'?'
  secondQuestion = 'What is the scientific name for modern day humans?'

  setProgressMock = jest.fn()
  setScoreMock = jest.fn()

  wrapper = render(
    <BrowserRouter initialEntries={['/quiz']}>
      <Question setProgress={setProgressMock} setScore={setScoreMock} score={score}/>
    </BrowserRouter>
  )

})

describe('Display Questions', () => {

  it('should render component and display first question', () => {
    expect(wrapper.getByText(firstQuestion)).toBeInTheDocument()
    expect(wrapper.queryByText('Next Question')).not.toBeInTheDocument()
  })

  it('should answer and display the feedBack and button "Next Question"', function () {
    const answerChose = wrapper.getByTestId('1answer')
    fireEvent.click(answerChose)
    expect(wrapper.getByText(firstQuestion)).toBeInTheDocument()
    expect(wrapper.queryByText('Next Question')).toBeInTheDocument()
    expect(wrapper.queryByText('Sorry !') || wrapper.queryByText('Correct !')).toBeInTheDocument()
  })

  it('should click in Next question and go to the second question', () => {
    const answerChose = wrapper.getByTestId('1answer')
    fireEvent.click(answerChose)

    const nextButton = wrapper.queryByText('Next Question')
    fireEvent.click(nextButton)
    expect(wrapper.queryByText(firstQuestion)).not.toBeInTheDocument()
    expect(wrapper.getByText(secondQuestion)).toBeInTheDocument()
    expect(wrapper.queryByText('Next Question')).not.toBeInTheDocument()
  })

  it('should increment the position of the question', function () {
    const answerChose = wrapper.getByTestId('1answer')
    fireEvent.click(answerChose)

    const nextButton = wrapper.queryByText('Next Question')
    fireEvent.click(nextButton)

    expect(wrapper.queryByText('Question 2 of 20')).toBeInTheDocument()
  })

  it('should display Correct ! on correct answer', () => {
    const answerChose = wrapper.getByText('Dirk the Daring')
    fireEvent.click(answerChose)
    expect(wrapper.queryByText('Correct !')).toBeInTheDocument()
  })

  it('should display Sorry ! on incorrect answer', () => {
    const answerChose = wrapper.getByText('Arthur')
    fireEvent.click(answerChose)
    expect(wrapper.queryByText('Sorry !')).toBeInTheDocument()
  })

  it('should disable answer options on answer',  () => {
    const answerChose = wrapper.getByTestId('1answer')
    fireEvent.click(answerChose)

    expect(wrapper.getByText('Arthur').closest('button')).toHaveAttribute('disabled');
    expect(wrapper.getByText('Dirk the Daring').closest('button')).toHaveAttribute('disabled');
    expect(wrapper.getByText('Sir Toby Belch').closest('button')).toHaveAttribute('disabled');
    expect(wrapper.getByText('Guy of Gisbourne').closest('button')).toHaveAttribute('disabled');

  })

  it('should display the chosen button in black on correct answer ',  () => {
    const answerChose = wrapper.getByText('Dirk the Daring')
    fireEvent.click(answerChose)

    expect(wrapper.getByText('Dirk the Daring').closest('button')).toHaveClass('btn-dark');

  })

  it('should display the chosen button in white and correct answer in black on wrong answer ',  () => {
    const answerChose = wrapper.getByText('Arthur')
    fireEvent.click(answerChose)

    expect(wrapper.getByText('Arthur').closest('button')).toHaveClass('btn-outline-dark');
    expect(wrapper.getByText('Dirk the Daring').closest('button')).toHaveClass('btn-dark');

  })

  it('should click on Next Question and hide feedback and next button', function () {
    const answerChose = wrapper.getByTestId('1answer')
    fireEvent.click(answerChose)

    const nextButton = wrapper.queryByText('Next Question')
    fireEvent.click(nextButton)

    expect(wrapper.queryByText('Next Question')).not.toBeInTheDocument()
    expect(wrapper.queryByText('Sorry !')).not.toBeInTheDocument()
    expect(wrapper.queryByText('Sorry !')).not.toBeInTheDocument()
  })



})
