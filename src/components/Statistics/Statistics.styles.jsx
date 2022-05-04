import styled from '@emotion/styled';


export const StatisticsWrapper = styled.ul`
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: grey;
    width: 200px;
    border-radius: 5px;
    text-align: center;
    padding:10px 10px;

`

export const GoodFeedback = styled.li`
    background-color: blue;
    max-width: 70px;
    margin-bottom: 10px;
`
export const NeutralFeedback = styled.li`
    background-color: green;
    max-width: 70px;
    margin-bottom: 10px;
`
export const BadFeedback = styled.li`
    background-color: yellow;
    max-width: 70px;
    margin-bottom: 10px;
`

export const TotalFeedback = styled.li`
    background-color: purple;
    color: #b64f27;
    max-width: 70px;
    margin-bottom: 10px;
`
export const PositivePercentage = styled.li`
    background-color: brown;
    max-width: 170px;
`