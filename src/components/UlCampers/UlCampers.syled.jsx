import styled from "styled-components";

export const AllDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 888px;
box-sizing: border-box;
  max-height: 100%;
  overflow: auto;
scrollbar-width: none; 
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
  display: none;
  }
  `;

export const Ul = styled.ul`
display: flex;
flex-direction: column;
gap: 32px;
margin: 30px 0;
`;

export const ButtonLoadMore = styled.button`
width: 145px;
height: 56px;
min-height: 56px;
box-sizing: border-box;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
border-radius: 200px;
background-color: transparent;
border: 1px solid var(--border-color-grey);
color: var(--primery-color-black);
margin-bottom: 30px;
transition: border-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);


&:hover,
&:focus{
  border-color: var(--second-color-red);
}
`;