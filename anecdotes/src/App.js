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

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button>vote</button>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  )
}

export default App
