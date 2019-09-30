import styled from 'styled-components'
export const ButtonContaineer= styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"} !important;
color: ${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"} !important; 
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props=>props.cart?"var(--mainYellow)":"var(--lightBlue)"} !important;
    color:${props=>props.cart?"var(--mainWhite)":"var(--mainBlue)"} !important; 
}
&:focus{
    outline:none;
}
`
export const NavWrapper =styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite);
    font-size:1.3rem;
    text-transform:capitalize;
}
`