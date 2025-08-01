import { useState, useEffect, useCallback } from 'react'
import { initGameSession, saveGameData } from '../services/apiService'
import { isPrime } from '../utils/isPrime'
import { MAX_NUMBER } from '../constants'

export function usePrimeGame() {
  const [sessionId, setSessionId] = useState<string>('')
  const [currentNumber, setCurrentNumber] = useState<number>(0)
  const [roundNumber, setRoundNumber] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  const generateRandomNumber = () => Math.floor(Math.random() * MAX_NUMBER) + 1

  useEffect(() => {
    async function initialize() {
      const session = await initGameSession()
      setSessionId(session.sessionId)
      setCurrentNumber(generateRandomNumber())
      setIsLoading(false)
    }
    initialize()
  }, [])

  const handleGuess = useCallback(
    (guess: boolean) => {
      const correct = isPrime(currentNumber)
      const result = guess === correct
      setIsCorrect(result)
      setShowResult(true)
      saveGameData(sessionId, roundNumber, {
        number: currentNumber,
        guess,
        isCorrect: result,
      })
    },
    [currentNumber, roundNumber, sessionId]
  )

  const nextRound = useCallback(() => {
    const next = roundNumber + 1
    setRoundNumber(next)
    setCurrentNumber(generateRandomNumber())
    setShowResult(false)
    setIsCorrect(false)
  }, [roundNumber])

  return {
    currentNumber,
    roundNumber,
    isLoading,
    showResult,
    isCorrect,
    handleGuess,
    nextRound,
  }
}