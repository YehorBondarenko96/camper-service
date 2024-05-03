import {
  Li,
  DivImage,
  Image,
  ButtonFavor,
  SvgFavor
} from "./LiCampers.styled";
import icon from "../../Vector.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectFavorItems } from "../../redux/selectors";
import { addFavor, delFavor } from "../../redux/campersSlice";

export const LiCampers = ({ camper }) => {
  const dispatch = useDispatch();
  const favorCampers = useSelector(selectFavorItems);
  const thisFavor = favorCampers.find(fav => fav.id === camper.id);

  const handleClick = () => {
    if (thisFavor) {
      dispatch(delFavor(camper))
    } else {
      dispatch(addFavor(camper))
    }
  };
  
  console.log('camper: ', camper);
  return (
    <Li>
      <DivImage>
        <Image src={camper.gallery[0]} alt={camper.name} />
      </DivImage>
      <ButtonFavor type="button" onClick={handleClick}>
        <SvgFavor>
          <use href={thisFavor ? `${icon}#heart-red` : `${icon}#heart`}></use>
        </SvgFavor>
      </ButtonFavor>
    </Li>
  )
};