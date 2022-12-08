import styled from 'styled-components';
import * as GiIcons from 'react-icons/gi';

const TitleBar = () => {
    const StyledHeader = styled.header`
    height: 10vh;
    padding: 1em;
    margin: -1%;
    background-color: #3E6A5F;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: monospace ;
    color:red;
    h1{
        font-size: 3.5em
    }
    `
    return(
        <StyledHeader>
            <h1> <GiIcons.GiCheckboxTree/>Landlordify </h1>
        </StyledHeader>
    )
}

export default TitleBar