import {
  Li, DivImage, Image, ButtonFavor, SvgFavor, DivNamePrice, Name, Price, DivButtFavPrise,
  DivReviewsLocation, DivSvgText, SvgLittle, TextReviewsLocation, DivAllInfo, TextDescription
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
  
  console.log('camper: ', camper);
  return (
    <Li>
      <DivImage>
        <Image src={camper.gallery[0]} alt={camper.name} />
      </DivImage>
      <DivAllInfo>
        <DivNamePrice>
        <Name>{camper.name}</Name>
        <DivButtFavPrise>
          <Price>{`€${price()}`}</Price>
        <ButtonFavor type="button" onClick={handleClick}>
        <SvgFavor>
          <use href={thisFavor ? `${icon}#heart-red` : `${icon}#heart`}></use>
        </SvgFavor>
      </ButtonFavor>
        </DivButtFavPrise>
      </DivNamePrice>
      <DivReviewsLocation>
        <DivSvgText>
          <SvgLittle>
          <use href={`${icon}#star`}></use>
          </SvgLittle>
            <TextReviewsLocation style={{textDecoration: 'underline',}}>
              {`${camper.rating}(${camper.reviews.length} Reviews)`}
          </TextReviewsLocation>
        </DivSvgText>
        <DivSvgText>
            <SvgLittle>
          <use href={`${icon}#location`}></use>
          </SvgLittle>
          <TextReviewsLocation>
            {`${camper.location}`}
          </TextReviewsLocation>
        </DivSvgText>
        </DivReviewsLocation>
        <TextDescription>{camper.description}</TextDescription>
      </DivAllInfo>
    </Li>
  )
};