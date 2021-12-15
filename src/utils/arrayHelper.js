export const combineAnswers = (wrongAnsers, correctAnswers) => {
  const answers = [...wrongAnsers, correctAnswers]
  const combineAnswers = []
  answers.forEach((answer) => {
    combineAnswers.push({
      value: answer,
      correct: correctAnswers === answer
    })
  })
  return combineAnswers.sort(() => Math.random() - 0.5)
}
