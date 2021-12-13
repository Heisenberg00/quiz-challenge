import React, { useEffect, useRef, useState } from 'react'
import questions from '../../../data/questions.json'
import Title from '../Title/Title'
import Answers from '../Answers/Answers'
import FeedBack from '../FeedBack/FeedBack'
import Button from '../../Common/Button/Button'
import { useNavigate } from 'react-router-dom'

export default ({ setProgress, setScore, score }) => {
  const [position, setPosition] = useState(1)
  const [question, setQuestion] = useState(questions[0])
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(undefined)
  const [nbrOfCorrectAnswers, setNbrOfCorrectAnswers] = useState(0)
  const [nbrOfInCorrectAnswers, setNbrOfInCorrectAnswers] = useState(0)

  const answerRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    setProgress(position / questions.length)
  })

  const calcScore = () => {
    setScore({
      max: ((questions.length - nbrOfInCorrectAnswers) / questions.length) * 100,
      current: (nbrOfCorrectAnswers / position) * 100,
      min: (nbrOfCorrectAnswers / questions.length) * 100
    })
  }

  const nextQuestion = () => {
    if (position === questions.length) return navigate('/result', { state: { score } })
    setPosition(prevState => prevState + 1)
    setQuestion(questions[position])
    setIsCorrectAnswer(undefined)
    answerRef.current.onNextQuestion()
    calcScore()
  }

  return (
    <div className='container'>
      <Title
        position={position}
        totalQuestions={questions.length}
        difficulty={question.difficulty}
        category={question.category}
      />
      <div className='mb-5'>
        {decodeURIComponent(question.question)}
      </div>
      <Answers
        correct={question.correct_answer}
        wrong={question.incorrect_answers}
        isCorrect={setIsCorrectAnswer}
        setNbrOfInCorrectAnswers={setNbrOfInCorrectAnswers}
        setNbrOfCorrectAnswers={setNbrOfCorrectAnswers}
        ref={answerRef}
      />
      {isCorrectAnswer !== undefined &&
      <>
        <FeedBack result={isCorrectAnswer} />
        <Button
          classes='btn-outline-dark'
          label={questions.length !== position ? 'Next Question' : 'Finish'}
          handleClick={nextQuestion}
        />
      </>
      }
    </div>
  )
}
