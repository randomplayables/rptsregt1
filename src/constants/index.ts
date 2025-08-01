export const MAX_NUMBER = 100

export const MESSAGES = {
  askPrime: (n: number): string => `Is ${n} a prime number?`,
  correct: 'Correct!',
  wrong: 'Wrong!',
  primeExplanation: (n: number): string => `${n} is a prime number.`,
  notPrimeExplanation: (n: number): string => `${n} is not a prime number.`
}