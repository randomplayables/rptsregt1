import React from 'react';
import logo from './assets/logo.svg';
import { usePrimeGame } from './hooks/usePrimeGame';
import GuessForm from './components/GuessForm';
import Result from './components/Result';

const App: React.FC = () => {
  const {
    currentNumber,
    roundNumber,
    isLoading,
    showResult,
    isCorrect,
    handleGuess,
    nextRound,
  } = usePrimeGame();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20, textAlign: 'center' }}>
      <header>
        <img src={logo} alt="Prime Number Guessing Game Logo" style={{ height: 80 }} />
        <h1>Prime Number Guessing Game</h1>
      </header>
      {!showResult && (
        <GuessForm number={currentNumber} onGuess={handleGuess} />
      )}
      {showResult && (
        <Result
          number={currentNumber}
          isCorrect={isCorrect}
          roundNumber={roundNumber}
          onNextRound={nextRound}
        />
      )}
    </div>
  );
};

export default App;