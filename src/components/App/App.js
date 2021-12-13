import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Quiz from '../Quiz/Quiz/Quiz'
import Result from '../Result/Result'

function App () {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-center row'>
        <div className='col-10 text-center'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/quiz' element={<Quiz />} />
            <Route exact path='/result' element={<Result />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
