import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: #202020;
  background-size: cover;
  background-position: center;
  color: #fff;
  `;

export const SecAllDiv = styled.div`
width: 100%;
height: 100vh;
background: rgba(0, 0, 0, 0.3);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
`;

export const Title = styled.h1`
max-width: 700px;
font-size: 72px;
text-align: center;
margin: 0;
`;

export const SecTitle = styled.p`
max=width: 400px;
font-size: 32px;
text-align: center;
margin: 0;
`;

export const DivBut = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
width: 500px;
`;

export const ButtonLink = styled(Link)`
background-color: var(--primery-color-red);
color: var(--primery-color-white);
width: 100%;
max-width: 300px;
height: 60px;
border-radius: 20px;
border: 0;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;


&:hover{
  background-color: var(--second-color-red);
}
`;