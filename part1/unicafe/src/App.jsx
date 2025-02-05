import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
}

const Statistics = ({ values }) => {
  const total = values.good + values.neutral + values.bad;

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
        <StatisticsLine value={values.good} text={"Good"}></StatisticsLine>
        <StatisticsLine value={values.neutral} text={"Neutral"}></StatisticsLine>
        <StatisticsLine value={values.bad} text={"Bad"}></StatisticsLine>
        <StatisticsLine value={total} text={"All"}></StatisticsLine>
        <StatisticsLine value={((values.good - values.bad) / total)} text={"Average"}></StatisticsLine>
        <StatisticsLine value={((values.good / total) * 100)+"%"} text={"Positive"}></StatisticsLine>
        </tbody>
      </table>
    </div>
  );
};


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <Statistics values={{good, neutral, bad}}></Statistics>
    </div>
  )
}

export default App