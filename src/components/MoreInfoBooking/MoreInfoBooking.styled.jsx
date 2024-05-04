import styled from "styled-components";

export const DivButtons = styled.div`
display: flex;
width: 100%;
height: 48px;
box-sizing: border-box; 
gap: 40px;
border-bottom: 1px solid var(--border-color-grey);
margin-bottom: 44px;
`;

export const Button = styled.button`
font-size: 20px;
font-weight: 600;
line-height: 1.2;
position: relative;
display: flex;
border: 0;
background-color: transparent;
`;

export const ButtonAfter = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: var(--primery-color-red);
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const DivMoreInfoBooking = styled.div`
display: flex;
gap: 24px;
width: 100%;
`;