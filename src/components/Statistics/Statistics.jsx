import {StatisticsWrapper, GoodFeedback, NeutralFeedback, BadFeedback, TotalFeedback, PositivePercentage} from "./Statistics.styles"
import PropTypes from 'prop-types';



const Statistics = ({good, neutral, bad, total, percentage}) =>{
    return (
        <StatisticsWrapper>
            <GoodFeedback>Good:{good}</GoodFeedback>
            <NeutralFeedback>Neutral:{neutral}</NeutralFeedback>
            <BadFeedback>Bad:{bad}</BadFeedback>
            <TotalFeedback>Total:{total}</TotalFeedback>
            <PositivePercentage>Positive feedback:{percentage}%</PositivePercentage>
        </StatisticsWrapper>
      );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  };
export default Statistics

