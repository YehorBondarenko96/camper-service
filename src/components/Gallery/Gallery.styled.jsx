import styled from "styled-components";

export const AllDiv = styled.div`
width: 100%;
overflow: auto;
scrollbar-width: none; 
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
  display: none;
`;

export const Ul = styled.ul`
display: flex;
gap: 16px;
`;

export const Li = styled.li`
width: 290px;
height: 310px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
overflow: hidden;
box-sizing: border-box;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
`;