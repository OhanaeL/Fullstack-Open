import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votedAnecdotes, setVotedAnecdotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  let max_index = votedAnecdotes.indexOf(Math.max(...votedAnecdotes));

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        {anecdotes[selected]}
        <br />
        has {votedAnecdotes[selected]} votes.
        <br />
        <button onClick={() => {
          const copy = [...votedAnecdotes]
          copy[selected] += 1    
          setVotedAnecdotes(copy)
          }}>Vote</button>
        <button onClick={() => {setSelected(Math.floor(Math.random() * (anecdotes.length - 1 + 1) ) + 0)}}>Next Anecdote</button>
      </div>
      <div>
        <h2>Anecdote with the Highest Votes</h2>
        {anecdotes[max_index]}
        <br />
        has {votedAnecdotes[max_index]} votes.
      </div>
    </div>
  )
}

export default App