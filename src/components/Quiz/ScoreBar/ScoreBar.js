import React from 'react'

export default ({ score }) => {
  const currentScore = score.current - score.min
  const maxScore = score.max - score.current
  const minScore = score.min

  return (
    <div className='container fixed-bottom my-5'>
      <div className='d-flex justify-content-center row'>
        <div className='col-10'>
          <div className='d-flex justify-content-between'>
            <div>Score: {Math.round(score.current)}%</div>
            <div>Max Score: {Math.round(score.max)}%</div>
          </div>
          <div style={{ height: '30px' }} className='progress'>
            <div
              className='progress-bar bg-dark'
              style={{ width: minScore + '%' }}
            />
            <div
              className='progress-bar bg-secondary'
              style={{ width: currentScore + '%' }}
            />
            <div
              className='progress-bar bg-light'
              style={{ width: maxScore + '%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
