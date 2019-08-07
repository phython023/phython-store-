import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-tansform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.04rem solid var(--lightBlue);
border-color: ${props => 
    (props.cart ? "var(--mainYelow)" :"var(--lightBlue)") };
border-radius: 0.5rem;
color: ${props => 
    (props.cart ? "var(--mainYelow)" :"var(--lightBlue)") };
padding: 0.2rem 0.5rem;
cusor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background-color: ${props => 
        (props.cart ? "var(--mainYelow)" :"var(--lightBlue)") };
    color: var(--mainBlue);
}
&focus{
    outline: none;
}
`