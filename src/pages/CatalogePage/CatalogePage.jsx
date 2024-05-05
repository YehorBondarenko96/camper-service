import { Filters } from "components/Filters/Filters";
import { UlCampers } from "components/UlCampers/UlCampers";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCampers,
  selectPage,
  selectShowLoadMoreButCatalog,
  selectScrollValueCatalog
} from "../../redux/selectors";
import { AllDiv } from "./CatalogePage.styled";
import { Header } from "components/Header/Header";
import { fetchCampers } from "../../redux/opertions";
import { setPage, setScrollValueCatalog } from "../../redux/campersSlice";

const CatalogePage = () => { 
  const dispatch = useDispatch();
  const allCampers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const showLoadMoreButCatalog = useSelector(selectShowLoadMoreButCatalog);
  const scrollValueCatalog = useSelector(selectScrollValueCatalog);

  const handleClick = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchCampers(page + 1));
    const catalogDiv = document.getElementById('catalog-div');
    if (catalogDiv) {
      dispatch(setScrollValueCatalog((catalogDiv.scrollTop)));
    }
  };

  return (
    <>
      <Header/>
      <AllDiv>
      <Filters />
        <UlCampers
          campers={allCampers}
          showLoadMoreBut={showLoadMoreButCatalog}
          scrollValue={scrollValueCatalog}
          page={page}
          idContainer='catalog-div'
          handleClick={handleClick}
        />
    </AllDiv>
    </>
  )
};

export default CatalogePage;