import styled from "styled-components";

export const Li = styled.li`
border: 1px solid var(--border-color-grey);
border-radius: 20px;
width: 888px;
height: 358px;
padding: 24px;
box-sizing: border-box;
display: flex;
gap: 24px;
position: relative;
`;

export const DivImage = styled.div`
width: 290px;
height: 310px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
overflow: hidden;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

export const ButtonFavor = styled.button`
width: 24px;
height: 24px;
position: absolute;
top: 24px;
right: 24px;
border: 0;
background-color: transparent;
`;

export const SvgFavor = styled.svg`
width: 24px;
height: 24px;
fill: var(--primery-color-black);
`;