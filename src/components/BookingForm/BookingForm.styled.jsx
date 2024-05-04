import styled from "styled-components";

export const AllDiv = styled.div`
display: flex;
flex-direction: column;
height: 530px;
width: 448px;
box-sizing: border-box;
border: 1px solid var(--border-color-grey);
border-radius: 10px;
padding: 24px;
gap: 24px
`;

export const DivText = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const Title = styled.h3`
margin: 0;
font-size: 20px;
font-weight: 600;
line-height: 1.2;
`;

export const Text = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 1.5;
color: var(--second-color-grey);
`;

export const DivInputs = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
`;

export const DivInput = styled.div`
height: 56px;
width: 400px;
box-sizing: border-box;
position: relative;
`;

export const Input = styled.input`
height: 56px;
width: 400px;
box-sizing: border-box;
border: 0;
border-radius: 10px;
padding: 18px;
font-size: 16px;
font-weight: 400;
line-height: 1.25;
background-color: var(--input-color-gray);

&::placeholder{
color: var(--second-color-grey);
}
`;

export const ButtonSend = styled.button`
width: 160px;
height: 56px;
box-sizing: border-box;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
border-radius: 200px;
background-color: var(--primery-color-red);
color: var(--primery-color-white);
border: 0;

&:hover{
  background-color: var(--second-color-red);
}
`;

export const ButtonCalendar = styled.button`
width: 20px;
height: 20px;
box-sizing: border-box;
border: 0;
background-color: transparent;
position: absolute;
right: 18px;
top: 50%;
transform: translateY(-50%);
`;

export const SvgCalendar = styled.svg`
width: 20px;
height: 20px;
box-sizing: border-box;
`;

export const Textarea = styled.textarea`
height: 114px;
width: 400px;
box-sizing: border-box;
border: 0;
border-radius: 10px;
padding: 18px;
font-size: 16px;
font-weight: 400;
line-height: 1.25;
background-color: var(--input-color-gray);

&::placeholder{
color: var(--second-color-grey);
}
`;