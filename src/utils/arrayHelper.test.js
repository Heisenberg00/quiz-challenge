import React from 'react'
import { combineAnswers } from './arrayHelper'

const correctAnswer = 'Dirk%20the%20Daring'
const wrongAnswers = [
  'Arthur',
  'Sir%20Toby%20Belch',
  'Guy%20of%20Gisbourne'
]

describe('Answer options', () => {

  const answerOptionInOrder = [
    { value: 'Dirk%20the%20Daring', correct: true },
    { value: 'Arthur', correct: false },
    { value: 'Sir%20Toby%20Belch', correct: false },
    { value: 'Guy%20of%20Gisbourne', correct: false }
  ]

  it('Should combine and display answer options randomly', () => {
    const answers = combineAnswers(wrongAnswers, correctAnswer)
    expect(answers.length).toEqual(4)
    expect(answerOptionInOrder).not.toMatchObject(answers)
    expect(answers.filter(answer => answer.value === "Dirk%20the%20Daring")[0].correct).toEqual(true)
    expect(answers.filter(answer => answer.value === "Arthur")[0].correct).toEqual(false)
    expect(answers.filter(answer => answer.value === "Sir%20Toby%20Belch")[0].correct).toEqual(false)
    expect(answers.filter(answer => answer.value === "Guy%20of%20Gisbourne")[0].correct).toEqual(false)

  })

})
