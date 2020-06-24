import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({color, onClick, text }) => (
  <button style={{backgroundColor: color}} onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => {

  return(
    <p
    style = {{
      marginBlockEnd: 0,
      marginBlockStart: 0,
      color: 'grey'
    }}
    >
      {props.children}
    </p>
  )
}

const Buttons = ({good, neutral, bad, setGood, setNeutral, setBad}) => {

  return(
    <div>
      <h1>give feedback</h1>
      <div>
        <Button color='green' text='good' onClick={() => {
          setGood(good + 1)
        }}>
        </Button>
        <Button color='gray' text='neutral' onClick={() => {
          setNeutral(neutral + 1)
        }
       }>
        </Button>
        <Button color='red' text='bad'  onClick={() => {
          setBad(bad + 1)
          }}>
        </Button>
      </div>
    </div>
  )
}



const Statistics = ({good, bad, neutral}) =>{

  return(
    <div>
      <h1>statistics</h1>
      {
        good + neutral + bad === 0
          ?<Statistic>No feedback given</Statistic>
          :(
            <>
               <Statistic> {'good ' + good }</Statistic>
               <Statistic> {'neutral ' + neutral }</Statistic>
               <Statistic> {'bad ' + bad }</Statistic>
               <Statistic>{'all ' +  (bad + neutral + good)}</Statistic>
               <Statistic>{'average ' + (bad * (-1) + good) / (bad + neutral + good) }</Statistic>
               <Statistic>{'positive ' + (good / (bad + neutral + good)) }</Statistic>
            </>
          )
      }
    </div>
  )

}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  return (
    <div>
      <Buttons
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood} 
        setNeutral={setNeutral} 
        setBad={setBad}
      />
      <Statistics
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

