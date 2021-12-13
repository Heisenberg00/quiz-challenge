import React from 'react'

export default ({ progress }) => {
  const progressBarStyle = {
    width: progress * 100 + '%'
  }

  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-animated bg-secondary progress-bar-striped'
        role='progressbar'
        style={progressBarStyle}
      />
    </div>
  )
}
