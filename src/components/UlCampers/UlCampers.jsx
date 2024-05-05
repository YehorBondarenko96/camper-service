import { AllDiv, Ul, ButtonLoadMore } from "./UlCampers.syled";
import { LiCampers } from "components/LiCampers/LiCampers";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../redux/selectors";
import { setPage } from "../../redux/campersSlice";
import { fetchCampers } from "../../redux/opertions";

export const UlCampers = ({ campers }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const handleClick = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchCampers(page + 1));
  };

  return (
    <AllDiv>
      <Ul>
      {campers.map((camper, index) => <LiCampers key={index} camper={camper}/>)}
      </Ul>
      <ButtonLoadMore
        type="button"
        onClick={handleClick}
      >
        Load more
      </ButtonLoadMore>
    </AllDiv>
  )
};