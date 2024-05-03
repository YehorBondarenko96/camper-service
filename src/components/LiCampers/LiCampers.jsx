import {
  Li,
  DivImage,
  Image,
  ButtonFavor,
  SvgFavor
} from "./LiCampers.styled";
import icon from "../../Vector.svg";

export const LiCampers = ({camper}) => {
  console.log('camper: ', camper);
  return (
    <Li>
      <DivImage>
        <Image src={camper.gallery[0]} alt={camper.name} />
      </DivImage>
      <ButtonFavor>
        <SvgFavor>
          <use href={`${icon}#heart-red`}></use>
        </SvgFavor>
      </ButtonFavor>
    </Li>
  )
};