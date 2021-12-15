import React from 'react'

export default ({ difficulty }) => {
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
