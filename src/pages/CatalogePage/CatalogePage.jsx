import { Page } from "components/Page/Page";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCampers,
  selectPage,
  selectShowLoadMoreButCatalog,
  selectScrollValueCatalog
} from "../../redux/selectors";
import { setPage, setScrollValueCatalog } from "../../redux/campersSlice";
import { fetchCampers } from "../../redux/opertions";

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
    <Page
      allCampers={allCampers}
      page={page}
      showLoadMoreBut={showLoadMoreButCatalog}
      scrollValue={scrollValueCatalog}
      idContainer='catalog-div'
      showFavorite={false}
      handleClick={handleClick}
    />
  )
};

export default CatalogePage;