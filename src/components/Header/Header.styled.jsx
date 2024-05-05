import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllDiv = styled.div`
display: flex;
border-bottom: 1px solid var(--border-color-grey);
width: 100%;
height: 50px;
justify-content: end;
align-items: center;
padding: 0 30px;
box-sizing: border-box;
`;

export const DivLinks = styled.div`
display: flex;
gap: 20px;
`;

export const AbdLink = styled(Link)`
color: var(--primery-color-red);
font-size: 20px;


&:hover{
  color: var(--second-color-red);
}`;