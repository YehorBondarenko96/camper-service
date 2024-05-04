import styled from "styled-components";

export const AllDiv = styled.div`
display: flex;
height: 530px;
width: 430px;
box-sizing: border-box;
overflow-y: auto;
scrollbar-width: none; 
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
  display: none;
  }
`;

export const Ul = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
gap: 24px;
`;