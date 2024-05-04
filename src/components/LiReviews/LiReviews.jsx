import { Li } from "./LiReviews.styled";
import {
  DivBriefInfo,
  DivAva,
  TextAva,
  TextComment
} from "./LiReviews.styled";

export const LiReviews = ({ review }) => {
  return (
    <Li>
      <DivBriefInfo>
        <DivAva>
          <TextAva>{review.reviewer_name.charAt(0)}</TextAva>
        </DivAva>
      </DivBriefInfo>
      <TextComment>{review.comment}</TextComment>
    </Li>
  )
};