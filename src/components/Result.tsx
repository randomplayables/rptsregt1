import React from 'react'
import { isPrime } from '../utils/isPrime'

type ResultProps = {
  number: number
  isCorrect: boolean
  roundNumber: number
  onNextRound: () => void
}

const Result: React.FC<ResultProps> = ({ number, isCorrect, roundNumber, onNextRound }) => {
  const actual = isPrime(number)

  return (
    <div style={{ marginTop: 20, textAlign: 'center' }}>
      <h2>Round {roundNumber}</h2>
      <p style={{ fontSize: '1.5rem', color: isCorrect ? 'green' : 'red' }}>
        {isCorrect ? 'Correct!' : 'Wrong!'} {number} {actual ? 'is' : 'is not'} a prime number.
      </p>
      <button
        onClick={onNextRound}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
      >
        Next Round
      </button>
    </div>
  )
}

export default Result