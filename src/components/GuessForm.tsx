import React from 'react'

type GuessFormProps = {
  number: number
  onGuess: (guess: boolean) => void
}

const GuessForm: React.FC<GuessFormProps> = ({ number, onGuess }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <p style={{ fontSize: '1.5rem' }}>Is {number} a prime number?</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <button
          onClick={() => onGuess(true)}
          style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}
        >
          Prime
        </button>
        <button
          onClick={() => onGuess(false)}
          style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}
        >
          Not Prime
        </button>
      </div>
    </div>
  )
}

export default GuessForm
