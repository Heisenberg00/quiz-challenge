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
            <div data-testid="current-score">Score: {Math.round(score.current)}%</div>
            <div data-testid="max-score">Max Score: {Math.round(score.max)}%</div>
          </div>
          <div style={{ height: '30px' }} className='progress'>
            <div
              data-testid="min-score-bar"
              className='progress-bar bg-dark'
              style={{ width: minScore + '%' }}
            />
            <div
              data-testid="current-score-bar"
              className='progress-bar bg-secondary'
              style={{ width: currentScore + '%' }}
            />
            <div
              data-testid="max-score-bar"
              className='progress-bar bg-light'
              style={{ width: maxScore + '%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
