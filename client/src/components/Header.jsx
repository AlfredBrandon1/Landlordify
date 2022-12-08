import styled from 'styled-components';
import * as GiIcons from 'react-icons/gi';
import Navigations from './Navigations';

const Header = () => {
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
    color:white;
    a{
        font-size: 1.8em;
        text-decoration: none;
        color: white;
        font-family: monospace ;
    };
    h1{
        color: red;
        font-size: 3.5em;
    }
    `

    return(
        <StyledHeader>
            <h1> <GiIcons.GiCheckboxTree/>Landlordify </h1>
            <Navigations/>
        </StyledHeader>
    )
}

export default Header;