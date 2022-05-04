import {GoodButton} from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <>
        {options.map(option => (
          <GoodButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </GoodButton>
        ))}
      </>
    );
  };

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,  
  };

export default FeedbackOptions


// const FeedbackOptions = ({onHandleIncrement}) => {
//     return <div className=''>
//     <GoodButton type='button' name='Good' onClick={onHandleIncrement}>Good</GoodButton>
//     <NeutralButton type='button' name='Neutral' onClick={onHandleIncrement}>Neutral</NeutralButton>
//     <BadButton type='button' name='Bad' onClick={onHandleIncrement}>Bad</BadButton>
// </div>
// }












// class FeedbackOptions extends Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         value: 0,
//     //     }
//     // };
//     static defaultProps = {
//         initialGoodValue: 0,
//         initialNeutralValue:0,
//         initialBadValue: 0,
//         initialTotal: 0,
//         initialPositiveFeedback: 0,
//     }

//     state = {
//         goodValue: this.props.initialGoodValue,
//         neutralValue:this.props.initialNeutralValue,
//         badValue: this.props.initialBadValue,
//         total: this.props.initialTotal,
//         positiveFeedback: this.props.initialPositiveFeedback,
//     };


//     handleIncrement = (e) => {
//         const buttonName = e.target.name
//         console.log(buttonName);
//         if (buttonName === 'Good') {
//             this.setState(({goodValue}) => {
//                 return {
//                     goodValue: goodValue +1
//                 }
//             })
//         }if (buttonName === 'Neutral') {
//             this.setState(prevState => {
//                 return {
//                     neutralValue: prevState.neutralValue +1
//                 }
//             })
//         }if (buttonName === 'Bad') {
//             this.setState(({badValue}) => {
//                 return {
//                     badValue: badValue +1
//                 }
//             })
//         }

//         console.log(this.state);
//     }

//     countTotalFeedback = () => {
        
//             this.setState(({total}) => {
//                 return{
//                     total: this.state.goodValue + this.state.neutralValue + this.state.badValue
//                 }
                
//             })
//             console.log(this.state);
//         }
    
//     countPositiveFeedbackPercentage = () => {
//         this.setState(({positiveFeedback}) => {
//             return {
//                 positiveFeedback: (this.state.goodValue + this.state.neutralValue + this.state.badValue) / 100 * this.state.goodValue * 100
//             }
//         })
//     }

//     render() {
//         return <div className=''>
//         <GoodButton type='button' name='Good' onClick={this.handleIncrement}>Good</GoodButton>
//         <NeutralButton type='button' name='Neutral' onClick={this.handleIncrement}>Neutral</NeutralButton>
//         <BadButton type='button' name='Bad' onClick={this.handleIncrement}>Bad</BadButton>
//             <div style={{
//                 display: 'flex',
//                 marginLeft: '60px'
//             }}>
//             <div>{this.state.goodValue}</div>
//             <div>{this.state.neutralValue}</div>
//             <div>{this.state.badValue}</div>

//         </div>
//     </div>
//     }
// }













// export default function FeedbackOptions() {
// return (
//     <div className=''>
//         <button type='button'>Good</button>
//         <button type='button'>Neutral</button>
//         <button type='button'>Bad</button>
//     </div>
//   );
// }


// Statistics.propTypes = {
//   dataStatistics: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
