import styled from "styled-components";

export const AllDiv = styled.div`
width: 360px;
box-sizing: border-box;
display: flex;
flex-direction: column;
`;

export const TitleFilters = styled.h3`
font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: rgba(16, 24, 40, 0.6);
margin: 0;
padding: 0;
margin-bottom: 14px;
`;

export const DivTitleParams = styled.div`
display: flex;
width: 100%;
height: 48px;
box-sizing: border-box; 
border-bottom: 1px solid #1018281A;
margin-bottom: 24px;
`;

export const TextTitleParams = styled.h3`
margin: 0;
font-size: 20px;
font-weight: 600;
line-height: 1.2;
`;

export const Ul = styled.ul`
display: flex;
gap: 8px 10px;
flex-wrap: wrap;
margin-bottom: 32px;
`;

export const Li = styled.li`
width: calc((100% - 20px)/3);
height: 112px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
border: 0;
border-radius: 10px;
`;

export const Button = styled.button`
width: 100%;
height: 112px;
box-sizing: border-box;
display: flex;
flex-direction: column;
gap: 8px;
justify-content: center;
align-items: center;
border: 1px solid #10182833;
border-radius: 10px;
background-color: transparent;
transition: border-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);

&:hover{
  border-color: var(--second-color-red);
}
`;

export const Svg = styled.svg`
width: 32px;
height: 32px;
box-sizing: border-box;
`;

export const TextParams = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 1.25;
`;

export const BigSvg = styled.svg`
width: 40px;
height: 28px;
box-sizing: border-box;
`;