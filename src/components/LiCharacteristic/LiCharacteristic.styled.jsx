import styled from "styled-components";

export const Li = styled.li`
background-color: var(--primery-color-grey);
height: 44px;
border-radius: 100px;
padding: 12px 18px;
font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  display: flex;
  gap: 8px;
box-sizing: border-box;
`;

export const SvgCharacteristic = styled.svg`
width: 20px;
height: 20px;
box-sizing: border-box;
`;

export const Text = styled.p`
&::first-letter {
    text-transform: uppercase;
}
`;