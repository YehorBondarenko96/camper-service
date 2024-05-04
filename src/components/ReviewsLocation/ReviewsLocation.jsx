import {
  DivReviewsLocation,
  DivSvgText,
  SvgLittle,
  TextReviewsLocation
} from "./ReviewsLocation.styled";
import icon from '../../Vector.svg';

export const ReviewsLocation = ({camper}) => { 
  return (
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
  )
};