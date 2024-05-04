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
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
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

export const TextDescription = styled.p`
font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 24px;
  color: var(--second-color-grey);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UlCharacteristic = styled.ul`
margin-top: 24px;
display: flex;
gap: 8px;
flex-wrap: wrap;
`;

export const ButtonShowMore = styled.button`
width: 166px;
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
margin-top: 24px;
border: 0;

&:hover{
  background-color: var(--second-color-red);
}
`;