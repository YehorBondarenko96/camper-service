import styled from "styled-components";

export const AllDivFirstInfo = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

export const DivBriefInfo = styled.div``;

export const Name = styled.h1`
font-size: 24px;
font-weight: 600;
line-height: 1.25;
margin: 0;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export const Price = styled.p`
font-size: 24px;
font-weight: 700;
line-height: 1.25;
margin: 0;
margin-top: 16px;
`;

export const TextDescription = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 1.5;
color: var(--second-color-grey);
`;