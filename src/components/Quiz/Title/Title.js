import React from 'react'

export default ({ difficulty, position, totalQuestions, category }) => {
  const Stars = ({ difficulty }) => {
    switch (difficulty) {
      case 'hard':
        return <div>★★★</div>
      case 'medium':
        return <div>★★<span className='text-light'>★</span></div>
      case 'easy':
        return <div>★<span className='text-light'>★★</span></div>
      default:
    }
  }

  return (
    <div className='text-left my-4'>
      <h1>Question {position} of {totalQuestions}</h1>
      <div className='text-muted'>{decodeURIComponent(category)}</div>
      <Stars difficulty={difficulty} />
    </div>
  )
}
