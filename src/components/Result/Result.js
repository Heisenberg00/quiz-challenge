import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default () => {
  const location = useLocation()
  const score = location.state ? location.state.score.current : 0
  return (
    <div>
      <h1>Final score: {Math.round(score)} %</h1>
      <Link to='/quiz'>Take the quiz again</Link>
    </div>
  )
}
