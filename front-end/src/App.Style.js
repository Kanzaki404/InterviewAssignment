import styled from "styled-components";
import FooterSnow from "./Assets/images/FooterSnow.png";
import menu from "./Assets/icons/menu.svg";
export const AppContainer = styled.div`
  background-color: #122939;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;




export const Footer = styled.footer`
   position:fixed;
    bottom:0;
    left:0;
    right:0;
    width:100%;
    background-image: url(${FooterSnow});
    height: 400px;
  background-repeat: no-repeat; 
  @media (max-width: 700px) {
    position:relative;
  }

`;

export const HamburgerMenu = styled.div`
 background-image: url(${menu});
 background-repeat: no-repeat; 
height: 50px;
width: 50px;
margin-top: 50px;
margin-right:50px;
position: absolute;
right: 0;
`;
