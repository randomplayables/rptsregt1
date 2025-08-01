export type SessionId = string

export interface InitGameSessionResponse {
  sessionId: SessionId
}

export interface RoundData {
  number: number
  guess: boolean
  isCorrect: boolean
}

export interface SaveGameDataPayload {
  sessionId: SessionId
  roundNumber: number
  roundData: RoundData
}

export interface UsePrimeGameReturn {
  currentNumber: number
  roundNumber: number
  isLoading: boolean
  showResult: boolean
  isCorrect: boolean
  handleGuess: (guess: boolean) => void
  nextRound: () => void
}

export interface GuessFormProps {
  number: number
  onGuess: (guess: boolean) => void
}

export interface ResultProps {
  number: number
  isCorrect: boolean
  roundNumber: number
  onNextRound: () => void
}