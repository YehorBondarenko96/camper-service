import {
  AllDiv,
  Ul
} from "./Reviews.styled";
import { LiReviews } from "components/LiReviews/LiReviews";

export const Reviews = ({camper}) => {
  return (
    <AllDiv>
      <Ul>
        {camper.reviews.map((review, index) => <LiReviews key={index} review={review}/>)}
      </Ul>
    </AllDiv>
  )
};