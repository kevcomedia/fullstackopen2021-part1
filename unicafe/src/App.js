import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>

      <h2>statistics</h2>
      <p>good 6</p>
      <p>neutral 2</p>
      <p>bad 1</p>
    </div>
  )
}

export default App
