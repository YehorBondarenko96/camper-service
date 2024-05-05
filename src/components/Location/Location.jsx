import {
  AllDiv, 
  TitleInput,
  DivInput,
  Input,Svg
} from "./Location.styled";
import icon from "../../Vector.svg";
import { selectValueLocation } from "../../redux/selectors";
import { setValueLocation } from "../../redux/campersSlice";
import { useSelector, useDispatch } from "react-redux";

export const Location = () => { 
  const dispatch = useDispatch();
  const value = useSelector(selectValueLocation);

  const onChange = (e) => {
    const inpValue = e.target.value;
    dispatch(setValueLocation(inpValue));
  };

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