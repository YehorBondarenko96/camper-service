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
`;

export const DivImage = styled.div`
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
`;

export const DivAllInfo = styled.div`
width: 526px;
box-sizing: border-box;
`;

export const DivNamePrice = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

export const Name = styled.h3`
font-size: 24px;
font-weight: 700;
line-height: 1.25;
margin: 0;
`;

export const DivButtFavPrise = styled.div`
display: flex;
`;

export const Price = styled.p`
font-size: 24px;
font-weight: 700;
line-height: 1.25;
margin: 0;
`;

export const ButtonFavor = styled.button`
width: 24px;
height: 24px;
border: 0;
background-color: transparent;
`;

export const SvgFavor = styled.svg`
width: 24px;
height: 24px;
fill: var(--primery-color-black);
box-sizing: border-box;
`;

export const DivReviewsLocation = styled.div`
display: flex;
gap: 16px;
margin-top: 8px;
`;

export const DivSvgText = styled.div`
display: flex;
align-items: center;
gap: 4px;
`;

export const SvgLittle = styled.svg`
width: 16px;
height: 16px;
box-sizing: border-box;
`;

export const TextReviewsLocation = styled.p`
font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const TextDescription = styled.p`
font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 24px;
  color: var(--second-color-grey);
`;