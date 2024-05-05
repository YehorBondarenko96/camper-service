import {
  AllDiv, 
  TitleInput,
  DivInput,
  Input,Svg
} from "./Location.styled";
import icon from "../../Vector.svg";
 
export const Location = ({value, onChange }) => { 
  return (
    <AllDiv>
      <TitleInput>Location</TitleInput>
      <DivInput>
        <Input
          type="text"
          placeholder="Typing location..."
          value={value}
          onChange={onChange}
        />
        <Svg>
          <use href={`${icon}#location-filter`}></use>
        </Svg>
      </DivInput>
    </AllDiv>
  )
};