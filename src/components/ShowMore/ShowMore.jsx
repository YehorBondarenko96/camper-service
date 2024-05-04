import ModalWindow from "components/ModalWindow/ModalWindow";
import { ReviewsLocation } from "components/ReviewsLocation/ReviewsLocation";
import { Gallery } from "components/Gallery/Gallery";
import {
  AllDivFirstInfo, 
  DivBriefInfo,
  Name,
  Price,
  TextDescription
} from "./ShowMore.styled";

export const ShowMore = ({ camper, onClose }) => {
  const price = () => { 
    if (camper.price) {
      const arrPrice = String(camper.price).split('');
    const indexDot = arrPrice.indexOf('.');
    if (indexDot === -1) {
      return `${camper.price}.00`
    } else {
      return `${camper.price}`
    }
    }
  };
  
  return (
    <ModalWindow onClose={onClose}>
      <AllDivFirstInfo>
        <DivBriefInfo>
        <Name>{camper.name}</Name>
          <ReviewsLocation camper={camper} />
          <Price>{`€${price()}`}</Price>
        </DivBriefInfo>
        <Gallery gallery={camper.gallery} alt={camper.name} />
        <TextDescription>{camper.description}</TextDescription>
      </AllDivFirstInfo>
    </ModalWindow>
  )
};