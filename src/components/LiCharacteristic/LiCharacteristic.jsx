import { Li, SvgCharacteristic, Text } from "./LiCharacteristic.styled";

export const LiCharacteristic = ({ svg, text }) => {
  return (
    <Li>
      <SvgCharacteristic>{svg}</SvgCharacteristic>
      <Text>{text}</Text>
    </Li>
  )
};