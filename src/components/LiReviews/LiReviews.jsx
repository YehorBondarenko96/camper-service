import {
  Li,
  DivBriefInfo,
  DivAva,
  TextAva,
  DivNameStars,
  NameUsers,
  DivSvg,
  Svg,
  TextComment
} from "./LiReviews.styled";
import icon from "../../Vector.svg";

export const LiReviews = ({ review }) => {
  const renderSvg = () => {
    const svgs = [];
    for (let i = 0; i < 5; i++){
      if (i < review.reviewer_rating) {
        svgs.push(
          <Svg key={i}>
                <use href={`${icon}#star`}></use>
          </Svg>
        )
      } else {
        svgs.push(
          <Svg key={i}>
                <use href={`${icon}#grey-star`}></use>
            </Svg>
        )
      };
    };
      return svgs
  };

  return (
    <Li>
      <DivBriefInfo>
        <DivAva>
          <TextAva>{review.reviewer_name.charAt(0)}</TextAva>
        </DivAva>
        <DivNameStars>
          <NameUsers>{review.reviewer_name}</NameUsers>
          <DivSvg>
            {renderSvg()}
          </DivSvg>
        </DivNameStars>
      </DivBriefInfo>
      <TextComment>{review.comment}</TextComment>
    </Li>
  )
};