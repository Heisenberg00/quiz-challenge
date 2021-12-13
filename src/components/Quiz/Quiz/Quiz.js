import React, { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Question from '../Question/Question'
import ScoreBar from '../ScoreBar/ScoreBar'

export default () => {
  const [progress, setProgress] = useState()
  const [score, setScore] = useState({
    max: 100,
    current: 0,
    min: 0
  })

  return (
    <>
      <ProgressBar progress={progress} />
      <Question setProgress={setProgress} setScore={setScore} score={score} />
      <ScoreBar score={score} />
    </>
  )
}