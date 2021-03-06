import styled from '@emotion/styled'

export const Button = styled.button`
    background-color: #258c79;
    font-size: 14px;
    padding: 5px;
    margin-right: 10px;
    color: darkblue;
    border-radius: 5px;
    height: 30px;
    cursor: pointer;
    &:hover,&:focus {
        color: #b81818;
    }
`
export const NeutralButton = styled.button`
    background-color: green;
    font-size: 14px;
    color: #4b4b83;
    padding: 5px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover,&:focus {
        color: grey;
        
    }
`
export const BadButton = styled.button`
    background-color: yellow;
    font-size: 14px;
    padding: 5px;
    color: darkblue;
    cursor: pointer;
    border-radius: 5px;
    &:hover,&:focus {
        color: grey;
        
    }
`