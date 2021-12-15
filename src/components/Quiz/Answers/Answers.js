import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import './Answers.css'
import { combineAnswers } from '../../../utils/arrayHelper'

const Answers = forwardRef((props, ref) => {
  const [answerOptions, setAnswerOptions] = useState([])
  const [selected, setSelected] = useState({})
  const [isDisabled, setIsDisabled] = useState(false)
  const [flag, setFlag] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      onNextQuestion () {
        setIsDisabled(false)
        setSelected({})
        setFlag(!flag)
      }
    })
  )

  useEffect(() => {
    setAnswerOptions(combineAnswers(props.wrong, props.correct))
  }, [flag])

  const handleClick = (answer) => {
    props.isCorrect(answer.correct)
    setSelected(answer)
    setIsDisabled(true)
    answer.correct
      ? props.setNbrOfCorrectAnswers(prev => prev + 1)
      : props.setNbrOfInCorrectAnswers(prev => prev + 1)
  }

  const answerButtonClass = (answer) => {
    if (selected.value) {
      return answer.correct
        ? 'btn-dark'
        : answer.value === selected.value ? 'btn-outline-dark' : ''
    }
  }

  return (
    <div className='row answerOptions mb-3'>
      {answerOptions.map((answer, i) => (
        <div key={i.toString()} className='col-6 p-2'>
          <button
            data-testid={ i + "answer"}
            disabled={isDisabled}
            onClick={() => handleClick(answer)}
            className={answerButtonClass(answer) + ' btn col'}>
            {decodeURIComponent(answer.value)}
          </button>
        </div>
      ))}
    </div>
  )
})

export default Answers
