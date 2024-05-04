import styled from "styled-components";

export const Li = styled.li`
display: flex;
flex-direction: column;
height: 172px;
width: 430px;
box-sizing: border-box;
gap: 16px;
`;

export const DivBriefInfo = styled.div`
display: flex;
gap: 16px;
height: 60px;
width: 172px;
box-sizing: border-box;
`;

export const DivAva = styled.div`
height: 60px;
width: 60px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
color: var(--primery-color-red);
background-color: var(--primery-color-grey);
border-radius: 50%;
`;

export const TextAva = styled.p`
font-size: 24px;
font-weight: 600;
line-height: 1.25;
`;

export const DivNameStars = styled.div`
display: flex;
flex-direction: column:
gap: 4px;
`;

export const TextComment = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 1.5;
color: var(--second-color-grey);
`;