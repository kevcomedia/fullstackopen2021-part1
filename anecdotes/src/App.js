import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'The best way to get a project done faster is to start sooner',
    "Every good work of software starts by scratching a developer's personal itch",
    'Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array.from({ length: anecdotes.length }).map(() => 0)
  )

  const handleVoteClick = () => {
    const newVotes = votes.map((vote, i) => (i === selected ? vote + 1 : vote))
    setVotes(newVotes)
  }

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const maxVotes = Math.max(...votes)
  const maxVotesIndex = votes.findIndex((vote) => vote === maxVotes)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxVotesIndex]}</p>
      <p>has {votes[maxVotesIndex]} votes</p>
    </div>
  )
}

export default App
