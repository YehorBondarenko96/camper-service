import styled from "styled-components";

export const AllDiv = styled.div`
width: 360px;
height: 88px;
box-sizing: border-box;
display: flex;
flex-direction: column;
gap: 8px;
margin-bottom: 32px;
`;

export const TitleInput = styled.h3`
font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: rgba(16, 24, 40, 0.6);
margin: 0;
padding: 0;
`;

export const DivInput = styled.div`
width: 360px;
height: 56px;
box-sizing: border-box;
position: relative;
`;

export const Input = styled.input`
width: 360px;
height: 56px;
box-sizing: border-box;
border-radius: 10px;
border: 0;
background-color: var(--input-color-gray);
font-size: 16px;
font-weight: 400;
line-height: 1.25;
padding: 18px 18px 18px 44px;

&::placeholder{
color: var(--second-color-grey);
}
`;

export const Svg = styled.svg`
width: 18px;
height: 20px;
box-sizing: border-box;
position: absolute;
top: 18px;
left: 18px;
`;