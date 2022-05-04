import { useState} from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = {
    good,
    neutral,
    bad,
  }

  const handleIncrement = (option) => {
    if (option === 'good') {
      setGood(prevValue => prevValue + 1)
    }if (option === 'neutral') {
        setNeutral(prevValue => prevValue + 1)
    }if (option === 'bad') {
        setBad(prevValue => prevValue + 1)
    }
  }
  
  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0

      good > 0 ?
      positiveFeedbackPercentage = Math.round(100 / ((good + neutral + bad) / good)) 
      : positiveFeedbackPercentage = 0 
    
    return positiveFeedbackPercentage
  }
  
  const countTotalFeedback = () => {
  const feedbackSum = good + neutral + bad
    return feedbackSum 
  }
  
  const totalFeedback = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage()

  
  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
          options={Object.keys(feedbacks)}
          onLeaveFeedback={handleIncrement} 
        />

        </Section>
        <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          percentage={positivePercentage}
          />
        ) : (
        <Notification message="There is no feedback"/>
        )}
        </Section>
      </>
    );
}

export default App

// class App extends Component{

// //   static defaultProps = {
// //     initialGoodValue: 0,
// //     initialNeutralValue:0,
// //     initialBadValue: 0,
// //     initialTotal: 0,
// //     initialPositiveFeedback: 0,
// // };

// // state = {
// //   goodValue: this.props.initialGoodValue,
// //   neutralValue:this.props.initialNeutralValue,
// //   badValue: this.props.initialBadValue,
// //   total: this.props.initialTotal,
// //   positiveFeedback: this.props.initialPositiveFeedback,
// // };

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
//   // total: 0,
//   // positiveFeedback: 0,
// };

// countFeedback = options => {
//   this.setState({ [options]: this.state[options] + 1 });
// };

// // handleIncrement = (e) => {
// //   const buttonName = e.target.name
// //   // console.log(buttonName);
// //   if (buttonName === 'Good') {
// //       this.setState(({goodValue}) => {
// //           return {
// //               goodValue: goodValue +1
// //           }
// //       })
// //   }if (buttonName === 'Neutral') {
// //       this.setState(prevState => {
// //           return {
// //               neutralValue: prevState.neutralValue +1
// //           }
// //       })
// //   }if (buttonName === 'Bad') {
// //       this.setState(({badValue}) => {
// //           return {
// //               badValue: badValue +1
// //           }
// //       })
// //   }

// // }

// countTotalFeedback = () => {
//   const feedbackSum = this.state.good + this.state.neutral + this.state.bad
//     return feedbackSum 
// }

// countPositiveFeedbackPercentage = () => {
//   let positiveFeedbackPercentage = 0
//   this.state.good > 0 ?
//   positiveFeedbackPercentage = Math.round(100 / ((this.state.good + this.state.neutral + this.state.bad) / this.state.good)) 
//   : positiveFeedbackPercentage = 0 
//   return positiveFeedbackPercentage
// }

//   render(){
//     const totalFeedback = this.countTotalFeedback()
//     const positivePercentage = this.countPositiveFeedbackPercentage()
//     const {good, neutral, bad} = this.state
    
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions 
//           // initialGoodValue={0}
//           // initialNeutralValue={0}
//           // initialBadValue={0}
//           // initialTotal={0}
//           // initialPositiveFeedback={0}
//           // onHandleIncrement={this.handleIncrement}
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.countFeedback} 
//           />
//         </Section>
//         <Section title="Statistics">
//         {totalFeedback > 0 ? (
//          <Statistics
//          good={good}
//          neutral={neutral}
//          bad={bad}
//          total={totalFeedback}
//          percentage={positivePercentage}
//          />
//       ) : (
//         <Notification message="There is no feedback"/>
//       )}
//         </Section>
//       </>
//     );
//   }
// }

