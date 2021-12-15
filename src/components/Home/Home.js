import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h1>Outlier Engineering React Quiz Challenge</h1>
      <Link data-testid='goToQuiz' to='/quiz'>Ready Go !</Link>
    </div>
  )
}
