import React from 'react'
import Stars from '../Stars/Stars'

export default ({ difficulty, position, totalQuestions, category }) => {
  return (
    <div className='text-left my-4'>
      <h1>Question {position} of {totalQuestions}</h1>
      <div className='text-muted'>{decodeURIComponent(category)}</div>
      <Stars difficulty={difficulty} />
    </div>
  )
}
